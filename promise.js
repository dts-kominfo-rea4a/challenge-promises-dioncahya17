const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = emosi => {
  // getData().then(data => console.log(data));
  promiseTheaterIXX().then(data => console.log(data))
}


module.exports = {
  promiseOutput
};
