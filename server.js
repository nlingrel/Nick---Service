const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')
const path = require('path')
//const db = require('./db')
//const review = require('./db')
const app = express()
const port = 8084
const mongoose = require('mongoose')

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
    "unixReviewTime": Number
});

Review = mongoose.model('Review', reviewSchema);



app.use(express.static(path.join(__dirname, "client/dist")));

app.get('/', (req, res) => res.send(

    'Review service'))

app.get('/reviews', (req, res, next) => {
    console.log(req)
    Review.find({ asin: req.query.productID }).exec()
        .then(docs => {
            res.status(200).send(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: err })
        })

});

app.listen(port, () => console.log(`Service listening on port ${port}!`))