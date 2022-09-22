const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = emosi => {
  promiseTheaterIXX().then((data => console.log(data)))
}


module.exports = {
  promiseOutput
};
