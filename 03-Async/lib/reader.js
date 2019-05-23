'use strict';

const fs = require('fs');
let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files], callback);
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) { callback(err); }
    else { callback(undefined, data); }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */

//should read the 3 files and console log thier content, should read in order and return arry
//should also be able to run npm test and have the reader test file run against that same library to make the same assertion.

//1Fix reader.js so that the files are read in the order specified on the command line AND returns an array of their contents in that same order.
const readAll = (paths, callback) => {
  if (paths.length != 3) {
    return callback('expected 3 path');

  }

  let contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log(data);
      console.log('Read File 1');
      contents.push(data.toString().trim());


      readOne(paths[1], (err, data) => {
        if (err) {
          callback(err);
        }
        else {
          console.log('Read File 2');
          contents.push(data.toString().trim());
          readOne(paths[2], (err, data) => {
            if (err) {
              callback(err);
            }
            else {
              console.log('Read File 3');
              contents.push(data.toString().trim());
              callback(null, contents);

            }
          });
        }
      });
    }
  });



};

