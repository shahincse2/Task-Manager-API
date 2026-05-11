const app = require("./app");
const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server run success on port ${PORT}`);
});