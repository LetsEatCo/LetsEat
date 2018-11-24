import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {http} from '@/services/http.service';
import {
	CUSTOMER_REMOVE_ITEM_FROM_CART,
	CUSTOMER_REMOVE_ITEM_FROM_CART_SUCCEEDED,
} from '@/store/constants';

export const removeItemFromCartEpic = action$ =>
	action$.pipe(
		ofType(CUSTOMER_REMOVE_ITEM_FROM_CART),
		mergeMap((action: any) => {
			return Observable.create(obs => {
				http()
					.post('customers/me/cart/remove', action.payload)
					.subscribe({
						next: response => {
							obs.next({type: CUSTOMER_REMOVE_ITEM_FROM_CART_SUCCEEDED, payload: response});
							obs.complete();
						},
					});
			});
		}),
	);
