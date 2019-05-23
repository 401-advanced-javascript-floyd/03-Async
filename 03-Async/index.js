'use strict';
//calls on lib/reader.js
//willwork with 1.txt,2.txt,3.txt
//this file accepts files as parm, invocs fileReader func
const fileReader = require('./lib/reader.js');

// Obtain and assert input
let files = process.argv.slice(2);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
