const connection = require("./connection.js");

const orm = {
    selectAll: function () {
        connection.query('select * from Burgers', function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (burger, dev) {
        connection.query(`insert into burgers(burger_name, devoured) values(?, ?)`, [burger, dev], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (burger, dev) {
        connection.query(`update burgers set devoured = ? where burger_name = ?`, [burger, dev], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;