//const usertblSchema = require('../schema/usertbl.schema');
const Q = require('q');
const mysqlconnection = require('../connection');

function getUsers(params) {
	mysqlconnection.query('SELECT * FROM usertbl', (err, rows, fields) => {
		if (!err) {
			params.send(rows);
		} else {
			console.log(err);
		}
	});
}

module.exports = { getUsers };
