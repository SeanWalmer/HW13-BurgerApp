const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        connection.query('select * from burgers;', function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (burger, dev, cb) {
        connection.query(`insert into burgers(burger_name, devoured) values(?, ?);`, [burger, dev], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (id, dev, cb) {
        connection.query(`update burgers set devoured = ? where id = ?;`, [dev, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;