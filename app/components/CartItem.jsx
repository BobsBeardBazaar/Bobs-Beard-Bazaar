import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// should be a dumb component
//cartItem should be a product object

const CartItem = ({ cartItem }) => {
  return (
    <div class="col s12 m7">
      <h2 class="header">Horizontal Card</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src={cartItem.image}/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p className="card-title black-text"><Link className="thumbnail" to={`/products/${product.id}`}>{cartItem.name}</Link></p>
            <span> Quantity: </span> //orderProduct.quantity
            <span> Price: </span> //orderProducts.price
          </div>
        </div>
      </div>
    </div>
  );
};

