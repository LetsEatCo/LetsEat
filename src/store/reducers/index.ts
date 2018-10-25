import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {CustomerReducers} from '@/store/reducers/customer';
import {INITIALIZE_CLIENT_STATE} from '@/store/actions';

export const initializeStateReducer = (state, {type, payload}) => {
	console.log(payload);
	if (type === INITIALIZE_CLIENT_STATE) {
		return {
			...state,
			fromClient: payload,
		};
	}
	return state;
};

export default combineReducers({
	...initializeStateReducer,
	...CustomerReducers,
	form: reduxFormReducer,
});
