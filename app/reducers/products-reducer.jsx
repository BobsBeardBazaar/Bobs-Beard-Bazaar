import {
    LOAD_PRODUCTS,
    RECEIVE_PRODUCTS,
    RECEIVE_PRODUCT,
    FILTER_PRODUCTS
} from '../constants';


const initialProductsState = {
    selected: {
        reviews: []
    },
    list: [],
    filteredList: [],
    filterId: 0
};

export default function (state = initialProductsState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_PRODUCTS:
        newState.list = action.products;
        break;

        case RECEIVE_PRODUCTS:
        newState.list = newState.filteredList = action.products;
        break;

        case RECEIVE_PRODUCT:
        newState.selected = action.product;
        break;

        case FILTER_PRODUCTS: {
            newState.filterId = action.filterId;
            if (!action.filterId) {
                newState.filteredList = newState.list;
            } else {
                newState.filteredList = newState.list.filter(product => {
                    return product.category_id === action.filterId;
                });
            }
            break;
        }

        default:
        return state;

    }

    return newState;

}
