import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {CustomerReducers} from '@/store/reducers/customer';
import {StoresReducers} from '@/store/reducers/stores';

export default combineReducers({
	...CustomerReducers,
	...StoresReducers,
	form: reduxFormReducer,
});
