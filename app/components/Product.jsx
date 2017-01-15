import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Product = ({ product }) => {

    return (
        <div className="container">
            <div className="row">
                <img height="100" width="100" src={ product.image }/>
                <label>Name: </label>{ product.name }<br />
                <label>Quantity: </label>{product.quantity}<br />
                <label>Price: </label> ${product.price}
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
