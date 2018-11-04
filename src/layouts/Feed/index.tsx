import {default as React, ReactNode} from 'react';
import {Head, Header} from '@/components/Header';
import {Footer} from '@/components/Footer/Footer';
import {theme} from '@/utils/ui/theme';
import {LayoutProps} from '@/typings/layout.props';

export default class FeedLayout extends React.Component<LayoutProps> {
	constructor(props) {
		super(props);
	}

	render(): ReactNode {
		return (
			<div>
				<Head />
				<Header headerBackgroundColor={theme.colors.HeaderPink} />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
