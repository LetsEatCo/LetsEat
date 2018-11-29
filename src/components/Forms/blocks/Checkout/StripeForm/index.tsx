import styled from 'styled-components';
import {fontScale} from '@/utils/ui';
import React from 'react';
import {CheckoutForm} from '@/components/Forms/blocks/Checkout/Common/CheckoutForm';

const StripeElementsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-bottom: 24px;
	padding: 16px 0;
`;

const StripeFormAdapter: React.FunctionComponent<any> = ({className, ...props}) => {
	return <CheckoutForm className={className} {...props} />;
};

const Stripe: any = styled(StripeFormAdapter)`
	.StripeElement {
		width: 100%;
		font-size: ${fontScale(-1)};
		padding: 10px 0;
		border-bottom: 2px solid ${props => props.theme.colors.LightOutline};

		&--invalid {
			border-bottom: 2px solid ${props => props.theme.colors.Error};
		}

		&--complete {
			&.StripeElement--focus {
				border-bottom: 2px solid ${props => props.theme.colors.Cta};
			}
		}

		&.CardNumberElement {
			width: 45%;
		}

		&.CardExpiryElement {
			width: 20%;
		}

		&.CardCVCElement {
			width: 10%;
		}
	}
`;

Stripe.ElementsWrapper = StripeElementsWrapper;

export default Stripe;
