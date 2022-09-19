const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let hasilMarah = 0
let hasilTidakMarah = 0

const promiseOutput = emosi => {
  if (emosi === 'marah') {
    //me-return suatu fungsi
    return promiseTheaterIXX().then((value) => {
      value.forEach((array) => {
        if (array.hasil === 'marah') {
          hasilMarah++;
        }
        else if (array.hasil === 'tidak marah') {
          hasilTidakMarah++;
        }
        else {
          console.log('Error')
        }
      })
    })
  }
}


module.exports = {
  promiseOutput,
};
