import { combineReducers } from 'redux';
import filters from './filters';
import guitars from './guitars';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    guitars,
    cart,
});

export default rootReducer;
