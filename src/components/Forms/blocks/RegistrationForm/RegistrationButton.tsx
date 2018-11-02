import {Button} from 'rebass';
import {GreyColors} from '@/utils/ui';
import {fontScale} from '@/utils/ui/font-scale.util';
import * as React from 'react';

export const RegistrationButton = props => (
	<Button
		{...props}
		borderRadius={16}
		border="1px solid"
		borderColor={GreyColors.tuatara}
		fontSize={fontScale(-1)}
		bg={GreyColors.tuatara}
		color="white"
	>
		{props.text}
	</Button>
);
