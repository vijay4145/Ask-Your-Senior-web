const express = require('express')
const { verifyToken } = require('../middleware/VerifyToken')

//import homeController
const { bookcontroller } = require('../controller/BookController') 
const router = express.Router(); // New router instance from express library

//routes
router.get("/booklist/:clg/:sem/:branch", bookcontroller.getBookList);
router.get('/bookid/:id', bookcontroller.getBookById);
router.post('/addbook', verifyToken, bookcontroller.postbook)

module.exports = router
