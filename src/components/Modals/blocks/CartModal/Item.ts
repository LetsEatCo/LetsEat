import styled from 'styled-components';
import {fontScale} from '@/utils/ui';

export const Item: any = styled.li<any>`
	font-size: ${fontScale(0)};
	letter-spacing: -1.16px;
	font-weight: 500;
	line-height: normal;
	display: flex;
	padding-top: 24px;
	padding-bottom: 28px;
	min-height: 60px;
`;

export const ItemName: any = styled.div<any>`
	flex: 1 1 0;
	padding: 0 20px;
`;

export const ItemPrice: any = styled.div<any>`
	font-size: ${fontScale(-1)};
	color: ${props => props.theme.colors.Cta};
`;
