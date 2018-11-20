import styled from 'styled-components';
import {Box} from 'rebass';
import {applyStyleModifiers} from 'styled-components-modifiers';

const HeaderModifiers = {
	justifyContentFlexStart: () => `
    justify-content: flex-start;
  `,
};

export const Header: any = styled(Box)`
	padding: 48px 36px 12px 36px;
	justify-content: center;
	display: flex;
	font-weight: 600;
	${applyStyleModifiers(HeaderModifiers)};
`;
