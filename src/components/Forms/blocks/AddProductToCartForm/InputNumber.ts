import styled from 'styled-components';
import {fontScale} from '@/utils/ui';

export const InputNumber: any = styled.div`
	font-size: ${fontScale(0)};
	letter-spacing: -0.28px;
	font-weight: 500;
	line-height: normal;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	background-color: ${props => props.theme.colors.White};
	width: 168px;
	max-width: 168px;
	height: 56px;
	color: ${props => props.theme.colors.foreground};
	margin: 0 12px 0 auto;
	border: 1px solid ${props => props.theme.colors.LightOutline};
	border-image: initial;
	border-radius: 100px;
`;

export const InputNumberIncreaseOrDecrease: any = styled.div`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	cursor: pointer;
	height: 100%;
	width: calc(100% - 15px);
	user-select: none;
	color: ${props => props.theme.colors.FaintText};
`;
