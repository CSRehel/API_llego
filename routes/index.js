const express = require('express');
const employeeRouter = require('./employee.routes');

function routerApi(app) {
    const router = express.Router();
    app.use(router);
    router.use('/', employeeRouter);
}

module.exports = routerApi;