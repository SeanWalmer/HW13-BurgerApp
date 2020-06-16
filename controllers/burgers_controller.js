const express = require(`express`);
const router = express.Router();
const burger = require(`../models/burger.js`);


// renders all html with all burgers passed to handlebars which handles the sorting
router.get(`/`, function(req, res) {
    burger.allBurgers(function(data){
        const obj = {
            burgers: data
        }
        console.log(obj);
        res.render('index', obj);
    })
});

// handles submitting a new burger to the database
router.post(`/api/add-burger/:burger`, function(req, res){
    burger.addBurger(req.params.burger, function (result) {
        res.json({ id: result.insertId });
    });
});

router.post(`/api/remove-burger/:id`, function(req, res){
    burger.eatBurger(req.params.id, function (result) {
        res.json({ id: result.insertId });
    });
});





module.exports = router;