import styled from 'styled-components';
import {Field as ReduxFormField} from 'redux-form';

export const CheckboxField: any = styled(ReduxFormField as any)`
	& {
		margin-right: 12px;
	}
	&:focus {
		border-bottom: 2px solid ${props => props.theme.colors.Cta};
		padding: 22px 0 21px 0;
	}
	&::placeholder {
		color: ${props => props.theme.colors.placeholder};
	}
`;
