/* tslint:disable */
import {UI_DISPLAY_LOGIN_FORM, UI_HIDE_LOGIN_FORM} from '@/store/constants';

export const ui = (state = {}, action) => {
	switch (action.type) {
		case UI_HIDE_LOGIN_FORM:
		case UI_DISPLAY_LOGIN_FORM:
			return {
				...state,
				displayLoginForm: action.payload,
			};
		default:
			return state;
	}
};
