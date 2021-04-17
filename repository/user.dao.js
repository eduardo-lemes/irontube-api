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
                const newUser = this.user.create({username, passwordHash});

                return newUser;
            } 
        } catch (error) {
            throw new Error();
        }
    }
}

module.exports = new UserRepository(User);