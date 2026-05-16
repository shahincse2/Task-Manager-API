const TasksModel = require('../models/TasksModel');

// ১. createTask
exports.createTask = async (req, res) => {
    try {
        let reqBody = req.body;
        reqBody.email = req.email; 
        let data = await TasksModel.create(reqBody);
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// ২. deleteTask
exports.deleteTask = async (req, res) => {
    try {
        let id = req.params.id;
        let email = req.email;
        let Query = { _id: id, email: email };
        let data = await TasksModel.deleteOne(Query);
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// ৩. updateTaskStatus
exports.updateTaskStatus = async (req, res) => {
    try {
        let id = req.params.id;
        let status = req.params.status;
        let email = req.email;
        let Query = { _id: id, email: email };
        let reqBody = { status: status };
        let data = await TasksModel.updateOne(Query, reqBody);
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// ৪. listTaskByStatus
exports.listTaskByStatus = async (req, res) => {
    try {
        let status = req.params.status;
        let email = req.email;
        let data = await TasksModel.find({ email: email, status: status });
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// ৫. taskStatusCount
exports.taskStatusCount = async (req, res) => {
    try {
        let email = req.email;
        let data = await TasksModel.aggregate([
            { $match: { email: email } },
            { $group: { _id: "$status", sum: { $sum: 1 } } }
        ]);
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}




// ৬. listAllTasks
// List All Tasks with Pagination
exports.listAllTasks = async (req, res) => {
    try {
        let email = req.email;
        let pageNo = Number(req.params.pageNo) || 1; 
        let perPage = 10;
        let skipRow = (pageNo - 1) * perPage;
        let data = await TasksModel.find({ email: email })
                                   .sort({ createdDate: -1 })
                                   .skip(skipRow)
                                   .limit(perPage);
        let total = await TasksModel.countDocuments({ email: email });

        res.status(200).json({ 
            status: "success", 
            total: total,
            page: pageNo,
            perPage: perPage,
            data: data 
        });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}



// ৬. listAllTasks
//exports.listAllTasks = async (req, res) => {
//    try {
//        let email = req.email;
//        let data = await TasksModel.find({ email: email });
//        res.status(200).json({ status: "success", data: data });
//    } catch (e) {
//        res.status(400).json({ status: "fail", data: e.toString() });
//    }
//}

// ৭. searchTask
exports.searchTask = async (req, res) => {
    try {
        let email = req.email;
        let searchKeyword = req.params.keyword;
        let SearchQuery = {
            email: email,
            $or: [
                { title: { $regex: searchKeyword, $options: "i" } },
                { description: { $regex: searchKeyword, $options: "i" } }
            ]
        };

        let data = await TasksModel.find(SearchQuery);
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}