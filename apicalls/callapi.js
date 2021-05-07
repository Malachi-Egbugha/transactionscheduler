const axios = require("axios");
const { TRANSACTIONRECORD } = require("./apiconfig");
//statistics
exports.stats = async () => {
  try {
    let fetchtransactionapi = await axios.get(`${TRANSACTIONRECORD}`);
    return fetchtransactionapi.data;
  } catch (err) {
    console.log(err);
  }
};
