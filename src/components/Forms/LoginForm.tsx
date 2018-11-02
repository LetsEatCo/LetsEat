import {Box, Text} from 'rebass';
import * as React from 'react';
import {Colors, fontScale, GreyColors} from '@/utils/ui';
import {InjectedFormProps, reduxForm} from 'redux-form';
import LoginForm from '@/components/Forms/blocks/LoginForm';

interface LoginFormProps extends React.ClassAttributes<any> {
	showLoginForm?: boolean;
	hideLoginForm?: boolean;
	handleSubmit?: any;
	error?: any;
}

class LoginFormComponent extends React.Component<InjectedFormProps<LoginFormProps>> {
	constructor(props) {
		super(props);
	}

	state = {
		showLoginForm: false,
	};

	showLoginForm = () => {
		this.setState({showLoginForm: true});
	};

	hideLoginForm = () => {
		this.setState({showLoginForm: false});
	};

	render() {
		return (
			<Box mr={4}>
				<LoginForm.LoginButton onClick={this.showLoginForm} text={'Log In'} />
				{this.state.showLoginForm && (
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
				)}
			</Box>
		);
	}
}

export default reduxForm({
	form: 'loginForm',
})(LoginFormComponent);
