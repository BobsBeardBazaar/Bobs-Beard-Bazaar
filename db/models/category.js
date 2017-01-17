
const Sequelize = require('sequelize');
const db = require('APP/db')

const Category = db.define('category', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	}
}, {
	indexes: [{fields: ['name'], unique: true}],
});

module.exports = Category;
