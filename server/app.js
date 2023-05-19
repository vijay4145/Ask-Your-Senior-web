const express = require('express');
const app = express();
const { verifyToken } = require('./src/middleware/VerifyToken');
const connectToMongo = require('./src/services/DbConnection');
const homeRouter = require('./src/routes/HomeRoute');
const bookRouter = require('./src/routes/BookRoute')
const projectRouter = require('./src/routes/ProjectRoute')
const userRouter = require('./src/routes/UserRoute');

require('dotenv').config();

const cors = require('cors');
const corsOptions ={
    origin:process.env.ALLOW_ACCESS_TO_URL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

// routers
app.use('/', homeRouter);
app.use('/book', bookRouter);
app.use('/project', projectRouter);
app.use('/user', userRouter);


app.get('/auth', verifyToken ,(req, res)=>{
    console.log(req.headers);
    return res.json({greeting: "you are a verified user"});
})

module.exports = app;