import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  return (
    <div>
      <h3>Products</h3>
      <div className="list-group">
        {
          products.map(product => {
            return (
              <div className="list-group-item" key={product.id}>
                <Link to={`/products/${product.id}`}>{ product.name }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
