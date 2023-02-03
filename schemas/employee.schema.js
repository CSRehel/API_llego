const joi = require('joi');

const name = joi.string().min(3).max(100);
const lastname = joi.string().min(3).max(100);
const birthday = joi.date().greater('01-01-1940').less('01-01-2004');
const id_department = joi.number();

const createEmployeeSchema = joi.object({
    name: name.required(),
    lastname: lastname.required(),
    birthday: birthday.required(),
    id_department: id_department.required(),
})

module.exports = {
    createEmployeeSchema,
}