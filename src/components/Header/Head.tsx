import * as React from 'react';
import {default as NextHead} from 'next/head';
// @ts-ignore
import normalize from 'modern-normalize';

export class Head extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NextHead>
				<title>Let's Eat</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<style jsx={true} global={true}>
					{normalize}
				</style>
			</NextHead>
		);
	}
}
