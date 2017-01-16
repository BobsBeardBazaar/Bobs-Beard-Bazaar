import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  // OB/DYS: consider a product detail component (lines 19-24)

  return (
      <div className="container">
          <div className="row">
              <h4>Our Products</h4>
              <h5>Total products: {products.length}</h5>
                  {
                    products.map((product, idx) => {
                        // OB/DYS: use id instead of idx for object key
                        return (
                            <div className="col s12 m6 l4 products-card" key={idx}>
                                <div className="card">
                                    <Link className="thumbnail" to={`/products/${product.id}`}>
                                        <div className="card-image" style={ { backgroundImage: `url(${ product.image })` } }></div>
                                    </Link>
                                    <div className="card-content">
                                        <p className="card-title black-text"><Link className="thumbnail" to={`/products/${product.id}`}>{ product.name }</Link></p>
                                        <label>Price: </label> ${product.price}
                                    </div>
                                    <div className="card-action">
                                        <Link className="thumbnail black-text" to={`/products/${product.id}`}>
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

// <img className="products-img" src={ product.image } />
