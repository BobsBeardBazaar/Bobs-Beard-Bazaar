import Products from '../components/Products';
import { connect } from 'react-redux';

import { setFilter } from 'APP/app/action-creators/products'

const mapStateToProps = (state) => {
  return {
    products: state.products.filteredList
  };
};

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filterId => {
            dispatch(setFilter(filterId));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
