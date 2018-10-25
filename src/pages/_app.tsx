import React from 'react';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import {default as Store} from '@/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

interface AppProps extends React.ClassAttributes<any> {
	store?: any;
}

class MyApp extends App<AppProps> {
	static async getInitialProps({Component, ctx}) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			},
		};
	}

	render() {
		const {Component, pageProps, store} = this.props;
		const persistor = persistStore(store);
		return (
			<Container>
				<Provider store={store}>
					<PersistGate persistor={persistor} loading={<div>Loading</div>}>
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
			</Container>
		);
	}
}

export default withRedux(Store, {debug: true})(MyApp);
