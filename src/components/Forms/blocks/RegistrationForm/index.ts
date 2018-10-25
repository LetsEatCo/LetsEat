import styled from 'styled-components';
import {Box} from 'rebass';
import {Header} from './Header';
import {Body} from './Body';
import {EmailField} from './EmailField';
import {PasswordField} from './PasswordField';
import {SubmitButton} from './SubmitButton';
import {RegistrationButton} from './RegistrationButton';
import {FirstNameField} from './FirstNameField';
import {LastNameField} from './LastNameField';
import {PhoneNumberField} from './PhoneNumberField';
import {Field} from './Field';

const RegistrationForm: any = styled(Box)`
	max-width: 435px;
	max-height: 540px;
	position: absolute;
	visibility: visible;
	top: 50%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	box-shadow: rgba(34, 34, 34, 0.15) 0 2px 20px 0;
`;

RegistrationForm.Header = Header;
RegistrationForm.Body = Body;
RegistrationForm.FirstNameField = FirstNameField;
RegistrationForm.Field = Field;
RegistrationForm.LastNameField = LastNameField;
RegistrationForm.PhoneNumberField = PhoneNumberField;
RegistrationForm.EmailField = EmailField;
RegistrationForm.PasswordField = PasswordField;
RegistrationForm.SubmitButton = SubmitButton;
RegistrationForm.LoginButton = RegistrationButton;

export default RegistrationForm;
