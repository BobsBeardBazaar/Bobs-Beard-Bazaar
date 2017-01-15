import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  return (
    <div>
      <h3>Total database Products : {props.products.length}</h3>
      <div className="list-group">
        {
          products.map(product => {
            return (
              <div className="list-group-item" key={product.id}>
                <Link className="thumbnail" to={`/products/${product.id}`}>
                <br />
                <img height="100" width="100" src={ product.image }/></Link>
                <label>Name: </label>{ product.name }
                <br />                
                <label>Quantity: </label>{product.quantity}
                <br />
                <label>Price: </label> ${product.price}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
