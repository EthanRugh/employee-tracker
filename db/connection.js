const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'tim',
    password: 'tim',
    database: 'company'
});

module.exports = db;