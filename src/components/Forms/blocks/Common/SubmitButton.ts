import styled from 'styled-components';
import {fontScale} from '@/utils/ui';
import {Button} from 'rebass';
import {applyStyleModifiers} from 'styled-components-modifiers';

const SubmitButtonModifiers = {
	addToCartButton: () => `
		display: flex;
    height: 56px;
    justify-content: space-between;
    font-size: ${fontScale(-1.5)}
    margin: 0;
    flex: 1;
    justify-content: center;
  `,
};

export const SubmitButton: any = styled(Button)`
	margin: 42px 0 32px 0;
	height: 48px;
	border-radius: 32px;
	border: none;
	background-color: ${props => props.theme.colors.Cta};
	color: white;
	text-transform: uppercase;
	font-size: ${fontScale(-1)};
	font-weight: 600;
	cursor: pointer;
	${applyStyleModifiers(SubmitButtonModifiers)};
`;
