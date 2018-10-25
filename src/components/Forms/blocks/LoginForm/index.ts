import styled from 'styled-components';
import {Box} from 'rebass';
import {Header} from './Header';
import {Body} from './Body';
import {EmailField} from './EmailField';
import {PasswordField} from './PasswordField';
import {SubmitButton} from './SubmitButton';
import {LoginButton} from '@/components/Forms/blocks/LoginForm/LoginButton';

const LoginForm: any = styled(Box)`
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

LoginForm.Header = Header;
LoginForm.Body = Body;
LoginForm.EmailField = EmailField;
LoginForm.PasswordField = PasswordField;
LoginForm.SubmitButton = SubmitButton;
LoginForm.LoginButton = LoginButton;

export default LoginForm;
