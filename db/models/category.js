
const Sequelize = require('sequelize');
const db = require('APP/db')

const Category = db.define('category', {
	name: {
		type: Sequelize.STRING, 
		allowNull: false
    // OB/DYS: not empty validator, also maybe unique validator
	}
});

module.exports = Category; 