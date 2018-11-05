import styled from 'styled-components';
import {Box} from 'rebass';
import React from 'react';
import {Button} from '@/components/Common/Button';

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

const CartButton = props => <Button modifiers={['large', 'white']} children={props.children} />;

StoreBar.CartButton = CartButton;

export default StoreBar;
