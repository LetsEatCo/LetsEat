import styled from 'styled-components';
import {Field as ReduxFormField} from 'redux-form';
import {GreyColors, fontScale} from '@/utils/ui';

export const Field: any = styled(ReduxFormField as any)`
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

export const CheckoutField: any = styled(ReduxFormField as any)`
	& {
		font-weight: 400;
		line-height: normal;
		border: none;
		box-shadow: none;
		width: 100%;
		font-size: ${fontScale(-1)};
		padding: 10px 0;
		border-bottom: 2px solid ${props => props.theme.colors.LightOutline};
		color: ${props => props.theme.colors.Text};
		margin-bottom: 24px;
	}
	&:focus {
		border-bottom: 2px solid ${props => props.theme.colors.Cta};
	}
	&::placeholder {
		color: ${props => props.theme.colors.placeholder};
	}
`;

export const CheckoutTextArea: any = styled(ReduxFormField as any)`
	& {
		font-weight: 400;
		line-height: normal;
		border: none;
		box-shadow: none;
		width: 100%;
		font-size: ${fontScale(-1)};
		padding: 10px 0;
		border-bottom: 2px solid ${props => props.theme.colors.LightOutline};
		color: ${props => props.theme.colors.Text};
		margin-bottom: 24px;
		height: 84px;
	}
	&:focus {
		border-bottom: 2px solid ${props => props.theme.colors.Cta};
	}
	&::placeholder {
		color: ${props => props.theme.colors.placeholder};
	}
`;
