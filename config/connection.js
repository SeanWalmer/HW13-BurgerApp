var mysql = require("mysql");
var databaseInfo = require("./databaseObj");
var connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(databaseInfo);
}

// create the connection information for the sql database


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// connection.query('select * from burgers;', function (err, result) {
//     if (err) {
//         throw err;
//     }
//     console.log(result);
// });

module.exports = connection;

