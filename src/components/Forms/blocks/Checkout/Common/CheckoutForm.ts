import styled from 'styled-components';
import {fontScale} from '@/utils/ui';
import {Box} from 'rebass';

export const CheckoutForm = styled(Box)`
	padding: ${props => (props.p ? props.p : '15px 30px 30px')};
	border: 1px solid rgb(236, 237, 239);
	width: 100%;
`;

export const CheckoutFormHeader = styled.div`
	padding: 14px 0;
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	min-height: 55px;
	font-size: ${fontScale(0)};
	font-weight: 500;
	color: ${props => props.theme.colors.Text};
`;

export const CheckoutFormSection = styled.div<{display: 'true' | 'false'}>`
	margin-top: 10px;
	width: 100%;
	display: ${props => (props.display === 'true' ? 'block' : 'none')};
`;
