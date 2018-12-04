import {Box, Text} from 'rebass';
import * as React from 'react';
import {Colors, fontScale, GreyColors} from '@/utils/ui';
import {InjectedFormProps, reduxForm} from 'redux-form';
import LoginForm from '@/components/Forms/blocks/LoginForm';
import {StyledModal} from '@/components/Modals';
import {bindActionCreators} from 'redux';
import {displayLoginFormAction} from '@/store/actions/ui.actions';
import {connect} from 'react-redux';

interface LoginFormProps {
	showLoginForm?: boolean;
	hideLoginForm?: boolean;
	handleSubmit?: any;
	error?: any;
}

type State = Partial<LoginFormProps>;

const getParent = () => document.querySelector('body') as HTMLElement;

const mapDispatchToProps = dispatch => ({
	displayLoginFormAction: bindActionCreators(displayLoginFormAction, dispatch),
});

class LoginFormComponent extends React.Component<
	InjectedFormProps<LoginFormProps> & LoginFormProps,
	State
> {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		showLoginForm: false,
	};

	showLoginForm = () => this.props.displayLoginFormAction(true);

	hideLoginForm = () => this.props.displayLoginFormAction(false);

	render() {
		return (
			<Box mr={4}>
				<LoginForm.LoginButton onClick={this.showLoginForm} text={'Log In'} />
				<StyledModal
					isOpen={this.props.showLoginForm}
					ariaHideApp={false}
					parentSelector={getParent}
				>
					<LoginForm>
						<LoginForm.CloseButton onClick={this.hideLoginForm} />
						<LoginForm.Header>
							<Box>
								<Text fontSize={fontScale(2)} color={GreyColors.tuatara}>
									Log in
								</Text>
							</Box>
						</LoginForm.Header>
						<LoginForm.Body onSubmit={this.props.handleSubmit}>
							<LoginForm.Field
								type="email"
								component="input"
								name="email"
								placeholder="Email"
								required={true}
							/>
							<LoginForm.Field
								type="password"
								component="input"
								name="password"
								placeholder="Password"
								required={true}
							/>
							{this.props.error && (
								<Text fontSize={fontScale(-2)} color={Colors.cadmiumRed} mt={3}>
									{this.props.error}
								</Text>
							)}
							<LoginForm.SubmitButton type="submit">Log In</LoginForm.SubmitButton>
						</LoginForm.Body>
					</LoginForm>
				</StyledModal>
			</Box>
		);
	}
}

export default connect(null, mapDispatchToProps)(reduxForm({
	form: 'loginForm',
})(LoginFormComponent));
