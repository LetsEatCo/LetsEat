import React from 'react';
import {BlackLogoNoFork} from '@/components/Logo';
import {default as NextLink} from 'next/link';
import LoginForm from '@/components/Forms/LoginForm';
import {SubmissionError} from 'redux-form';
import {CUSTOMER_LOGIN_REQUEST, CUSTOMER_REGISTRATION_REQUEST} from '@/store/actions';
import {store} from '@/store';
import {connect} from 'react-redux';
import RegistrationForm from '@/components/Forms/RegistrationForm';
import {default as StyledHeader} from '@/components/Header/blocks/Header';

interface HeaderProps extends React.ClassAttributes<React.Component> {
	isLoggedIn?: boolean;
	loginFormError: string;
	loginForm: any;
}

const Link = ({href}) => (
	<NextLink href={href} passHref={true}>
		<StyledHeader.Link>
			<BlackLogoNoFork />
		</StyledHeader.Link>
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
			console.log(err);
			throw new SubmissionError({
				_error:
					'Please enter a correct email and password. Note that both fields may be case-sensitive.',
			});
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
			<StyledHeader px={20}>
				<StyledHeader.Container>
					<StyledHeader.Left>
						<Link href={'/'} />
					</StyledHeader.Left>
					<StyledHeader.Right>
						{!this.props.isLoggedIn ? (
							[
								<LoginForm key={0} onSubmit={this.handleLoginFormSubmit} />,
								<RegistrationForm key={1} onSubmit={this.handleRegisterFormSubmit} />,
							]
						) : (
							<div />
						)}
					</StyledHeader.Right>
				</StyledHeader.Container>
			</StyledHeader>
		);
	}
}

export default connect(mapStateToProps)(Header);
