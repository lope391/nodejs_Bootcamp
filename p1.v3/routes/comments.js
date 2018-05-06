var express = require('express');
var router = express.Router({mergeParams: true});
var Campground = require('../models/campground');
var Comment = require('../models/comment');

/* GET users listing. */
router.get('/new', function(req, res, next) {

    Campground.findById(req.params.id, function (err, campf) {
        if(!err){
            res.render("comments/new", { title: 'New Comment', camp: campf });
        } else {
            console.log("ERROR ;" + err);
        }
    })
});

router.post('/', function (req, res, next) {

    //lookup camp ID
    Campground.findById(req.params.id, function (err, campf) {
        if(!err){
            Comment.create(req.body.comm, function (err, comment) {
                if(!err){
                    campf.comments.push(comment);
                    campf.save();
                    res.redirect('/campgrounds/' + campf._id);
                } else {
                    console.log("ERROR ;" + err);
                }
            });
        } else {
            console.log("ERROR ;" + err);
            res.redirect('/campgrounds');
        }
    });

});

module.exports = router;
