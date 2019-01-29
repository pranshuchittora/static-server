const express = require("express");
let server = express();
server.use("/static", express.static(__dirname + "/static"));
server.listen(5000);
