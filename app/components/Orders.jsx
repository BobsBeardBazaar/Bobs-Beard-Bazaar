import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


const Orders = function (props) {
  console.log("orders is: ", props.orders);
  return (
      <div className="container">
          <div className="row">
              <h4>Your Orders</h4>
              <h5>Total orders: {props.orders.length}</h5>
                  {

                    props.orders.map((order, idx) => {
                        return (
                            <div className="col s12" key={idx}>
                                    <span className="title">{order.status}</span>
                                    <ul className="collection">
                                     {
                                      
                                      order.products.map((product) => (
                                      <li className="collection-item avatar">
                                      <img src={product.image} alt="" className="circle"/>
                                      <span className="title">{product.name}</span>
                                      <p>{product.orderProducts.quantity} <br />
                                          {product.orderProducts.price}
                                      </p>                                     
                                      <a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                                      </li>
                                      ))
                                      
                                    }
                                    </ul>
                                 
                                    
                            </div>
                        );
                    })
                }
                      
          </div>
      </div>
  );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        orders: state.orders.list
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Orders);
