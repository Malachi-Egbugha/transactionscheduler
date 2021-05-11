const { stats, sendtransactions } = require("./../apicalls/callapi");
exports.checktransactions = async () => {
  try {
    let emails = [
      "megbugha@enugudisco.com",
      "udeshmukh@enugudisco.com",
      "jyekini@enugudisco.com",
      "nduson2k@gmail.com",
    ];
    let message = "";
    let transactioninfo = await stats();
    //store number of  transaction variable from transaction api
    const { Data } = await transactioninfo;

    //     const prepaid = Data[0].count;
    //   const postpaid = Data[1].count;

    //construct message
    message = Data
      ? `Number of Prepaid transactions = ${Data[0].count}, Number of PostPaid transactions = ${Data[1].count} `
      : "Transaction server failed";

    //send transaction to telegram bolt
    let sentransaction = await sendtransactions({
      emails,
      message,
    });
  } catch (err) {
    console.log(err);
  }
};
