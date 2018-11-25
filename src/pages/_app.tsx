import React from 'react';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {theme} from '@/utils/ui/theme';
import Fonts from '@/assets/fonts';
import {makeStore} from '@/services/persistor.service';

interface AppProps extends React.ClassAttributes<any> {
	store?: any;
}

export default withRedux(makeStore, {debug: true})(
	class extends App<AppProps> {
		static async getInitialProps({Component, ctx}) {
			return {
				pageProps: {
					...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
				},
			};
		}

		componentDidMount() {
			Fonts();
		}

		render() {
			const {Component, pageProps, store} = this.props;
			return (
				<Container>
					<main>
						<Provider store={store}>
							<PersistGate persistor={store.__PERSISTOR__} loading={<div>Loading</div>}>
								<ThemeProvider theme={theme}>
									<Component {...pageProps} />
								</ThemeProvider>
							</PersistGate>
						</Provider>
					</main>
				</Container>
			);
		}
	},
);
