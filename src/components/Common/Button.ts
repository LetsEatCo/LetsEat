import styled from 'styled-components';
import {fontScale} from '@/utils/ui';
import {applyStyleModifiers} from 'styled-components-modifiers';
import {Button as RebassButton} from 'rebass';

const ButtonModifiers = {
	green: ({theme}) => `
    background-color: ${theme.colors.Cta};
    color: ${theme.colors.White};
    border: none;
  `,

	white: ({theme}) => `
    background-color: ${theme.colors.White};
    color: ${theme.colors.LightText};
    border: 1px solid ${theme.colors.Outline};
  `,

	large: () => `
		letter-spacing: 1px;
		font-weight: 600;
		font-size: ${fontScale(-1)};
		padding: 0 20px;
	`,

	disabled: ({theme}) => `
		color: ${theme.colors.LightText}
	`,

	fullWidth: () => `
		width: 100%
	`,
};

export const Button: any = styled(RebassButton)<any>`
	height: ${props => (props.height ? props.height : '48px')};
	border-radius: 32px;
	border: none;
	text-transform: uppercase;
	cursor: pointer;
	transition: color 1s;
	${applyStyleModifiers(ButtonModifiers)};
`;

export const ButtonFlex: any = styled.button`
	height: 48px;
	border-radius: 32px;
	border: none;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	${applyStyleModifiers(ButtonModifiers)};
`;
