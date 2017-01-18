const db = require('APP/db/models');
const Product = db.Product;
const Review = db.Review;
const User = db.User;
const Category = db.Category;
const router = require('express').Router();
const { createError } = require('APP/server/utils');

//GET all the Products
router.get('/', (req, res, next) => {
	Product.findAll({
        include: [Category]
    })
	.then((products) => {
		res.json(products);
	})
	.catch(next);
});

//GET single Product
router.get('/:productId', (req, res, next) => {
	Product.findById(req.params.productId, {
        include: [{ model: Review,
            include: [{ model: User, as: 'Author' }] }]
    })
	.then((singleProduct) => {
		res.json(singleProduct);
	})
	.catch(next);
});

//DELETE product
router.delete('/:productId', (req, res, next) => {
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
router.put('/:productId', (req, res, next) => {
    // TODO: add authorization
	Product.update(req.body, {
		where: {
			id: req.params.productId,
		},
        returning: true
	})
	.then((updatedProduct) => {
        if (!updatedProduct[0]) next(createError(404, 'product not found'));
		else res.json(updatedProduct[1][0]); // Send back the updated product
	})
	.catch(next);
});

//POST a new product
router.post('/', (req, res, next) => {
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

module.exports = router;
