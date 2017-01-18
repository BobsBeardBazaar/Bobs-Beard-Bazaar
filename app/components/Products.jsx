import React from 'react';
import {Link} from 'react-router';

const Products = (props) => {

  const products = props.products;
  const setFilter = props.setFilter;
  const categories = props.categories;

  return (
      <div className="container">
          <div className="row">
              <div className="row">
                  <div className="col m9 s12">
                      <h4>Our Products</h4>
                      <h5>Total products: {products.length}</h5>
                  </div>
                  <div className="col m3 s12">
                      <label>Filter</label>
                      <select className="browser-default" onChange={evt => setFilter(evt.target.value)}>
                          <option value="" disabled defaultValue>Choose your option</option>
                          {
                              Object.keys(categories).map(categoryKey => {
                                  const catId = categories[categoryKey];
                                  return <option value={ catId } key={ catId }>{ categoryKey }</option>;
                                  })
                              }
                              <option value="0">All</option>
                          </select>
                  </div>
              </div>
                  {
                    products.map((product, idx) => {
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

export default Products;

