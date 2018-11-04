import {Observable} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';

import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';
import Cookies from 'universal-cookie';
import {
	CUSTOMER_FETCH_PROFILE_REQUEST,
	CUSTOMER_FETCH_PROFILE_REQUEST_FAILED,
	CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED,
} from '@/store/constants';

const cookies = new Cookies();

export const fetchCustomerProfileEpic = action$ =>
	action$.pipe(
		ofType(CUSTOMER_FETCH_PROFILE_REQUEST),
		tap((action: any) => cookies.set('JWT', action.payload.data.jwt)),
		mergeMap(() => {
			return Observable.create(obs => {
				http()
					.get('customers/me')
					.subscribe({
						next: response => {
							obs.next({type: CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED, payload: response});
							obs.complete();
						},
						error: error => {
							obs.error({type: CUSTOMER_FETCH_PROFILE_REQUEST_FAILED, payload: error});
							obs.complete();
						},
					});
			});
		}),
	);
