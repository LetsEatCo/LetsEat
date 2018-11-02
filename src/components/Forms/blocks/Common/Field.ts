import styled from 'styled-components';
import {Field as ReduxFormField} from 'redux-form';
import {GreyColors, fontScale} from '@/utils/ui';

export const Field: any = styled(ReduxFormField)`
	& {
		padding: 22px 0 22px 0;
		font-size: ${fontScale(0)};
		font-weight: 400;
		line-height: normal;
		border: none;
		box-shadow: none;
		border-bottom: 1px solid ${GreyColors.jumbo};
	}
	&:focus {
		border-bottom: 2px solid ${props => props.theme.colors.Cta};
		padding: 22px 0 21px 0;
	}
	&::placeholder {
		color: ${props => props.theme.colors.placeholder};
	}
`;
