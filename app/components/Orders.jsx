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
                    orders.map((order, idx) => {
                        return (
                            <div className="col s12" key={idx}>
                                <ul class="collection">
                                  <li class="collection-item avatar">
                                    <img src="images/yuna.jpg" alt="" class="circle">
                                    <span class="title">Title</span>
                                    <p>First Line <br>
                                       Second Line
                                    </p>
                                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
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
