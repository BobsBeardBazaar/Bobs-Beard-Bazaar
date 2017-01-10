const db = require('APP/db/models');
const Product = db.Product;

const Router = require('express').Router();


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
	.then((deletedProductRow) => {
		res.status(200).json(deletedProductRow);
	})
	.catch(next);
});

//PUT (update) a product
Router.put('/:productId', (req, res, next) => {
	Product.update({ name: req.body.name, 
		image: req.body.image,
		description: req.body.description, 
		quantity: req.body.quantity,
		price: req.body.price }, { 
		
		where: {
			id: req.params.productId,
		}
	})
	.then((updatedProduct) => {
		res.sendStatus(204);
	})
	.catch(next);
});

//POST a new product
Router.post('/', (req, res, next) => {
	
	console.log("Router.Post req body: ", req);

	Product.create({ name: req.body.name, 
		image: req.body.image,
		description: req.body.description, 
		quantity: req.body.quantity,
		price: req.body.price 
	})
	.then((newProduct) => {
		res.json(newProduct);
	})
	.catch(next);
});

module.exports = Router;





