const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

class UserRepository {
    constructor(UserModel) {
        this.user = UserModel;
    }

    register = async (user) => {
        const { username, password } = user;
        try {
            const user = await this.user.findOne({username});

            if(user) {
                throw new Error();
            } else {
                const salt = bcrypt.genSaltSync(10);
                const passwordHash =  bcrypt.hashSync(password, salt);
                const newUser = await this.user.create({username, passwordHash});

                return ({
                    username: newUser.username,
                    id: newUser._id,
                })
            } 
        } catch (error) {
            throw new Error();
        }
    };

    findUser = async (username) => {
        try {
            const user = await this.user.findOne({username});
            return user;
        } catch (error) {
            throw new Error();
        }
    };
}

module.exports = new UserRepository(User);