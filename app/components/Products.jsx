import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  return (
      <div className="container">
          <div className="row">
              <h4>Our Products</h4>
              <h5>Total products: {products.length}</h5>
                  {
                    products.map((product, idx) => {
                        return (
                            <div className="col s12 m4" key={idx}>
                                <div className="card">
                                    <div className="card-image">
                                        <Link className="thumbnail" to={`/products/${product.id}`}>
                                            <img src={ product.image } />
                                        </Link>
                                    </div>
                                    <div className="card-content">
                                        <p className="card-title black-text"><Link className="thumbnail" to={`/products/${product.id}`}>{ product.name }</Link></p>
                                        <label>Quantity: </label>{product.quantity}
                                        <br />
                                        <label>Price: </label> ${product.price}
                                    </div>
                                    <div className="card-action">
                                        <Link className="thumbnail" to={`/products/${product.id}`}>
                                            See more details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
          </div>
      </div>


  );
}
