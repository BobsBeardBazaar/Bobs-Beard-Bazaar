import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


const Orders = function (props) {
  return (
      <div className="container">
          <div className="row">
              <h4>Your Orders</h4>
              <h5>Total orders: {props.orders.length}</h5>
                  {
                    props.orders.map((order, idx) => {
                        return (
                            <div className="col s12" key={idx}>
                                <ul className="collection">
                                  <li className="collection-item avatar">
  
                                    <span className="title">{order.status}</span>
                                    <span className="right">
                                  Product: {
                                    order.products.map((product) => product.name)
                                }
                            </span>
                                    <p>First Line <br />
                                       Second Line 
                                    </p>
                                  </li>
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
