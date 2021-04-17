const { Router } = require('express');
const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken');
const userRepo = required('../repository/user.dao');

const router = Router();

router.post('/signup', async (req, res, next) => {
    try {
        const user = await userRepo.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error while register new user'});
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userRepo.findUser(username);

        if(!user) {
            return res.status(400).json();
        }

        const compareHash = bcrypt.compareSync(passwor, user.passwordHash);

        if(!compareHash) {
            return res.status(400).json();
        }

        const payload = {
            id: user.id,
            username: user.username,
        };

        const token = jwt.sign(
            payload,
            process.env.SECRET_JWT,
            { expiresIn: '1day'},
        )
        res.status(200).json({ payload, token });


    } catch (error) {
        res.status(500).json();
    }
})

module.exports = router;