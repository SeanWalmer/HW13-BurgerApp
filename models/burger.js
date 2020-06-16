const orm = require(`../config/orm`);

const burger = {
    selectAllBurgers: function(cb){ 
        orm.selectAll(function(res){
            cb(res);
        });
    },
    addBurger: function(name, cb){
        orm.insertOne(name, false, function(res){
            cb(res);
        });
    },
    eatBurger: function(name){
        orm.updateOne(name, true, function(res){
            cb(res, cb);
        });
    }
};

module.exports = burger;