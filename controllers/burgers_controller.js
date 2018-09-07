var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

router.get('/' , function (req, res) {
    res.redirect('/index');
});
router.get('/index' , function (req, res) {
    burger.selectAll("burgers", function (data) {
        console.log(data);
        res.render("index",{
            burgers: data
        })

    });
});

router.post('/burger/eat/create', function (req,res) {
    burger.insertOne(req.params.burgers_name,function () {
        res.redirect('/index');
    })
});

router.post('/burgers/eat/:id',function (req,res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');

    })

});
module.exports = router;