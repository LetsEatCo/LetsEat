import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';
import {FETCH_STORES, FETCH_STORES_FAILED, FETCH_STORES_FULFILLED} from '@/store/constants';

export const fetchStoresEpic = action$ =>
	action$.pipe(
		ofType(FETCH_STORES),
		mergeMap(() => {
			return Observable.create(obs => {
				http()
					.get('stores')
					.subscribe({
						next: response => {
							obs.next({type: FETCH_STORES_FULFILLED, payload: response});
							obs.complete();
						},
						error: error => {
							obs.error({type: FETCH_STORES_FAILED, payload: error});
							obs.complete();
						},
					});
			});
		}),
	);
