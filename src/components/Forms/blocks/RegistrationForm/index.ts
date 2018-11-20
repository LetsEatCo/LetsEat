import styled from 'styled-components';
import {Box} from 'rebass';
import {Body} from './Body';
import {RegistrationButton} from './RegistrationButton';
import {Field} from '@/components/Forms/blocks/Common/Field';
import {Header} from '@/components/Forms/blocks/Common/Header';
import {SubmitButton} from '@/components/Forms/blocks/Common/SubmitButton';
import {CloseButton} from '@/components/Common/CloseButton';

const RegistrationForm: any = styled(Box)`
	max-width: 435px;
	max-height: 640px;
	position: fixed;
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
RegistrationForm.Field = Field;
RegistrationForm.SubmitButton = SubmitButton;
RegistrationForm.RegistrationButton = RegistrationButton;
RegistrationForm.CloseButton = CloseButton;

export default RegistrationForm;
