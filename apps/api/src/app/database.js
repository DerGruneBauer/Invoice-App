const express = require('express');
const db = express.Router();
const pool = require("./connection");


//DB endpoints//
db.get('/', (req, res) => {
  res.send({data: 'hello'});
})

db.get('/users', async (req, res) => {
    const account = await pool.query(
        'SELECT * FROM USERS'
    );
    res.json(account.rows);
})

db.get('/users/:id', async (req, res) => {
    const account = await pool.query(
        `SELECT * FROM USERS WHERE id=${req.params.id}`
    );
    res.json(account.rows);
})

db.get('/users/:id/invoices', async (req, res,) => {
    const account = await pool.query(
        `SELECT invoices.items, users.id, invoices.id FROM invoices
        JOIN users
        ON users.id = invoices.user_id
        WHERE users.id=${req.params.id}`
    );
    res.json(account.rows);
})

//Get all users
// db.get('/users', async (req, res) => {
//   try {
//       const account = await pool.query(
//           `select * from users`);
//           res.json(account.rows);
//   } catch (error) {
//       console.error(err.message);
//   }
// });


module.exports = db;
