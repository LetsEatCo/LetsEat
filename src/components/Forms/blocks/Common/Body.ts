import styled from 'styled-components';
import {applyStyleModifiers} from 'styled-components-modifiers';

const BodyModifiers = {
	noPaddingTopBottom: () => `
    padding: 0 36px;
  `,
};

export const Body: any = styled.form`
	display: flex;
	flex-direction: column;
	padding: 48px 36px 12px 36px;

	${applyStyleModifiers(BodyModifiers)};
`;
