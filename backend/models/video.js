const mongoose = require('mongoose');

// ***** Build Your Model Video Schema here *****
const videoSchema = mongoose.Schema({
    title: {type: String, required: true},
    rating: {type: String, required: true},
    length: {type: String, required: true},
    genre:{type: String, required: true},
    rent: {type: String, required: true}
})

module.exports = mongoose.model('Video', videoSchema);
