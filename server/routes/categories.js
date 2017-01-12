
const Sequelize = require('sequelize');
const db = require('APP/db/models');
const Category = db.Category;

const Router = require('express').Router();


//GET all Category
//api/Category/
Router.get('/', (req, res, next) => {
	Category.findAll({})
	.then((allCategories) => {
		res.json(allCategories);
	})
	.catch(next);
});

//POST a new Category
//api/Category/
Router.post('/', (req, res, next) => {
	Category.create({name : req.body.name})
	.then((newCategory) => {
		res.status(201).json(newCategory);
	})
	.catch(next);
});

//DELETE a Category
//api/Category/:categoryId
Router.delete('/:categoryId', (req, res, next) => {
	Category.destroy({
		where: {
			id: req.params.categoryId
		}
	})
	.then((numDestroyedRows) => {
		res.status(200).json(numDestroyedRows);
	})
	.catch(next);
});

module.exports = Router;
