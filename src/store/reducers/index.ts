import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {CustomerReducers} from '@/store/reducers/customer';
import {StoresReducers} from '@/store/reducers/stores';
import {CheckoutReducers} from '@/store/reducers/checkout';

export default combineReducers({
	...CustomerReducers,
	...StoresReducers,
	...CheckoutReducers,
	form: reduxFormReducer,
});
