import {CUSTOMER_ADD_ITEM_TO_CART, CUSTOMER_REMOVE_ITEM_FROM_CART} from '@/store/constants';

export const addItemToCartAction = (values, resolve, reject) => ({
	type: CUSTOMER_ADD_ITEM_TO_CART,
	payload: values,
	meta: {
		resolve,
		reject,
	},
});

export const removeItemFromCartAction = values => ({
	type: CUSTOMER_REMOVE_ITEM_FROM_CART,
	payload: values,
});
