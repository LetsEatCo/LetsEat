/* tslint:disable */
import {CART_ADD_PRODUCT_SUCCEEDED} from '@/store/constants';

export const cart = (state = {}, action) => {
	switch (action.type) {
		case CART_ADD_PRODUCT_SUCCEEDED:
			return {
				...state,
				...action.payload.data,
				itemsCount: action.payload.data.meals.length + action.payload.data.products.length,
			};
		default:
			return state;
	}
};
