const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = "project";

const userSchema = new mongoose.Schema({
    PROJECT_NAME : {
        type: String,
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
    PROJECT_IMAGE_URL: {
        type : String,
        required: true
    },
    GITHUB_LINK: {
        type: String,
        required: true
    },
    LINKEDIN_LINK : {
        type: String,
        required: true
    },
    TAGS : []
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, userSchema);