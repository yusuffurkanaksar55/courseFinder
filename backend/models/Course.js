const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    instructor: String,
    price: String,
    platform: String,
    link: String
});

module.exports = mongoose.model('Course', courseSchema); 