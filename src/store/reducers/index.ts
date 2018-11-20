import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {CustomerReducers} from '@/store/reducers/customer';
import {StoresReducers} from '@/store/reducers/stores';
import {CartReducers} from '@/store/reducers/cart';

export default combineReducers({
	...CustomerReducers,
	...StoresReducers,
	...CartReducers,
	form: reduxFormReducer,
});
