const cron = require("node-cron");
require("dotenv").config();
//const express = require("express");
const { checktransactions } = require("./controllers/scheduler");

//app = express();
cron.schedule("*/59 * * * *", checktransactions, {
  scheduled: true,
});
//app.listen(5000, () => {
//console.log("Server listening at 5000");
//});
