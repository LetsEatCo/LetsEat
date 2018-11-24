import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';
import {CUSTOMER_ADD_ITEM_TO_CART, CUSTOMER_ADD_ITEM_TO_CART_SUCCEEDED} from '@/store/constants';

export const addItemToCartEpic = action$ =>
	action$.pipe(
		ofType(CUSTOMER_ADD_ITEM_TO_CART),
		mergeMap((action: any) => {
			const {resolve, reject} = action.meta;
			return Observable.create(obs => {
				http()
					.post('customers/me/cart/add', action.payload)
					.subscribe({
						next: response => {
							resolve(response);
							obs.next({type: CUSTOMER_ADD_ITEM_TO_CART_SUCCEEDED, payload: response});
							obs.complete();
						},
						error: error => {
							reject(error);
						},
					});
			});
		}),
	);
