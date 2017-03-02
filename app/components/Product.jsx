import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Review from './Review';
import ReviewForm from './ReviewForm';

import { deleteProduct } from '../action-creators/products';

/* -----------------    COMPONENT     ------------------ */

const Product = ({ product, user, deleteProduct }) => {

    return (
        <div className="container">
            <div className="row">
                <h3>{ product.name }</h3>
                <div>
                    <div className="col m6 s12">
                        <img height="100%" width="100%" src={ product.image }/><br />
                    </div>
                    <div className="col m6 s12">
                        { product.quantity ? <h5>Quantity: { product.quantity }</h5> : <h5 className="red-text">Out of stock</h5>}
                        <h5>Price: ${ product.price }</h5>
                        <h5>Description:</h5>
                        <p>{ product.description }</p>
                        { product.quantity ? <Link className="waves-effect waves-light btn"><i className="material-icons left">shopping_cart</i>Add to cart</Link>
                        : <Link className="waves-effect waves-light btn"><i className="material-icons left">email</i>Notify me when available</Link> }
                        { user && user.isAdmin && <Link onClick={ () => deleteProduct(product.id) } className="waves-effect waves-light btn red"><i className="material-icons left">delete</i>Delete item</Link>}
                    </div>
                </div>
                <div className="col s12">
                    <h4>Reviews</h4>
                    { product.reviews.length ? product.reviews.map((review, idx) => {
                        return ( <Review review={review} key={ idx }/> );
                    }) : <p>No current reviews</p> }
                </div>
                { user && (<div className="col s12">
                    <h5>Add a Review</h5>
                    <ReviewForm />
                </div>) }
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        product: state.products.selected,
        user: state.auth
    };
};
const mapDispatch = { deleteProduct };

export default connect(mapProps, mapDispatch)(Product);
