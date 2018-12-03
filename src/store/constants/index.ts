export const CUSTOMER_LOGIN_REQUEST = '@@customer/LOGIN_REQUEST';
export const CUSTOMER_LOGIN_REQUEST_FAILED = '@@customer/LOGIN_REQUEST_FAILED';

export const CUSTOMER_REGISTRATION_REQUEST = '@@customer/REGISTRATION_REQUEST';
export const CUSTOMER_REGISTRATION_REQUEST_FAILED = '@@customer/REGISTRATION_REQUEST_FAILED';

export const CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED =
	'@@customer/REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED';

export const CUSTOMER_FETCH_PROFILE_REQUEST = '@@customer/FETCH_PROFILE_REQUEST';
export const CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED =
	'@@customer/FETCH_PROFILE_REQUEST_SUCCEEDED';
export const CUSTOMER_FETCH_PROFILE_REQUEST_FAILED = '@@customer/FETCH_PROFILE_REQUEST_FAILED';

export const FETCH_STORES = '@@FETCH_STORES';
export const FETCH_STORES_FULFILLED = '@@FETCH_STORES_FULFILLED';
export const FETCH_STORES_FAILED = '@@FETCH_STORES_FAILED';

export const CUSTOMER_ADD_ITEM_TO_CART = '@@customer/ADD_ITEM_TO_CART';
export const CUSTOMER_ADD_ITEM_TO_CART_SUCCEEDED = '@@customer/ADD_ITEM_TO_CART_SUCCEEDED';
export const CUSTOMER_ADD_ITEM_TO_CART_FAILED = '@@customer/ADD_ITEM_TO_CART_FAILED';

export const CUSTOMER_REMOVE_ITEM_FROM_CART = '@@customer/CUSTOMER_REMOVE_ITEM_FROM_CART';
export const CUSTOMER_REMOVE_ITEM_FROM_CART_SUCCEEDED =
	'@@customer/CUSTOMER_REMOVE_ITEM_FROM_CART_SUCCEEDED';

export const CHECKOUT_SAVE_STRIPE_TOKEN_ID = '@@checkout/SAVE_STRIPE_TOKEN_ID';
export const CHECKOUT_REMOVE_STRIPE_TOKEN_ID = '@@checkout/REMOVE_STRIPE_TOKEN_ID';

export const CHECKOUT_SET_DELIVERY_ADDRESS = '@@checkout/SET_DELIVERY_ADDRESS';

export const UI_DISPLAY_LOGIN_FORM = '@@ui/DISPLAY_LOGIN_FORM';
export const UI_HIDE_LOGIN_FORM = '@@ui/DISPLAY_LOGIN_FORM';

export const INITIALIZE_CLIENT_STATE = '@@INITIALIZE_CLIENT_STATE';
