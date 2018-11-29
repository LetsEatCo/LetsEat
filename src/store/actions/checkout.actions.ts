import {
	CHECKOUT_SAVE_STRIPE_TOKEN_ID,
	CHECKOUT_REMOVE_STRIPE_TOKEN_ID,
	CHECKOUT_SET_DELIVERY_ADDRESS,
} from '@/store/constants';

export const checkoutSaveStripeTokenIdAction = values => ({
	type: CHECKOUT_SAVE_STRIPE_TOKEN_ID,
	payload: values,
});

export const checkoutRemoveStripeTokenIdAction = () => ({
	type: CHECKOUT_REMOVE_STRIPE_TOKEN_ID,
});

export const checkoutSetDeliveryAddressAction = values => ({
	type: CHECKOUT_SET_DELIVERY_ADDRESS,
	payload: values,
});
