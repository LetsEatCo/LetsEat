import React from 'react';
import {Box} from 'rebass';
import styled from 'styled-components';
import Logo from '@/components/Logo/Logo';
import {default as NextLink} from 'next/link';
import LoginForm from '@/components/Forms/LoginForm';
import {SubmissionError} from 'redux-form';
import {CUSTOMER_LOGIN_REQUEST, CUSTOMER_REGISTRATION_REQUEST} from '@/store/actions';
import {store} from '@/store';
import {connect} from 'react-redux';
import RegistrationForm from '@/components/Forms/RegistrationForm';

interface HeaderProps extends React.ClassAttributes<React.Component> {
	isLoggedIn?: boolean;
}

const Container = styled(Box)`
	display: flex;
	max-width: 1024px;
	max-height: 72px;
	margin: 0 auto;
	width: 100%;
`;

const FlexStart = styled(Box)`
	display: flex;
	flex-grow: 1;
	align-items: center;
	width: auto;
	justify-content: flex-start;
`;

const FlexEnd = styled(Box)`
	display: flex;
	flex: auto;
	align-items: center;
	width: auto;
	justify-content: flex-end;
`;

const StyledLink = styled.a`
	display: inline-flex;
	height: 100%;
	align-items: center;
	width: auto;
`;

const Link = ({href}) => (
	<NextLink href={href} passHref={true}>
		<StyledLink>
			<Logo />
		</StyledLink>
	</NextLink>
);

function mapStateToProps(state) {
	return {
		isLoggedIn: state.customer.isLoggedIn,
	};
}

class Header extends React.Component<HeaderProps> {
	constructor(props) {
		super(props);
		this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
		this.handleRegisterFormSubmit = this.handleRegisterFormSubmit.bind(this);
	}

	static async getInitialProps({Component, ctx}) {
		return {
			pageProps: {
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			},
		};
	}

	async handleLoginFormSubmit(values) {
		try {
			await new Promise((resolve, reject) => {
				store.dispatch({
					type: CUSTOMER_LOGIN_REQUEST,
					payload: values,
					meta: {
						resolve,
						reject,
					},
				});
			});
		} catch (err) {
			throw new SubmissionError(err);
		}
	}

	async handleRegisterFormSubmit(values) {
		try {
			await new Promise((resolve, reject) => {
				store.dispatch({
					type: CUSTOMER_REGISTRATION_REQUEST,
					payload: values,
					meta: {
						resolve,
						reject,
					},
				});
			});
		} catch (err) {
			throw new SubmissionError(err);
		}
	}

	render() {
		return (
			<Box px={20}>
				<Container>
					<FlexStart>
						<Link href={'/'} />
					</FlexStart>
					<FlexEnd>
						{!this.props.isLoggedIn ? (
							[
								<LoginForm key={0} onSubmit={this.handleLoginFormSubmit} />,
								<RegistrationForm key={1} onSubmit={this.handleRegisterFormSubmit} />,
							]
						) : (
							<div />
						)}
					</FlexEnd>
				</Container>
			</Box>
		);
	}
}

export default connect(mapStateToProps)(Header);
