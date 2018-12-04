import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {CustomerReducers} from '@/store/reducers/customer';
import {StoresReducers} from '@/store/reducers/stores';
import {CheckoutReducers} from '@/store/reducers/checkout';
import {UiReducers} from '@/store/reducers/ui';

export default combineReducers({
	...CustomerReducers,
	...StoresReducers,
	...CheckoutReducers,
	...UiReducers,
	form: reduxFormReducer,
});
