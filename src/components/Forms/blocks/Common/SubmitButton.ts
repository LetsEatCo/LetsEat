import styled from 'styled-components';
import {fontScale} from '@/utils/ui';

export const SubmitButton = styled.button`
	margin: 42px 0 32px 0;
	height: 48px;
	border-radius: 32px;
	border: none;
	background-color: ${props => props.theme.colors.Cta};
	color: white;
	text-transform: uppercase;
	font-size: ${fontScale(-1)};
	font-weight: 600;
`;
