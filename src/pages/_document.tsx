import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<html>
				<Head />
				<body>
					<style jsx={true} global={true}>{`
						body {
							font-family: LetsEatStd;
						}
					`}</style>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
