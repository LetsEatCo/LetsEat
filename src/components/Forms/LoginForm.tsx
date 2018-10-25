import {Button, Box, Text} from 'rebass';
import * as React from 'react';
import fontScale, {GreyColors} from '@/utils/ui';
import {reduxForm} from 'redux-form';
import LoginForm from '@/components/Forms/blocks/LoginForm';

interface LoginButtonProps extends React.ClassAttributes<Button> {
	showLoginForm?: boolean;
	hideLoginForm?: boolean;
	handleSubmit?: any;
}

class LoginFormComponent extends React.Component<LoginButtonProps> {
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
			<div>
				<LoginForm.LoginButton onClick={this.showLoginForm} text={'Log In'} />
				{this.state.showLoginForm && (
					<LoginForm>
						<LoginForm.Header>
							<Box>
								<Text fontSize={fontScale(2)} fontColor={GreyColors.tuatara}>
									Log in
								</Text>
								<Button onClick={this.hideLoginForm}>X</Button>
							</Box>
						</LoginForm.Header>
						<LoginForm.Body onSubmit={this.props.handleSubmit}>
							<LoginForm.EmailField type="email" component="input" name="email" required={true} />
							<LoginForm.PasswordField
								type="password"
								component="input"
								name="password"
								required={true}
							/>
							<LoginForm.SubmitButton type="submit">Log In</LoginForm.SubmitButton>
						</LoginForm.Body>
					</LoginForm>
				)}
			</div>
		);
	}
}

export default reduxForm({
	form: 'loginForm',
})(LoginFormComponent);
