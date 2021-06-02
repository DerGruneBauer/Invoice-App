const { Pool } = require("pg");
const credentials = new Pool ( {
    user: "postgres",
    password: "Password",
    host: "localhost",
    port: 5432,
    database: "Invoices",
    ssl: false
});

module.exports = credentials; 

