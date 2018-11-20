import styled from 'styled-components';
import {Box} from 'rebass';

export const Upper: any = styled(Box)`
	max-height: 540px;
	display: flex;
	width: 100%;
	flex-direction: column;
	height: calc(100% - 88px);
	overflow-y: scroll;
	border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;
