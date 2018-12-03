import rootReducer from '@/store/reducers';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {Store} from '@/store';

export const makeStore: any = (initialState, {isServer}) => {
	if (isServer) {
		return Store(rootReducer, initialState);
	}
	const persistConfig = {
		key: 'root',
		storage,
		blacklist: ['form', 'ui'],
	};

	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = Store(persistedReducer, initialState);
	store.__PERSISTOR__ = persistStore(store);
	return store;
};
