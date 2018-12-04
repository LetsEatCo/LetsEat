import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const sheet = new ServerStyleSheet();

		const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));

		const styleTags = sheet.getStyleElement();
		return {...initialProps, ...page, styleTags};
	}

	render() {
		return (
			<html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
