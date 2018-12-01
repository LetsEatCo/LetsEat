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
	links?: any[];
}

export class Head extends React.Component<Props> {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		title: "Let's Eat",
		scripts: [{id: 'stripe-js', src: 'https://js.stripe.com/v3/', async: true}],
		links: [
			{
				id: 'mapbox-gl-css',
				href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css',
			},
		],
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
				{this.props.links &&
					this.props.links.map((link, index) => (
						<link id={link.id} href={link.href} key={index} rel="stylesheet" />
					))}
				<style jsx={true} global={true}>
					{normalize}
				</style>
			</NextHead>
		);
	}
}
