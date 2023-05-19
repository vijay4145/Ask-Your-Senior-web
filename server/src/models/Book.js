const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = "book";

const userSchema = new mongoose.Schema({
    BOOK_NAME : {
        type: String,
        required: true
    },
    PUBLICATION : {
        type : String,
        required: true
    },
    PRICE : {
        type : String,
        required: true
    },
    POSTED_ON : {
        type : Date,
        default: Date.now
    },
    POSTED_BY : {
        type : String,
        required: true
    },
    DESCRIPTION : {
        type : String,
        required: true
    },
    COLLEGE : {
        type : String,
        required: true
    },
    BRANCH : {
        type : String,
        required: true
    },
    SEMESTER: {
        type : String,
        required: true
    },
    BOOK_IMAGE_URL: {
        type : String,
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, userSchema);