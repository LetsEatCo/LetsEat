import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';
import {CART_ADD_PRODUCT, CART_ADD_PRODUCT_SUCCEEDED} from '@/store/constants';

export const addProductToCartEpic = action$ =>
	action$.pipe(
		ofType(CART_ADD_PRODUCT),
		mergeMap((action: any) => {
			const {resolve, reject} = action.meta;
			return Observable.create(obs => {
				http()
					.post('customers/me/cart/add', action.payload)
					.subscribe({
						next: response => {
							resolve(response);
							obs.next({type: CART_ADD_PRODUCT_SUCCEEDED, payload: response});
							obs.complete();
						},
						error: error => {
							reject(error);
						},
					});
			});
		}),
	);
