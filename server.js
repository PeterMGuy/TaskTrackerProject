//const mysql = require("mysql");

//connection details
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "road2hire",
    database: 'sitepoint'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected Now!")
});

connection.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});

module.exports = connection; 
// makes this variable (connection) available to other JS files