const orm = require(`../config/orm`);

const burger = {
    allBurgers: function(cb){ 
        orm.selectAll(function(res){
            cb(res);
        });
    },
    addBurger: function(name, cb){
        orm.insertOne(name, false, function(res){
            cb(res);
        });
    },
    eatBurger: function(id, cb){
        orm.updateOne(id, true, function(res){
            cb(res, cb);
        });
    }
};

module.exports = burger;