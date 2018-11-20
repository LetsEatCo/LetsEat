import {CART_ADD_PRODUCT} from '@/store/constants';

export const addProductToCartAction = (values, resolve, reject) => ({
	type: CART_ADD_PRODUCT,
	payload: values,
	meta: {
		resolve,
		reject,
	},
});
