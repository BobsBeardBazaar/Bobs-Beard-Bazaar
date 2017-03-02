
const Sequelize = require('sequelize');
const db = require('APP/db');

//A review a customer can write about a product. This is
//our model for the table that will hold those reviews
//the 'rating' should be out of 5.
const Review = db.define('review', {

	comment: {
		type: Sequelize.TEXT,
		defaultValue: null
	},
	rating: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	},
	title: {
		type: Sequelize.TEXT,
		defaultValue: null
	}
});

module.exports = Review;