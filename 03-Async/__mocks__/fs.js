'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  console.log(file, typeof file, file.match);
  console.trace();
  if (!file || file.match(/bad/i)) {
    cb(`${file} has an error`);
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};