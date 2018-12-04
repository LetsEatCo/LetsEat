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
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/manifest.json"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Favicons/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
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
