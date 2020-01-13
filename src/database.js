const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'alexander',
    password: 'Alexrrlalh25!',
    database: 'lavanderia'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err)
        return;
    } else {
        console.log('Database is connected');
    }
});

module.exports = mysqlConnection;