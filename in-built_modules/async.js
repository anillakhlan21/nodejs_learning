const async = require('async');
const fs = require('fs');

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

async.parallel(
  files.map(file => {
    return (callback) => {
      fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
          return callback(err);
        }
        // Do something with the data
        callback(null, data);
      });
    };
  }),
  (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    // Do something with the results array
  }
);



async.series([
    (callback) => {
      // Do task 1
      callback(null, 'result 1');
    },
    (callback) => {
      // Do task 2
      callback('error occurred during task 2');
    },
    (callback) => {
      // Do task 3
      callback(null, 'result 3');
    }
  ], (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    // Do something with the results array
  });

  async.waterfall([
    (callback) => {
      // Do task 1
      callback(null, 'result 1');
    },
    (result1, callback) => {
      // Do task 2, using result1
      callback(null, 'result 2');
    },
    (result2, callback) => {
      // Do task 3, using result2
      callback(null, 'result 3');
    }
  ], (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    // Do something with the final result
  });