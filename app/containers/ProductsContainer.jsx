import Products from '../components/Products';
import { connect } from 'react-redux';

import { setFilter } from 'APP/app/action-creators/products'

const mapStateToProps = (state) => {
  return {
    products: state.products.filteredList,
    categories: state.products.categories
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
