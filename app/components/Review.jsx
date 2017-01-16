import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Review = ({ review }) => {

    return (
            <div className="row">
                <div className="col s12">
                    <div className="card grey lighten-4">
                        <div className="card-content black-text">
                            <span><Link to={`/reviews/${review.id}`} className="card-title">{ review.title }</Link> by { review.Author.name }</span>
                            <span className="right">
                                Rating: {
                                    // OB/DYS: replace with [].fill(jsx) directly
                                    Array(review.rating).fill('filler').map((el, idx) => (<i className="material-icons" key={idx}>star</i>))
                                }
                            </span>
                            <p>{ review.comment }</p>
                        </div>
                        <div className="card-action black-text">
                            <Link className="grey-text darken-2" to="#">Comment</Link>
                            <Link className="grey-text darken-2" to="#">Report as abuse</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;
