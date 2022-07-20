const router = require('express').Router();
const User = require('../models/user');

router.post("/login", (req, res) => {
    const username = req.body[0];
    User.findByUsername(username)
        .then(user => {
            if (user === undefined) {
                res.status(200).send(user[0])
            } else {
                User.create(username).then(user => res.status(200).send(user))
            }
        }
        )
})

module.exports = router;


