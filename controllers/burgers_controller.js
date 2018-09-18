var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();


router.get('/', function (req, res) {
    burger.selectAll("burgers", function (data) {
        res.render("index", {
            burgers: data
        })

    });
});

router.post('/burgers/post', function (req, res) {
    console.log(req.body);
    burger.insertOne(req.body.info, function () {
        res.redirect('/');
    })
});

router.get('/burgers/:id/:status', function (req, res) {
    var newValue;
    if (req.params.status === "0") {
        newValue = 1;
        burger.updateOne(newValue, req.params.id, function (data) {
            res.redirect("/");
        })
    } else if (req.params.status === "1") {
        newValue = 0;
        burger.updateOne(newValue, req.params.id, function (data) {
            res.redirect("/");
        })
    }

    console.log("Hi im paul");
    console.log(req.params.status);
    console.log(newValue, "hi paul");
});
module.exports = router;