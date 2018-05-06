var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var Campground = require('../models/campground');
var commentsRoute = require('./comments');

router.use(methodOverride("_method"));
router.use('/:id/comments', commentsRoute);

//get method of campgrounds
router.get('/', function(req, res, next) {
    //Get all campgrounds from DB
    Campground.find({}, function (err, camps) {
        if(!err){
            res.render("campgrounds/campgrounds", { title: 'Campgrounds', camps: camps })
        } else {
            console.log("ERROR ;" + err);
        }
    });
});

//POST method of campgrounds
router.post('/',function (req, res, next) {
    var name = req.body.campname;
    var img = req.body.campimg;
    var desc = req.body.desc;
    var newCamp = {name: name, image:img, description:desc};

    //Create new campground to save to DB
    Campground.create(newCamp, function (err, camp) {
        if(!err){
            res.redirect('/campgrounds/');
        } else {
            console.log("ERROR ;" + err);
        }
});

    //res.redirect('/campgrounds');
});

//method to get view of new campground
router.get('/new',function (req, res, next) {
    res.render("campgrounds/new", { title: 'New Campgrounds'});
});

//Edit campground view
router.get('/:id/edit', function (req, res, next) {

    Campground.findById(req.params.id, function (err, camp) {
        if(!err){
            res.render("campgrounds/editcamp", {title: 'Edit Post', camp: camp});
        } else {
            console.log("ERROR ;" + err);
        }
    });


});

//show specific campground
router.get('/:id', function (req, res, next) {

    //Find the necessary camp
    Campground.findById(req.params.id).populate("comments").exec( function (err, camp) {
        if(!err){
            console.log(camp);
            res.render("campgrounds/showcamp", {title: "Show Camp", camp: camp});
        } else {
            console.log("ERROR ;" + err);
        }
    });
});

//Edit camps route
router.put('/:id', function (req, res, next) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campg, function (err, uptdCamp) {
        if(!err){
            res.redirect('/campgrounds/' + req.params.id);
        } else {
            console.log("ERROR ;" + err);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Campground.findByIdAndRemove(req.params.id, function (err, uptdCamp) {
        if(!err){
            res.redirect('/campgrounds/');
        } else {
            console.log("ERROR ;" + err);
        }
    });
});


module.exports = router;
