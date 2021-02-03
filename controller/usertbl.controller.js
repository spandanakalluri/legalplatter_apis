const express = require('express');
const router = express.Router();
const usertblService = require('../services/usertbl.service');
const mysqlconnection = require('../connection');

// router.get('/getUsers', (req, res) => {
// 	let params = req.body;
// 	usertblService
// 		.getUsers(params)
// 		.then((data) => {
// 			res.send(data).status(200);
// 		})
// 		.catch((err) => {
// 			res.send(err).status(400);
// 		});
// });

//Get all users
router.get('/users', (req, res) => {
	mysqlconnection.query('SELECT * FROM usertbl', (err, rows, fields) => {
		if (!err) {
			res.send(rows);
		} else {
			console.log(err);
		}
	});
});

//Getting users by user id
router.get('/users/:userid', (req, res) => {
	mysqlconnection.query('SELECT * FROM usertbl WHERE userid=?', [ req.params.userid ], (err, rows, fields) => {
		if (!err) {
			res.send(rows);
		} else {
			console.log(err);
		}
	});
});

//delete user by userid
router.delete('/deleteUser/:userid', (req, res) => {
	mysqlconnection.query('DELETE FROM usertbl WHERE userid=?', [ req.params.userid ], (err, rows, fields) => {
		if (!err) {
			res.send(`User with record ID:${req.params.userid} has been removed`);
		} else {
			console.log(err);
		}
	});
});

//register user
router.post('/saveUser', (req, res) => {
	const params = req.body;
	console.log(params);
	mysqlconnection.query('INSERT INTO usertbl2 SET ?', params, (err, rows, fields) => {
		if (!err) {
			res.send(`User with record ID:${params.emailid} has been added`);
		} else {
			console.log(err);
		}
	});
});

router.post('/login', (req, res) => {
	const params = req.body;
	console.log(params);
	mysqlconnection.query(
		'select * from usertbl2 WHERE emailid=? && password=?',
		[ params.emailid, params.password ],
		(err, rows, fields) => {
			if (!err) {
				res.send({ data: rows });
			} else {
				console.log(err);
			}
		}
	);
});

//Update user by userid
router.put('/updateUser', (req, res) => {
	//const params = req.body;
	const { userid, emailid, password, udob, firstname, lastname, locid, gender, ramarks } = req.body;

	mysqlconnection.query(
		'UPDATE usertbl SET emailid=?, firstname=? WHERE userid=?',
		[ emailid, firstname, userid ],
		(err, rows, fields) => {
			if (!err) {
				res.send(`User with record ID:${firstname} has been added`);
			} else {
				console.log(err);
			}
		}
	);
});

module.exports = router;
