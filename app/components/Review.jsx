import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const SamplePage = ({ review }) => {

    return (
            <div className="row">
                <div className="col s12">
                    <div className="card grey lighten-4">
                        <div className="card-content black-text">
                            <span className="card-title">{ review.title } - Rating: { review.rating }</span>
                            <p>{ review.comment }</p>
                        </div>
                        <div className="card-action black-text">
                            <a href="#">Comment</a>
                            <a href="#">Report as abuse</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        review: state.products.selected.reviews[ownProps.reviewIdx]
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SamplePage);
