// require mongoose: 
const mongoose = require('mongoose')

// schema:
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    description: {
        type: String,
    },
    year: {
        type: Number
    },
    quantity: {
        type: Number
    },
    imageURL: {
        type: String
    }
})

// model and export: 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book