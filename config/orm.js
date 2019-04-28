// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += "VALUES ('";
    queryString += val;
    queryString += "') ";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, col, colValue,condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += col;
    queryString += " = " + colValue;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;