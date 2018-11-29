import styled from 'styled-components';

export const DeliveryTypeList = styled.ul`
	width: max-content;
	display: inline-flex;
	flex-direction: row;
	border: 1px solid rgb(236, 237, 239);
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const DeliveryTypeItem = styled.li`
	display: block;
	position: relative;
	border-right: 1px solid rgb(236, 237, 239);
`;

export const DeliveryTypeInput = styled.input`
	-webkit-appearance: none;
	display: inline-block;
	height: 44px;
	opacity: 0;
	width: 140px;
`;

const applyBorderBottom = () => `border-bottom: 5px solid rgb(0, 204, 153)`;
export const DeliveryTypeItemLabel = styled.label<{isSelected: boolean}>`
	-webkit-box-align: center;
	align-items: center;
	bottom: 0;
	color: rgb(45, 49, 56);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	font-size: 12px;
	-webkit-box-pack: center;
	justify-content: center;
	left: 0;
	padding-top: 5px;
	position: absolute;
	top: 0;
	right: 0;
	${({isSelected}) => isSelected && applyBorderBottom()}
`;

export const DeliveryTypeItemSpan = styled.span`
	display: block;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
`;
