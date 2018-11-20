import styled from 'styled-components';
import {Button} from 'rebass';

export const CloseButton = styled(Button)`
	position: absolute;
	top: 24px;
	right: 24px;
	color: #000;
	width: 24px;
	height: 24px;
	padding: 0;
	background: transparent
		url('https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/icon-close.svg');
`;
