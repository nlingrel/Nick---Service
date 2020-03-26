const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const seedData = require('./dbseed')
const seeder = require('mongoose-seed') 
var Review = require('./ReviewModel')

const reviewSchema = new mongoose.Schema({
    "image": Array,
    "overall": Number,
    "vote": String,
    "verified": Boolean,
    "reviewTime": String,
    "reviewerID": String,
    "asin": String,
    "style": Object,
    "reviewerName": String,
    "reviewText": String,
    "summary": String,
    "unixReviewTime": Number,
    "sweepstakes": Boolean,
    "authorCount": Number

});



reviewSchema.plugin(mongoosePaginate);
Review = mongoose.model('Review', reviewSchema);


Product = mongoose.model('Product', reviewSchema);

seeder.connect('mongodb://mongo:27017/newdock', function(){
    seeder.loadModels(['./ReviewModel.js']);
});

seeder.clearModels(['Review'], function (){
    seeder.populateModels(seedData, function (){
        seeder.disconnect();
    })
});


mongoose.connect('mongodb://mongo:27017/newdock/data', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!

});


// Review = mongoose.model('Review', reviewSchema);



module.exports.Review = Review;
module.exports.db = db;