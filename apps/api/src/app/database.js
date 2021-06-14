const express = require('express');
const db = express.Router();
const pool = require("./connection");

//DB endpoints//
//GET Requests
db.get('/', (req, res) => {
  res.send({data: 'hello'});
})

//Get all users
db.get('/users', async (req, res) => {
    const account = await pool.query(
        'SELECT * FROM USERS'
    );
    res.json(account.rows);
})

//Get user by Id
db.get('/users/:id', async (req, res) => {
    const account = await pool.query(
        `SELECT * FROM users
         WHERE id=${req.params.id}`
    );
    res.json(account.rows);
})

//Get all invoices from certain user
db.get('/users/:id/invoices', async (req, res,) => {
    const account = await pool.query(
        `SELECT * FROM invoices
        WHERE user_id=${req.params.id}`
    );
    res.json(account.rows);
})

//PUT Requests
//Change invoice from pending to paid 
db.put('/invoices/:invoiceId/paid', async(req, res) => {
    const account = await pool.query(
        `UPDATE invoices
         SET status = 'paid'
         payment_date = '2021-12-12'
         WHERE id = ${req.params.invoiceId}`
    );
    res.json(account.rows);
})

// try {
//     const { handle_id } = req.body;
//     const { tag_id } = req.body;
//     const newMapping = await pool.query(
//         "INSERT INTO tagmap (handle_id, tag_id) VALUES ($1, $2) RETURNING *",
//         [handle_id, tag_id]
//     );

//     res.json(newMapping.rows);
// } catch (err) {
//     console.error(err.message);
// }

db.post('/invoices', async(req,res) => {
    const { items } = req.body;
     const { user_id } = req.body;
     const { due_date } = req.body;
     const { amount_due } = req.body;
     const { status } = req.body;
     const { payment_date } = req.body;
     const { payment_terms } = req.body;
     const { project_description } = req.body;
     const { client_name } = req.body;
     const { client_email } = req.body;
     const { client_address } = req.body;
     const { client_city } = req.body;
     const { client_postcode } = req.body;
     const { client_country } = req.body;
    const account = await pool.query(
        `INSERT INTO invoices (
            items, 
            user_id,
            due_date, 
            amount_due, 
            status, 
            payment_date, 
            payment_terms, 
            project_description, 
            client_name, 
            client_email, 
            client_address, 
            client_city, 
            client_postcode, 
            client_country
            )
        VALUES (
            $1, 
            $2, 
            $3, 
            $4, 
            $5, 
            $6, 
            $7, 
            $8, 
            $9, 
            $10, 
            $11, 
            $12, 
            $13, 
            $14
            );
        `
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
