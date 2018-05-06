var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

//creare cat object
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add cats to mongoDB
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grumpy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("ERROR: " + err);
//     } else {
//         console.log("Cat Added");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "orion",
    age: 3,
    temperament: "bitchy"
}, function(err, cat){
    if(err){
        console.log("ERROR :" + err);
    }else{
        console.log(cat);
    }
});

//search and print all cats
Cat.find({},function(err,cats){
    if(err){
        console.log("ERROR :" + err);
    } else {
        console.log(cats);
    }
});