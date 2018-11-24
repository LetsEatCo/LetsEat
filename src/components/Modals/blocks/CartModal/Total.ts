import styled from 'styled-components';
import {fontScale} from '@/utils/ui';

export const Total = styled.div`
	border-top: 1px solid ${props => props.theme.colors.LightOutline};
	font-size: 16px;
	letter-spacing: -0.48px;
	font-weight: 600;
	line-height: normal;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	padding: 26px 0;
`;

export const TotalPrice = styled.div`
	font-size: ${fontScale(0)};
	color: ${props => props.theme.colors.Cta};
`;
