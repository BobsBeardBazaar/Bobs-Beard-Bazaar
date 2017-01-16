import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Review from './Review';

/* -----------------    COMPONENT     ------------------ */

const Product = ({ product }) => {

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
                    </div>
                </div>
                <div className="col s12">
                    <h4>Reviews</h4>
                    { product.reviews.length ? product.reviews.map((review, idx) => {
                        return ( <Review review={review} key={ idx }/> );
                    }) : <p>No current reviews</p> }
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        product: state.products.selected
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Product);
