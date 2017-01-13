const db = require('APP/db/models');
const Product = db.Product;

const Router = require('express').Router();

// OB/DYS: applies to all routes - don't forget about authorization / access control

//GET all the Products
Router.get('/', (req, res, next) => {
	Product.findAll({})
	.then((products) => {
		res.json(products);
	})
	.catch(next);
});

//GET single Product
Router.get('/:productId', (req, res, next) => {
	Product.findById(
		req.params.productId
	)
	.then((singleProduct) =>{
		res.json(singleProduct);
	})
	.catch(next);
});

//DELETE product
Router.delete('/:productId', (req, res, next) => {
	Product.destroy({
		where: {
			id: req.params.productId
		}
	})
	.then((numDestroyedRows) => {
		res.status(200).json(numDestroyedRows);
	})
	.catch(next);
});

//PUT (update) a product
Router.put('/:productId', (req, res, next) => {
	Product.update(req.body, { // OB/DYS: wathc out for open-ended updating (this applies more places, too)
		where: {
			id: req.params.productId,
		},
        returning: true
	})
	.then((updatedProduct) => {
		res.json(updatedProduct[1][0]); // Send back the updated product
	})
	.catch(next);
});

//POST a new product
Router.post('/', (req, res, next) => {
	Product.create({ name: req.body.name,
		image: req.body.image,
		description: req.body.description,
		quantity: req.body.quantity,
		price: req.body.price
	})
	.then((newProduct) => {
		res.status(201).json(newProduct);
	})
	.catch(next);
});

module.exports = Router;
