'use strict';

const fs = require('fs');
let rand = Math.random() * 100 + 1;

const editFile = (file) => {
  fs.readFile(file, err => {
    if (err) {
      throw err;
    }
    else {
      fs.writeFile(file, rand, (err) => {
        if (err) console.log(err);

      });
    }


  });
};




editFile('./files/test.txt');


module.exports = editFile;