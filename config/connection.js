var mysql = require("mysql");
var databaseInfo = require("./databaseObj");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "yl1suaubi7atczxy",
  
    // Your password
    password: "xf3kahvqo235rlwt",
    database: "skn5zjgnkmk9b2fy"
});

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

