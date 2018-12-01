import {default as React, ReactNode} from 'react';
import {Head, Header} from '@/components/Header';
import {theme} from '@/utils/ui/theme';
import {LayoutProps} from '@/typings/layout.props';

export default class OrdersLayout extends React.Component<LayoutProps> {
	constructor(props) {
		super(props);
	}

	render(): ReactNode {
		return (
			<div>
				<Head title={'Past Orders'} />
				<Header headerBackgroundColor={theme.colors.White} sticky={false} />
				{this.props.children}
			</div>
		);
	}
}
