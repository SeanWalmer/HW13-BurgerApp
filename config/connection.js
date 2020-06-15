var mysql = require("mysql");
var databaseInfo = require("./databaseObj");

// create the connection information for the sql database
var connection = mysql.createConnection(databaseInfo);

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;

