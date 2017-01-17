import Review from '../components/Review';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    review: state.review.selectedReview
  };
};

export default connect(
  mapStateToProps
)(Review);