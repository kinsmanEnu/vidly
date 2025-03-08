const Joi  = require('joi');


const validateGenre = (movie) => {
    const schema = Joi.object({
        genre: Joi.string().min(3).required(),
    });

    return schema.validate(movie);
}

module.exports = validateGenre;