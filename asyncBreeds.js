// asyncBreeds.js
const fs = require("fs");
const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    if (!error) {
      return callback(data);
    } else {
      return callback(undefined);
    }
  });
};

let returnData = data => {
  console.log(data);
  return data;
};

module.exports = breedDetailsFromFile;
