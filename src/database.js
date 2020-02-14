const mysql = require('mysql');

//const mysqlConnection = mysql.createConnection({
//  host: 'localhost',
//  user: 'alexander',
//  password: 'Alexrrlalh25!',
//  database: 'lavanderia'
//});

//const mysqlConnection = mysql.createConnection({
//  host: '54.175.48.207',
//  user: 'b88ac98fc118d2',
//  password: '8daa2e44!',
//  database: 'heroku_fb8fc7b3b7789cc'
//});

const mysqlConnection = mysql.createConnection({
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b88ac98fc118d2',
  password: '8daa2e44!',
  database: 'heroku_fb8fc7b3b7789cc',
  port: 3306
});

// 52.204.50.0

//const mysqlConnection = mysql.createConnection('mysql://us-cdbr-iron-east-02.cleardb.net:3306/heroku_fb8fc7b3b7789cc?autoReconnect=true&useSSL=false');

//mysql://54.175.48.207:3306/heroku_fb8fc7b3b7789cc?autoReconnect=true&useSSL=false"
//GRANT ALL PRIVILEGES ON *.* TO 'b88ac98fc118d2'@'54.175.48.207' IDENTIFIED BY '8daa2e44';
//GRANT ALL PRIVILEGES ON *heroku_fb8fc7b3b7789cc* TO 'b88ac98fc118d2'@'54.175.48.207' IDENTIFIED BY '8daa2e44';
//create user 'alexander'@'54.175.48.207' identified by 'rrlalh25';



mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err)
        return;
    } else {
        console.log('Database is connected');
    }
});

module.exports = mysqlConnection;