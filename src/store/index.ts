import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from '@/store/reducers';
import rootEpic from '@/store/epics';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['form'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(epicMiddleware)),
);

export default () => {
	epicMiddleware.run(rootEpic);
	return store;
};
