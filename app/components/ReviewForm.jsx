import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { addReview } from '../action-creators/reviews';

/* -----------------    COMPONENT     ------------------ */

const ReviewForm = ({ product, user, addReview }) => {

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={ (evt) => {
                        evt.preventDefault();
                        addReview({
                            title: evt.target.title.value,
                            rating: evt.target.rating.value,
                            comment: evt.target.comment.value,
                            product_id: product.id,
                            user_id: user.id
                        });
                    }}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="title" type="text" className="validate" />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rating" type="text" className="validate"/>
                            <label htmlFor="rating">Rating (1-5)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="comment" className="materialize-textarea"></textarea>
                            <label htmlFor="comment">Review</label>
                        </div>
                    </div>
                    <button type="submit" className="waves-effect waves-light btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => {
    return {
        product: state.products.selected,
        user: state.auth
    };
};
const mapDispatch = { addReview };

export default connect(mapProps, mapDispatch)(ReviewForm);
