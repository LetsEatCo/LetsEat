import {
	CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED,
	CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED,
} from '@/store/constants';

export const customer = (state = {}, action) => {
	switch (action.type) {
		case CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED:
			return {
				...state,
				isLoggedIn: true,
			};
		case CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED:
			return {
				...state,
				profile: action.payload.data,
			};
		default:
			return state;
	}
};
