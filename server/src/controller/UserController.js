const UserDb = require('../models/User');
const { UserDbService } = require('../services/UserDbService');

exports.user_controller = {
    post : async (req, res) =>{
        try{
            UserDbService.addUserToDb(req.body);
            res.status(200);
            res.json({success: true});
        }catch(err){
            console.log(err);
            res.status(400).json({
                success: false
            });
        }
    },

    postNew : async (req, res)=>{
        try{
            UserDbService.addNewUser(req.body);
            res.status(200);
            res.json({success: true});
        }catch(err){
            console.log(err);
            res.status(400).json({
                success: false
            });
        }
    },

    getById : (req, res)=>{
        const id = req.params.id;
        UserDb.findById(id).then(list=>{
            res.status(200).json(list);
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    },

    getMyProfile : async (req, res)=>{
        try{
            const email = req.body.email;
            const details = await UserDb.findOne({USER_EMAIL: email});
            res.status(200).json(details);
        }catch(err){
            res.status(400).json({
                success: false
            })
        }
    }
}