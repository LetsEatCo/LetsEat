import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';
import {
	CUSTOMER_FETCH_PROFILE_REQUEST,
	CUSTOMER_FETCH_PROFILE_REQUEST_FAILED,
	CUSTOMER_FETCH_PROFILE_REQUEST_SUCCEEDED,
} from '@/store/constants';

export const fetchCustomerProfileEpic = action$ =>
	action$.pipe(
		ofType(CUSTOMER_FETCH_PROFILE_REQUEST),
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
