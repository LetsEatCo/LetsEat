import {
	CUSTOMER_ADD_ITEM_TO_CART_SUCCEEDED,
	CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED,
	CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED,
	CUSTOMER_REMOVE_ITEM_FROM_CART_SUCCEEDED,
} from '@/store/constants';
import Cookies from 'universal-cookie';

export const customer = (state = {}, action) => {
	switch (action.type) {
		case CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED:
			new Cookies().set('JWT', action.payload.data.jwt, {
				expires: new Date(action.payload.data.exp * 1000),
			});
			return {
				...state,
				isLoggedIn: !!new Cookies().get('JWT'),
			};
		case CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED:
			const {cart, ...profile} = action.payload.data;
			return {
				...state,
				profile,
				cart,
			};
		case CUSTOMER_ADD_ITEM_TO_CART_SUCCEEDED:
		case CUSTOMER_REMOVE_ITEM_FROM_CART_SUCCEEDED:
			return {
				...state,
				cart: action.payload.data,
			};
		default:
			return state;
	}
};
