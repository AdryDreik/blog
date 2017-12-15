/* _global path */
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config.mjs';
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options,
);

fs
	.readdirSync(__dirname)
	.filter((file) => {
		console.log('---------file---------------------------');
		console.log(file);
		console.log('------------------------------------');
	});

module.exports = db;
