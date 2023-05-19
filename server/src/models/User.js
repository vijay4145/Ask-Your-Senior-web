const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = "user";

const userSchema = new mongoose.Schema({
    USER_NAME : {
        type: String,
        required: true
    },
    USER_EMAIL : {
        type : String,
        required: true,
        unique: true,
    },
    REPOSITORIES : [],
    BOOKS : [],
    LINKS : [],
    PROFILE_PIC_URL : {
        type: String,
    },

})

module.exports = mongoose.model(DATABASE_TABLE_NAME, userSchema);