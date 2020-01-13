const express = require('express');
const router = express.Router();


const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM cliente', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:codigo', (req, res) => {
    const { codigo } = req.params;
    mysqlConnection.query('Select * from cliente WHERE codigo = ?', [codigo], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;