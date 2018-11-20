import React from 'react';
import {Head, Header} from '@/components/Header';
import {Footer} from '@/components/Footer/Footer';
import {theme} from '@/utils/ui/theme';
import {LayoutProps} from '@/typings/layout.props';

export default class HomeLayout extends React.Component<LayoutProps> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Head />
				<Header headerBackgroundColor={theme.colors.HeaderOrange} sticky={true} />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
