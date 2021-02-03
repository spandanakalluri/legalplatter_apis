const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'shekar@123',
	database: 'legalplatter'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected');
});

module.exports = connection;
