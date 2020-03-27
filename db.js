const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { seedData } = require('./dbseed')



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

mongoose.connect('mongodb://localhost/review_data', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
  console.log('db connection open')
  db.dropCollection("reviews", function (err, result) {

    if (err) {

        console.log("error delete collection");

    } else {

        Review.insertMany(seedData)
    .then(function(mongooseDocuments) {
         //
    })
    .catch(function(err) {
        console.log(err)
    });

    }

});
  
})





module.exports.Review = Review;
module.exports.db = db;