const { stats } = require("./../apicalls/callapi");
exports.checktransactions = async () => {
  let transactioninfo = await stats();
  console.log(transactioninfo);
};
