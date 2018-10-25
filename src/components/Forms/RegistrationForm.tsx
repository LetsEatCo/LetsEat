import {Button, Box, Text} from 'rebass';
import * as React from 'react';
import fontScale, {GreyColors} from '@/utils/ui';
import {reduxForm} from 'redux-form';
import RegistrationForm from '@/components/Forms/blocks/RegistrationForm';

interface RegistrationFormProps extends React.ClassAttributes<React.Component> {
	showLoginForm?: boolean;
	hideLoginForm?: boolean;
	handleSubmit?: any;
}

class RegistrationFormComponent extends React.Component<RegistrationFormProps> {
	constructor(props) {
		super(props);
	}

	state = {
		showRegistrationForm: false,
	};

	showRegistrationForm = () => {
		this.setState({showRegistrationForm: true});
	};

	hideRegistrationForm = () => {
		this.setState({showRegistrationForm: false});
	};

	render() {
		return (
			<div>
				<RegistrationForm.LoginButton onClick={this.showRegistrationForm} text={'Sign Up'} />
				{this.state.showRegistrationForm && (
					<RegistrationForm>
						<RegistrationForm.Header>
							<Box>
								<Text fontSize={fontScale(2)} fontColor={GreyColors.tuatara}>
									Sign Up
								</Text>
								<Button onClick={this.hideRegistrationForm}>X</Button>
							</Box>
						</RegistrationForm.Header>
						<RegistrationForm.Body onSubmit={this.props.handleSubmit}>
							<RegistrationForm.Field
								component="input"
								name="firstName"
								placeholder="First Name"
								required={true}
							/>
							<RegistrationForm.Field
								component="input"
								name="lastName"
								placeholder="Last Name"
								required={true}
							/>
							<RegistrationForm.Field
								component="input"
								name="phoneNumber"
								placeholder="Phone Number"
								required={true}
							/>
							<RegistrationForm.Field
								type="email"
								component="input"
								name="email"
								placeholder="Email"
								required={true}
							/>
							<RegistrationForm.Field
								type="password"
								component="input"
								name="password"
								placeholder="Password"
								required={true}
							/>
							<RegistrationForm.SubmitButton type="submit">Register</RegistrationForm.SubmitButton>
						</RegistrationForm.Body>
					</RegistrationForm>
				)}
			</div>
		);
	}
}

export default reduxForm({
	form: 'registrationForm',
})(RegistrationFormComponent);
