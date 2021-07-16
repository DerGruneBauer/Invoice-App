const express = require('express');
const db = express.Router();
const pool = require("./connection");

//GET REQUESTS
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
db.get('/users/:id/invoices', async (req, res) => {
    const account = await pool.query(
        `SELECT * FROM invoices
        WHERE user_id=${req.params.id}`
    );
    res.json(account.rows);
})


//POST REQUESTS
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


//PUT REQUESTS
//Update invoice status from pending to paid 
db.put('/invoices/:invoiceId/paid', async(req, res) => {
    const account = await pool.query(
        `UPDATE invoices
         SET status = 'Paid',
         payment_date = NOW()
         WHERE id = ${req.params.invoiceId}`
    );
    res.json(account.rows);
})

//Update invoice status from paid to pending
db.put('/invoices/:invoiceId/pending', async(req, res) => {
    const account = await pool.query(
        `UPDATE invoices
         SET status = 'Pending',
         payment_date = null
         WHERE id = ${req.params.invoiceId}`
    );
    res.json(account.rows);
})

//Update existing invoice's information
db.put('/invoices/:invoiceId/edit', async(req,res) => {
    const { items } = req.body;
     const { due_date } = req.body;
     const { amount_due } = req.body;
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
            payment_date= $4, 
            payment_terms= $5, 
            project_description= $6, 
            client_name= $7, 
            client_email= $8, 
            client_address= $9, 
            client_city= $10, 
            client_postcode= $11, 
            client_country= $12,
            billfrom_address= $13,
            billfrom_city= $14,
            billfrom_postcode= $15,
            billfrom_country= $16
            WHERE id = ${req.params.invoiceId}
        `, [items, due_date, amount_due, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country, user_address, user_city, user_postcode, user_country]
    );
    res.json(account.rows);
})



module.exports = db;
