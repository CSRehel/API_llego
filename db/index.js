const { Pool } = require('pg');
const { config } = require('./../config/config');

const URI = config.dbUrl;
const pool = new Pool({ connectionString: URI });

module.exports = pool;

