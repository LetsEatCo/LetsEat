import {default as React, ReactNode} from 'react';
import {Head, Header} from '@/components/Header';
import Fonts from '@/assets/fonts';

export default class HomeLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		Fonts();
	}

	render(): ReactNode {
		return (
			<div>
				<Head />
				<Header />
				{this.props.children}
			</div>
		);
	}
}
