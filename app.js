const cron = require("node-cron");
const express = require("express");
const { checktransactions } = require("./controllers/scheduler");
//console.log(checktransactions);

app = express();
cron.schedule("* * * * *", checktransactions);
app.listen(5000, () => {
  console.log("Server listening at 5000");
});
