const express = require(`express`);
const burger = require(`../models/burger.js`);

const router = express.Router();

router.get(`/`, function(req, res) {
    burger.selectAllBurgers(function(data){
        const obj = {
            burgers: data
        }
        console.log(obj);
        res.render('index', obj);
    })
});

module.exports = router;