const router = require('express').Router();
const User = require('../models/user');

router.post("/login", (req ,res) => {
    const  username = req.body[0];
    console.log("username", username);
    User.findByUsername(username)
        .then(user => { 
            !user ? res.status(404).send("User not found") : User.create(username).then(user => res.status(200).send(user));
        }
    )
    })

    module.exports = router;
    

