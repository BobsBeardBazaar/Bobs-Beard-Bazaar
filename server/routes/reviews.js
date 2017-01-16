const db = require('APP/db/models');
const Review = db.Review;
const User = db.User;
const { createError } = require('APP/server/utils');
const Router = require('express').Router();

// GET /api/reviews/ - gets all the reviews
// Optional queries on author id(user id in query) and product id
Router.get('/', (req, res, next) => {
    let whereQuery = { where: {} };
    if (req.query.userId) whereQuery.where.author_id = +req.query.userId;
    if (req.query.productId) whereQuery.where.product_id = +req.query.productId;

	Review.findAll(whereQuery)
	.then((foundReviews) => {
		res.json(foundReviews);
	})
	.catch(next);
});

//GET /api/reviews/:reviewId - gets a single review
Router.get('/:reviewId', (req, res, next) => {
	Review.findById(req.params.reviewId, {
        include: [{ model: User, as: 'Author' }]
    })
	.then((singleReview) => {
		res.json(singleReview);
	})
	.catch(next);
});

// DELETE - /api/reviews/:reviewId - deletes a review
Router.delete('/:reviewId', (req, res, next) => {
	Review.destroy({
		where: {
			id: req.params.reviewId
		}
	})
	.then((deletedReviewRows) => {
		res.status(200).json(deletedReviewRows);
	})
	.catch(next);
});

// PUT - /api/reviews/:reviewId - updates a review
Router.put('/:reviewId', (req, res, next) => {
	Review.update(
        {
            comment: req.body.comment,
            rating: req.body.rating,
            title: req.body.title
        },
        {
            where: {
                id: req.params.reviewId
            },
            returning: true
        })
	.then((updatedReview) => {
        if (!updatedReview[0]) next(createError(404, 'review not found'));
        else res.json(updatedReview[1][0]); // Send back the updated review
	})
	.catch(next);
});

// POST - /api/reviews/ - posts a new review
Router.post('/', (req, res, next) => {
	Review.create({
        comment: req.body.comment,
        rating: req.body.rating,
        title: req.body.title,
        product_id: req.body.product_id,
        author_id: req.body.author_id
    })
	.then((newReview) => {
		res.status(201).json(newReview);
	})
	.catch(next);
});

module.exports = Router;
