const express = require('express');
const bodyParser = require('body-parser');
const mysqlconnection = require('./connection');

const app = express();

app.use(bodyParser.json());

app.use('/districtmst', require('./controller/districtmst.controller'));
app.use('/feetypemst', require('./controller/feetypemst.controller'));
app.use('/locationmst', require('./controller/locationmst.controller'));
app.use('/professionaltbl', require('./controller/professionaltbl.controller'));
app.use('/profloclnk', require('./controller/profloclnk.controller'));
app.use('/profservlnk', require('./controller/profservlnk.controller'));
app.use('/servicecat', require('./controller/servicecat.controller'));
app.use('/servicemst', require('./controller/servicemst.controller'));
app.use('/serviceregister', require('./controller/serviceregister.controller'));
app.use('/users', require('./controller/usertbl.controller'));

app.listen(2100);
