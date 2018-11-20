import styled from 'styled-components';
import {theme} from '@/utils/ui/theme';

export const ProductName = styled.h3`
	letter-spacing: -0.28px;
	font-weight: 500;
	line-height: normal;
	display: block;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${theme.colors.Text};
	overflow: hidden;
	margin: 0 0 5px;
`;
