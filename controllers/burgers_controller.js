var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burger", function (req, res) {
    burger.create([
        "meat", "veggie", "cheese", "bun"
    ], [
        req.body.meat, req.body.veggies, req.body.cheese, req.body.bun
    ], function(result) {
        res.json({ id: result.insertId });
        console.log (req.body.meat);
        console.log (req.body.veggies);
        console.log (req.body.cheese);
        console.log (req.body.bun);
        
    });
});

router.put("/api/burger/:id", function (req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        cheese: req.body.cheese
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status (404).end();
        } else {
            res.status(200).end();
        }
    });

    burger.update({
        bun: req.body.bun
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status (404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router; 
