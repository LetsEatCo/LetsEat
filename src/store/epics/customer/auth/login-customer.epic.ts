import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {
	CUSTOMER_FETCH_PROFILE_REQUEST,
	CUSTOMER_LOGIN_REQUEST,
	CUSTOMER_LOGIN_REQUEST_FAILED,
	CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED,
} from '@/store/actions';
import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';

export const loginCustomerEpic = action$ =>
	action$.pipe(
		ofType(CUSTOMER_LOGIN_REQUEST),
		mergeMap((action: any) => {
			const {resolve, reject} = action.meta;
			return Observable.create(obs => {
				http()
					.post('customers/login', action.payload)
					.subscribe({
						next: response => {
							resolve(response);
							obs.next({type: CUSTOMER_REGISTRATION_OR_LOGIN_REQUEST_SUCCEEDED, payload: response});
							obs.next({type: CUSTOMER_FETCH_PROFILE_REQUEST, payload: response});
						},
						error: error => {
							reject(error);
							obs.error({type: CUSTOMER_LOGIN_REQUEST_FAILED, payload: error});
						},
					});
			});
		}),
	);
