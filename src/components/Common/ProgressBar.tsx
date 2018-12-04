/* tslint:disable */
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

class ProgressBar extends React.Component {
	private timer;
	static defaultProps = {
		showAfterMs: 100,
		spinner: false,
	};

	routeChangeStart = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(NProgress.start, this.props.showAfterMs);
	};

	routeChangeEnd = () => {
		clearTimeout(this.timer);
		NProgress.done();
	};

	componentDidMount() {
		Router.events.on('routeChangeStart', this.routeChangeStart);
		Router.events.on('routeChangeComplete', this.routeChangeEnd);
		Router.events.on('routeChangeError', this.routeChangeEnd);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
		Router.events.off('routeChangeStart', this.routeChangeStart);
		Router.events.off('routeChangeComplete', this.routeChangeEnd);
		Router.events.off('routeChangeError', this.routeChangeEnd);
	}

	render() {
		return null;
	}
}

export default ProgressBar;
