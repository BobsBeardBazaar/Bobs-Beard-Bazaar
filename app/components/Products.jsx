import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  return (
      <div className="container">
          <div className="row">
              <h3>Total database Products : {props.products.length}</h3>
                  {
                    products.map(product => {
                        return (
                            <div className="col s12 m4">
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


// <div>
//   <h3>Total database Products : {props.products.length}</h3>
//   <div className="list-group">
//     {
//       products.map(product => {
//         return (
//           <div className="list-group-item" key={product.id}>
//             <Link className="thumbnail" to={`/products/${product.id}`}>
//             <br />
//             <img height="100" width="100" src={ product.image }/></Link>
//             <label>Name: </label>{ product.name }
//             <br />
//             <label>Quantity: </label>{product.quantity}
//             <br />
//             <label>Price: </label> ${product.price}
//           </div>
//         );
//       })
//     }
//   </div>
// </div>
