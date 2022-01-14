const mongoose = require('mongoose')

const Book = new mongoose.Schema({
    title: {type: String, required: true},
    isbn: {type: String, required:true},
    author: {type:String, required:true},
    description: {type: String},
    published_date: {type: Date},
    updated_date: {type: Date, default: Date.now}
})

module.exports= mongoose.model('book',Book)