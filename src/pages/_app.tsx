import React from 'react';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {theme} from '@/utils/ui/theme';
import Fonts from '@/assets/fonts';
import {makeStore} from '@/services/persistor.service';
import {env} from '@/utils';
import ProgressBar from '@/components/Common/ProgressBar';
import {default as Base} from '@/utils/ui/base';
interface AppProps extends React.ClassAttributes<any> {
	store?: any;
}

export default withRedux(makeStore, {debug: env('NODE_ENV') !== 'production'})(
	class extends App<AppProps> {
		constructor(props) {
			super(props);
		}
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
				<>
					<Base />
					<ProgressBar />
					<Container>
						<main>
							<Provider store={store}>
								<PersistGate persistor={store.__PERSISTOR__} loading={<ProgressBar />}>
									<ThemeProvider theme={theme}>
										<Component {...pageProps} />
									</ThemeProvider>
								</PersistGate>
							</Provider>
						</main>
					</Container>
				</>
			);
		}
	},
);
