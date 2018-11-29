import {
	CHECKOUT_REMOVE_STRIPE_TOKEN_ID,
	CHECKOUT_SAVE_STRIPE_TOKEN_ID,
	CHECKOUT_SET_DELIVERY_ADDRESS,
} from '@/store/constants';

export const checkout = (state = {}, action) => {
	switch (action.type) {
		case CHECKOUT_SAVE_STRIPE_TOKEN_ID:
			return {
				...state,
				stripe: {
					token: {
						id: action.payload.id,
					},
				},
			};
		case CHECKOUT_REMOVE_STRIPE_TOKEN_ID:
			return {
				...state,
				stripe: {
					token: {
						id: null,
					},
				},
			};
		case CHECKOUT_SET_DELIVERY_ADDRESS:
			return {
				...state,
				deliveryAddress: action.payload,
			};
		default:
			return state;
	}
};
