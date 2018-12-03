import {Box, Text} from 'rebass';
import * as React from 'react';
import {Colors, fontScale, GreyColors} from '@/utils/ui';
import {InjectedFormProps, reduxForm} from 'redux-form';
import RegistrationForm from '@/components/Forms/blocks/RegistrationForm';
import {StyledModal} from '@/components/Modals';

interface RegistrationFormProps extends React.ClassAttributes<any> {
	showLoginForm?: boolean;
	hideLoginForm?: boolean;
	handleSubmit?: any;
	error?: any;
}

const getParent = () => document.querySelector('body') as HTMLElement;

class RegistrationFormComponent extends React.Component<InjectedFormProps<RegistrationFormProps>> {
	constructor(props) {
		super(props);
	}

	state = {
		showRegistrationForm: false,
	};

	showRegistrationForm = () => this.setState({showRegistrationForm: true});

	hideRegistrationForm = () => this.setState({showRegistrationForm: false});

	render() {
		return (
			<div>
				<RegistrationForm.RegistrationButton onClick={this.showRegistrationForm} text={'Sign Up'} />
				<StyledModal
					isOpen={this.state.showRegistrationForm}
					ariaHideApp={false}
					parentSelector={getParent}
				>
					<RegistrationForm>
						<RegistrationForm.Header>
							<Box>
								<Text fontSize={fontScale(2)} color={GreyColors.tuatara}>
									Sign Up
								</Text>
								<RegistrationForm.CloseButton onClick={this.hideRegistrationForm} />
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
							{this.props.error && (
								<Text fontSize={fontScale(-2)} color={Colors.cadmiumRed} mt={3}>
									{this.props.error}
								</Text>
							)}
							<RegistrationForm.SubmitButton type="submit">Register</RegistrationForm.SubmitButton>
						</RegistrationForm.Body>
					</RegistrationForm>
				</StyledModal>
			</div>
		);
	}
}

export default reduxForm({
	form: 'registrationForm',
})(RegistrationFormComponent);
