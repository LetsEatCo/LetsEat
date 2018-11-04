/* tslint:disable */
import {FETCH_STORES_FULFILLED} from '@/store/constants';

export const stores = (state = {}, action) => {
	switch (action.type) {
		case FETCH_STORES_FULFILLED:
			return {
				...state,
				stores: action.payload.data,
			};
		default:
			return state;
	}
};
