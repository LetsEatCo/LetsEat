import styled from 'styled-components';
import {Box} from 'rebass';
import React from 'react';
import {ButtonFlex} from '@/components/Common/Button';

const StoreBar: any = styled(Box)<any>`
	position: sticky;
	display: flex;
	flex-direction: row;
	align-items: center;
	top: 0;
	width: 100vw;
	height: 70px;
	background-color: #fff;
	border-bottom: 1px solid rgba(217, 219, 224, 0.5);
	z-index: 300;
`;

const VerticalSeparator: any = styled.span<any>`
	border-left: 1px solid;
	width: 1px;
	margin: 0 10px;
	height: 24px;
`;

const CartButton: any = props => (
	<ButtonFlex
		as={'div'}
		modifiers={props.hasItems ? ['large', 'green'] : ['large', 'white']}
		children={props.children}
	/>
);

StoreBar.CartButton = CartButton;
StoreBar.CartButton.VerticalSeparator = VerticalSeparator;

export default StoreBar;
