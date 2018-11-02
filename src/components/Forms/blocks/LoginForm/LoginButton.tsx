import {Button} from 'rebass';
import {GreyColors, fontScale} from '@/utils/ui';
import React from 'react';

export const LoginButton = props => (
	<Button
		{...props}
		borderRadius={16}
		border="1px solid"
		borderColor={GreyColors.tuatara}
		fontSize={fontScale(-1)}
		bg="transparent"
		color={GreyColors.tuatara}
	>
		{props.text}
	</Button>
);
