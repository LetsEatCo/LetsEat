import styled from 'styled-components';
import {Box} from 'rebass';
import {LoginButton} from '@/components/Forms/blocks/LoginForm/LoginButton';
import {Field} from '@/components/Forms/blocks/Common/Field';
import {Header} from '@/components/Forms/blocks/Common/Header';
import {Body} from '@/components/Forms/blocks/Common/Body';
import {CloseButton} from '@/components/Common/CloseButton';
import {SubmitButton} from '@/components/Forms/blocks/Common/SubmitButton';

const LoginForm: any = styled(Box)`
	max-width: 435px;
	max-height: 540px;
	position: fixed;
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
LoginForm.Field = Field;
LoginForm.SubmitButton = SubmitButton;
LoginForm.LoginButton = LoginButton;
LoginForm.CloseButton = CloseButton;

export default LoginForm;
