/**
*Main script of the application to start express server
* @module main
*/
const { sequelize } = require('../models');
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes/index');
const PORT = 8080;
const HOST = '0.0.0.0';
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use('/', routes);
sequelize.sync({force: false}).then(() => {
  console.log("database is in sync");
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);