import React from 'react';
import {BlackLogoNoFork} from '@/components/Logo';
import {default as NextLink} from 'next/link';
import LoginForm from '@/components/Forms/LoginForm';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import RegistrationForm from '@/components/Forms/RegistrationForm';
import {default as StyledHeader} from '@/components/Header/blocks/Header';
import {bindActionCreators} from 'redux';
import {customerLoginAction, customerRegisterationAction} from '@/store/actions/customer.actions';
import ReactSVG from 'react-svg';
import {ProfileModalComponent} from '@/components/Modals/ProfileModal';

interface HeaderProps {
	isLoggedIn?: boolean;
	loginFormError?: string;
	loginForm?: any;
	headerBackgroundColor: any;
	customerLoginAction?: any;
	customerRegistrationAction?: any;
	sticky: boolean;
}

interface State {
	showProfileModal?: boolean;
}

function mapStateToProps(state) {
	return {
		isLoggedIn: state.customer.isLoggedIn,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		customerLoginAction: bindActionCreators(customerLoginAction, dispatch),
		customerRegisterAction: bindActionCreators(customerRegisterationAction, dispatch),
	};
}

class Header extends React.Component<HeaderProps, State> {
	constructor(props) {
		super(props);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
		this.handleRegisterFormSubmit = this.handleRegisterFormSubmit.bind(this);
	}

	state = {
		showProfileModal: false,
	};

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	showProfileModal = () => this.setState({showProfileModal: true});

	hideProfileModal = () => this.setState({showProfileModal: false});

	setWrapperRef = node => {
		this.wrapperRef = node;
	};

	handleClickOutside = event => {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.hideProfileModal();
		}
	};

	async handleLoginFormSubmit(values) {
		try {
			await new Promise((resolve, reject) => {
				this.props.customerLoginAction(values, resolve, reject);
			});
		} catch {
			throw new SubmissionError({
				_error:
					'Please enter a correct email and password. Note that both fields may be case-sensitive.',
			});
		}
	}

	async handleRegisterFormSubmit(values) {
		try {
			await new Promise((resolve, reject) => {
				this.props.customerRegistrationAction(values, resolve, reject);
			});
		} catch (err) {
			throw new SubmissionError(err);
		}
	}

	render() {
		return (
			<StyledHeader
				px={20}
				bg={this.props.headerBackgroundColor}
				as={'header'}
				sticky={this.props.sticky}
			>
				<StyledHeader.Container>
					<StyledHeader.Left>
						<NextLink href={'/feed'} passHref={true}>
							<StyledHeader.Link>
								<BlackLogoNoFork />
							</StyledHeader.Link>
						</NextLink>
					</StyledHeader.Left>
					<StyledHeader.Right>
						{!this.props.isLoggedIn ? (
							<>
								<LoginForm onSubmit={this.handleLoginFormSubmit} />
								<RegistrationForm onSubmit={this.handleRegisterFormSubmit} />
							</>
						) : (
							<div style={{position: 'relative'}}>
								<ReactSVG
									src={'https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/icon-profile.svg'}
									svgStyle={{width: '32px', cursor: 'pointer'}}
									onClick={this.showProfileModal}
								/>
								{this.state.showProfileModal && <ProfileModalComponent ref={this.setWrapperRef} />}
							</div>
						)}
					</StyledHeader.Right>
				</StyledHeader.Container>
			</StyledHeader>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
