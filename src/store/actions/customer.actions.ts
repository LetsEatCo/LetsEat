import {CUSTOMER_LOGIN_REQUEST, CUSTOMER_REGISTRATION_REQUEST} from '@/store/constants';

export const customerLoginAction = (values, resolve, reject) => ({
	type: CUSTOMER_LOGIN_REQUEST,
	payload: values,
	meta: {
		resolve,
		reject,
	},
});

export const customerRegisterationAction = (values, resolve, reject) => ({
	type: CUSTOMER_REGISTRATION_REQUEST,
	payload: values,
	meta: {
		resolve,
		reject,
	},
});
