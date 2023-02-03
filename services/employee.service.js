const pool = require('../db');

class employeeService {

    /**
     * @description obtiene la lista de los empleados registrados en el sistema
     * @returns retorna la lista de empleados en un array de objetos
     */
    async getEmployees() {
        const query = 'SELECT * FROM EMPLOYEES ORDER BY ID ASC';
        const result = await pool.query(query);
        const employees = result.rows;
        return employees;
    }

    /**
     * @description registra un empleado en el sistema
     * @param {String} name nombre del empleado
     * @param {String} lastname apellido del empleado
     * @param {Date} birthday fecha de nacimiento del empleado tipo yyyy-mm-dd
     * @param {Number} id_department id del departamento al cual pertenece
     */
    async employeeRegistration(name, lastname, birthday, id_department) {
        const query = {
            text: 'insert into employees (name, lastname, birthday, id_department) values ($1, $2, $3, $4) RETURNING *',
            values: [`${name}`, `${lastname}`, `${birthday}`, id_department]
        }

        const result = await pool.query(query);
        const employees = result.rowCount;
        return employees;
    }
}

module.exports = employeeService;