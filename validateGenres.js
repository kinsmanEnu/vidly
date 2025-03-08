const Joi  = require('joi');

const validateGenre = (movie) =>{
    const schema = {
        name: Joi.string().min(3).require(),
    }
    return Joi.validate(movie, schema);
}

module.exports = {
    validate: validateGenre,
}