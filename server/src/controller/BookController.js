const BookDb = require('../models/Book');
const UserDb = require('../models/User');


exports.bookcontroller = {
    getBookList : (req, res)=>{
        const branch = req.params.branch;
        const college = req.params.clg;
        const semester = req.params.sem;
        const pipeline = [
            {
                $match:{
                    COLLEGE: college,
                    BRANCH: branch,
                    SEMESTER: semester
                }

            },
            {
                $project: {
                    _id: 1,
                    BOOK_NAME: 1,
                    PUBLICATION: 1,
                    PRICE: 1,
                    BOOK_IMAGE_URL: 1,
                    POSTED_BY: 1
                },
            },
        ]
        BookDb.aggregate(pipeline).then(list=>{
            res.status(200).json(list)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    },

    getBookById: (req, res)=>{
        const id = req.params.id;
        BookDb.findById(id).then(list=>{
            res.status(200).json(list);
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    },

    postbook: (req, res)=>{
        req.body.POSTED_BY = req.body.email;
        const {BOOK_NAME, PUBLICATION, PRICE,  POSTED_BY, DESCRIPTION, BRANCH, SEMESTER, BOOK_IMAGE_URL } = req.body;
        if(BOOK_NAME && PUBLICATION && PRICE && POSTED_BY && DESCRIPTION && BRANCH && SEMESTER && BOOK_IMAGE_URL){
            const new_book = new BookDb(req.body);
            new_book.save().then(item=>{
                UserDb.updateOne(
                    {USER_EMAIL: req.body.email},
                    {$push : {BOOKS: {
                      id: item._id,
                      NAME: item.BOOK_NAME
                    }}}
                  ).then(res=>{
                  })
                res.status(200).json({success: true});
            }).catch(err=>{
                res.status(400).json({
                    success: false
                })
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Please Complete All fields"
            })
        }
    }
}