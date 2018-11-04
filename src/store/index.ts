import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from '@/store/epics';
import {composeWithDevTools} from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();

export const Store: any = (storeReducer, initialState) => {
	const store = createStore(
		storeReducer,
		initialState,
		composeWithDevTools(applyMiddleware(epicMiddleware)),
	);
	epicMiddleware.run(rootEpic);
	return store;
};
