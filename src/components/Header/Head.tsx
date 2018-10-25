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
				<style jsx={true} global={true}>
					{normalize}
				</style>
			</NextHead>
		);
	}
}
