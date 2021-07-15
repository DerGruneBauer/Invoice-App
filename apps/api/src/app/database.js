const express = require('express');
const db = express.Router();
const pool = require("./connection");

//DB endpoints//
//GET Requests
db.get('/', (req, res) => {
  res.send({data: 'hello'});
})
// db.get('/invoices', (req, res) => {
//     res.send({data: 'hello invoices'});
//   })

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

//POST REQUEST
//Add new invoice
db.post('/invoices/', async(req,res) => {
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
     const { user_address} = req.body;
     const { user_city} = req.body;
     const { user_postcode} = req.body;
     const { user_country} = req.body;
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
            client_country,
            billfrom_address,
            billfrom_city,
            billfrom_postcode,
            billfrom_country
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
            $14,
            $15,
            $16,
            $17,
            $18
            );
        `, [items, user_id, due_date, amount_due, status, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country, user_address, user_city, user_postcode, user_country]
    );
    res.json(account.rows);
})

//PUT Requests
//Change invoice from pending to paid 
db.put('/invoices/:invoiceId/paid', async(req, res) => {
    const account = await pool.query(
        `UPDATE invoices
         SET status = 'Paid',
         payment_date = NOW()
         WHERE id = ${req.params.invoiceId}`
    );
    res.json(account.rows);
})
db.put('/invoices/:invoiceId/pending', async(req, res) => {
    const account = await pool.query(
        `UPDATE invoices
         SET status = 'Pending',
         payment_date = ''
         WHERE id = ${req.params.invoiceId}`
    );
    res.json(account.rows);
})

//Change info from edit form
db.put('/invoices/:invoiceId/edit', async(req,res) => {
    const { items } = req.body;
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
     const { user_address} = req.body;
     const { user_city} = req.body;
     const { user_postcode} = req.body;
     const { user_country} = req.body;
    const account = await pool.query(
        `UPDATE invoices
            SET items = $1, 
            due_date = $2, 
            amount_due= $3, 
            status= $4, 
            payment_date= $5, 
            payment_terms= $6, 
            project_description= $7, 
            client_name= $8, 
            client_email= $9, 
            client_address= $10, 
            client_city= $11, 
            client_postcode= $12, 
            client_country= $13,
            billfrom_address= $14,
            billfrom_city= $15,
            billfrom_postcode= $16,
            billfrom_country= $17
            WHERE id = ${req.params.invoiceId}
        `, [items, due_date, amount_due, status, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country, user_address, user_city, user_postcode, user_country]
    );
    res.json(account.rows);
})



module.exports = db;
