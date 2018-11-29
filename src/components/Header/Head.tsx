import * as React from 'react';
import {default as NextHead} from 'next/head';
// @ts-ignore
import normalize from 'modern-normalize';

interface Scripts {
	id?: string;
	src: string;
	async?: boolean;
}
interface Props {
	title?: string;
	scripts?: Scripts[];
}

export class Head extends React.Component<Props> {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		title: "Let's Eat",
		scripts: [{id: 'stripe-js', src: 'https://js.stripe.com/v3/', async: true}],
	};

	render() {
		return (
			<NextHead>
				<title>{this.props.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{this.props.scripts &&
					this.props.scripts.map((script, index) => (
						<script id={script.id} src={script.src} async={script.async} key={index} />
					))}
				<style jsx={true} global={true}>
					{normalize}
				</style>
			</NextHead>
		);
	}
}
