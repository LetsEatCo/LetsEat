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
							font-family: LetsEatStd, Helvetica Neue, Helvetica;
							text-rendering: optimizeLegibility;
							-webkit-font-smoothing: antialiased;
						}
						textarea:focus,
						input:focus,
						button:focus {
							outline: none;
						}
						::selection {
							color: rgba(255, 255, 255, 0.9);
							background: rgba(0, 0, 0, 0.9);
						}
						::-moz-selection {
							color: rgba(255, 255, 255, 0.9);
							background: rgba(0, 0, 0, 0.9);
						}
					`}</style>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
