const express = require('express');
const router = express.Router();

const { createEmployeeSchema } = require('./../schemas/employee.schema');
const validatorHandler = require('../middleware/validator');
const employeeService = require('../services/employee.service');
const service = new employeeService();

// obtiene la lista de empleados
router.get('/', async (req, res, next) => {
    try {
        const employees = await service.getEmployees();
        res.json(employees);
    } catch (e) {
        next(e);
    }
});

// registro de empleados
router.post('/', validatorHandler(createEmployeeSchema, 'body'), async(req, res, next) => {
    try {
        const { name, lastname, birthday, id_department } = req.body;
        await service.employeeRegistration(name, lastname, birthday, id_department);
        res.sendStatus(201);
    } catch (e) {
        next(e);
    }
});

module.exports = router;