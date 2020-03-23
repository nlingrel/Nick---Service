const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')
const path = require('path')
//const db = require('./db')
const dbHelp = require('./dbHelperFunctions')
const app = express()
const port = 8084
const mongoose = require('mongoose')
const pirateSpeak = require('pirate-speak')
const piratize = require('./piratize')
const mongoosePaginate = require('mongoose-paginate')



piratize.addToDictionary()
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/test1', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!

});
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
    "sweepstakes": Boolean

});

const productSchema = new mongoose.Schema({
    "productID": Number,
    "name": String,
    "image": String
})

reviewSchema.plugin(mongoosePaginate);


Product = mongoose.model('Product', reviewSchema);

Review = mongoose.model('Review', reviewSchema);



app.use(express.static(path.join(__dirname, "client/dist")));

app.get('/', (req, res) => res.send('Review service'))



app.get('/reviews', (req, res, next) => {
    // Review.paginate({ asin: req.query.productID }).then(results => {
    //     console.log(results.docs)
    //     res.send(results.docs)
    // })
    //     .catch(err => {
    //         console.log(err)
    //         res.status(500).json({ error: err })
    //     })
    const page = parseInt(req.query.page)
    const overall = parseInt(req.query.overall)

    const reviewCountByRating = {
        total: 0,
        5: { star: '5', count: 0 },
        4: { star: '4', count: 0 },
        3: { star: '3', count: 0 },
        2: { star: '2', count: 0 },
        1: { star: '1', count: 0 }
    }
    Review.count({ asin: req.query.productID, overall: 5 })
        .then(result => reviewCountByRating[5].count = result)
    Review.count({ asin: req.query.productID, overall: 4 })
        .then(result => reviewCountByRating[4].count = result)
    Review.count({ asin: req.query.productID, overall: 3 })
        .then(result => reviewCountByRating[3].count = result)
    Review.count({ asin: req.query.productID, overall: 2 })
        .then(result => reviewCountByRating[2].count = result)
    Review.count({ asin: req.query.productID, overall: 1 })
        .then(result => reviewCountByRating[1].count = result)
    Review.count({ asin: req.query.productID })
        .then(result => reviewCountByRating.total = result)
    Review.paginate({ asin: req.query.productID, overall: overall }, { page: page })
        .then(results => {

            results.docs.map(review => {
                review.reviewText = pirateSpeak.translate(review.reviewText)
                review.summary = pirateSpeak.translate(review.summary)
                review.sweepstakes = dbHelp.badgify(review)
                if (review.reviewerName === 'Amazon Customer') {
                    review.reviewerName = 'Arrtozone Customer'
                }

            });

            return results;
        })
        .then(results => {
            results.reviewCountByRating = reviewCountByRating
            res.status(200).send(results)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: err })
        })


});

app.listen(port, () => console.log(`Service listening on port ${port}!`))