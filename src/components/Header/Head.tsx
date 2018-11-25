import * as React from 'react';
import {default as NextHead} from 'next/head';
// @ts-ignore
import normalize from 'modern-normalize';

interface Props {
	title?: string;
}
export class Head extends React.Component<Props> {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		title: "Let's Eat",
	};

	render() {
		return (
			<NextHead>
				<title>{this.props.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<style jsx={true} global={true}>
					{normalize}
				</style>
			</NextHead>
		);
	}
}
