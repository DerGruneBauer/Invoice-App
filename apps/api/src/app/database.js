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
         SET status = 'paid',
         payment_date = NOW()
         WHERE id = ${req.params.invoiceId}`
    );
    res.json(account.rows);
})

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

db.put('/invoices/:invoiceId', async(req,res) => {
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
     const { invoiceId } = req.body;
    const account = await pool.query(
        `UPDATE invoices
            set items = $1, 
            set user_id = $2,
            set due_date = $3, 
            set amount_due= $4, 
            set status= $5, 
            set payment_date= $6, 
            set payment_terms= $7, 
            set project_description= $8, 
            set client_name= $9, 
            set client_email= $10, 
            set client_address= $11, 
            set client_city= $12, 
            set client_postcode= $13, 
            set client_country= $14,
            set billfrom_address= $15,
            set billfrom_city= $16,
            set billfrom_postcode= $17,
            set billfrom_country= $18
            WHERE invoiceId = $19
        `, [items, user_id, due_date, amount_due, status, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country, user_address, user_city, user_postcode, user_country, invoiceId]
    );
    res.json(account.rows);
})



module.exports = db;
