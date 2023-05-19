const User = require('../models/User');

class UserDbService {
    static async addUserToDb(data){
        const result = await User.find({USER_EMAIL: data.email});
        let user = {
            USER_EMAIL : data.email,
            USER_NAME : data.USER_NAME,
        };
        if(data.REPOSITORIES)
            user = {...user, REPOSITORIES: data.REPOSITORIES};
        if(data.PROFILE_PIC_URL)
            user = {...user, PROFILE_PIC_URL: data.PROFILE_PIC_URL};
        if(data.BOOKS)
            user = {...user, BOOKS: data.BOOKS}
        if(data.LINKS)
            user = {...user, LINKS: data.LINKS}
        if(result.length > 0){
            await User.updateOne(
                { USER_EMAIL : data.email},
                {$set: user}
            );
        }else{
            user = await new User({...user});
            const savedNote = await user.save();
        }
    }

    static async addNewUser(data){
        const result = await User.find({USER_EMAIL: data.email});
        let user = {
            USER_EMAIL : data.email,
            USER_NAME : data.USER_NAME,
        };
        if(result.length === 0){
            user = await new User({...user});
            const savedNote = await user.save();
        }
    }


   
}

module.exports = { UserDbService };