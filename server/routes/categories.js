
const Sequelize = require('sequelize');
const db = require('./db/models');
const Categories = db.Categories;

const Router = require('express').Router();


//GET all Categories
//api/categories/
Router.get('/', (req, res, next) => {
	Categories.findAll({})
	.then((allCategories) => {
		res.json(allCategories);
	})
	.catch(next);
});

//POST a new Category
//api/categories/
Router.post('/', (req, res, next) => {
	Categories.create({name : req.body.name})
	.then((newCategory) => {
		res.json(newCategory);
	})
	.catch(next);
});

//DELETE a Category
//api/categories/:categoryId
Router.delete('/:categoryId', (req, res, next) => {
	Categories.destroy({
		where: {
			id: req.params.categoryId
		}
	})
	.then((removedCategory) => {
		res.send(200).json(removedCategory);
	})
	.catch(next);
});