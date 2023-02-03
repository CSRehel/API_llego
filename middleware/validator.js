const boom = require('@hapi/boom');

/**
 * @description valida la data obtenida desde el payload
 * @param {*} schema esquema a usar para la validación
 * @param {*} property propiedad usada para recibir data.
 * [ body | query | params ]
 */
function validatorHandler(schema, property){
    return(req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });

        if (error) {
            next(boom.badRequest(error));
        }

        next();
    }
}

module.exports = validatorHandler;