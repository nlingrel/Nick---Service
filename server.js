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
const mongoosePaginate = require('mongoose-paginate')



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

app.get('/', (req, res) => res.send(

    'Review service'))


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
    Review.paginate({ asin: req.query.productID }, { page: page })
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

            res.status(200).send(results)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: err })
        })

});

app.listen(port, () => console.log(`Service listening on port ${port}!`))