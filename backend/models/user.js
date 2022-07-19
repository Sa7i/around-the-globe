const Joi = require('joi');
const connection = require('../config');
const db = connection.promise();

const validate = (data, forCreation = true) => {
    return Joi.object({
        username: Joi.string().min(3).max(30).required(),
    }).validate(data, {abortEarly: false}).error;
}

findByUsername = (username) => {
    console.log("FIND BY USERNAME");
    return db.query('SELECT * FROM usernames WHERE username=?', [username]);
}

const create = (username) => {
    console.log("CREATE");
    return db.query('INSERT INTO usernames (username) VALUES (?)', [username]);
}


module.exports = {
    findByUsername,
    validate,
    create
}



