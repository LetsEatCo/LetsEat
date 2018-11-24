import styled from 'styled-components';
import {applyStyleModifiers} from 'styled-components-modifiers';

const WrapperModifiers = {
	overflowXScroll: () => `
    overflow-x: scroll;
  `,
};

export const Wrapper: any = styled.div`
	position: relative;
	${applyStyleModifiers(WrapperModifiers)};
`;
