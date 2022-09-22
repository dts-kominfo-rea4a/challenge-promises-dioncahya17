const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
<<<<<<< HEAD
const promiseOutput = emosi => {
  // getData().then(data => console.log(data));
  promiseTheaterIXX().then(data => console.log(data))
=======
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
>>>>>>> e79597819cc791142e43095d5cdad4e44cda959a
}


module.exports = {
  promiseOutput
};
