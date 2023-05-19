const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async ()=>{
    // await mongoose.connect('mongodb://127.0.0.1:27017/TernaWeb');
    const uri = process.env.db_uri;
    await mongoose.connect(uri);
    console.log('mongoose connected1');
}

connectToMongo().catch(err => console.log(err));


module.exports = connectToMongo;
