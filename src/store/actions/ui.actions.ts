import {UI_DISPLAY_LOGIN_FORM, UI_HIDE_LOGIN_FORM} from '@/store/constants';

export const displayLoginFormAction = values => ({
	type: UI_DISPLAY_LOGIN_FORM,
	payload: values,
});

export const hideLoginFormAction = values => ({type: UI_HIDE_LOGIN_FORM, payload: values});
