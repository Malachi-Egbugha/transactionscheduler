const { stats } = require("./../apicalls/callapi");
exports.checktransactions = async () => {
  let transactioninfo = await stats();
  //store the variable
  const { Message, Data } = await transactioninfo;
  const prepaid = Data[0].count;
  const postpaid = Data[1].count;
  //check if message
  //construct the message
  //send to the telegram api
  console.log(postpaid);
  console.log(prepaid);
};
