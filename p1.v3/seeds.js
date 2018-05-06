var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

//data to be added to the db
var data = [
    {
        name: "Broken Mountains",
        image: "https://farm8.staticflickr.com/7161/6498260841_dc8e89d348.jpg",
        description: "Beautiful landscape of breathtaking mountain sides perfect to camp the night."
    },
    {
        name: "Secret Cove",
        image: "https://farm3.staticflickr.com/2927/33369960251_b5bd59549e.jpg",
        description: "Quiet and lonely cove to sit the night through with a fire. Perfect waves meant for a board"
    },
    {
        name: "Northrend",
        image: "https://farm1.staticflickr.com/598/32649324311_8d6b2ec3dd.jpg",
        description: "50 bellow 0 temperatures await you. The perfect place to camp if you plan to sell your soul to a millenary evil"
    }

];

function seedDB() {
    //Remove all Campgrounds
    Campground.remove({},function (err) {
        if(err){
            console.log('ERROR: '+err);
        } else {
            console.log("Database campgrounds cleaned");

            //create seed entries
            data.forEach(function (t) {
                Campground.create(t, function (err, camp) {
                    if(!err){
                        console.log("Added Campground ");

                        //Add comments
                        Comment.create(
                            {
                                text: 'I love this campground',
                                author: 'me'
                            }, function (err, comment) {
                                if(!err){
                                    camp.comments.push(comment);
                                    camp.save();
                                    console.log("Created new comments");
                                }else{
                                    console.log('ERROR: '+err);
                                }
                            }
                        );
                    } else {
                        console.log('ERROR: '+err);
                    }
                });
            });
        }
    });




}

module.exports = seedDB;