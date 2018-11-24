import {Button as CommonButton} from '@/components/Common/Button';
import React from 'react';
import styled from 'styled-components';

const Button = styled(CommonButton)`
	width: calc(100% - 32px);
	margin: 0 16px 16px;
`;

export const CheckoutButton: any = props => (
	<Button modifiers={['large', 'green']} children={props.children} />
);
