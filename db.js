const mongoose = require('mogoose')

mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var userSchema = new mongoose.Schema({
    name: String
  });

var User = mongoose.model('User', userSchema);

