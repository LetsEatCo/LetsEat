import React, {SyntheticEvent} from 'react';
import {
	CardCVCElement,
	injectStripe,
	ReactStripeElements,
	CardNumberElement,
	CardExpiryElement,
} from 'react-stripe-elements';
import StripeForm from '@/components/Forms/blocks/Checkout/StripeForm/index';
import {
	CheckoutFormHeader,
	CheckoutFormSection,
} from '@/components/Forms/blocks/Checkout/Common/CheckoutForm';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	checkoutRemoveStripeTokenIdAction,
	checkoutSaveStripeTokenIdAction,
} from '@/store/actions/checkout.actions';
import {Button} from '@/components/Common/Button';
import {theme} from '@/utils/ui/theme';

interface StripeFormProps {
	stripe: stripe.Stripe;
	customer: any;
	display: boolean;
	saveStripeTokenIdAction(values): {type: string; payload: any};
	removeStripeTokenIdAction(): {type: string};
}

type Props = StripeFormProps & ReactStripeElements.InjectedStripeProps;
const mapDispatchToProps = dispatch => {
	return {
		saveStripeTokenIdAction: bindActionCreators(checkoutSaveStripeTokenIdAction, dispatch),
		removeStripeTokenIdAction: bindActionCreators(checkoutRemoveStripeTokenIdAction, dispatch),
	};
};

const createOptions = () => {
	return {
		style: {
			base: {
				fontSize: '14px',
				'::placeholder': {
					color: theme.colors.placeholder,
				},
			},
			invalid: {
				color: theme.colors.Error,
			},
		},
	};
};

export default connect(
	null,
	mapDispatchToProps,
)(
	injectStripe(
		class extends React.Component<Props> {
			constructor(props) {
				super(props);
				this.handleSubmit = this.handleSubmit.bind(this);
				this.state = {
					cardNumber: false,
					cardExpiry: false,
					cardCvc: false,
				};
			}

			async componentWillUnmount() {
				this.props.removeStripeTokenIdAction();
			}

			async handleSubmit(e: SyntheticEvent) {
				e.preventDefault();
				if (!this.isFormComplete()) {
					return;
				}
				this.props.stripe
					.createToken({
						name: `${this.props.customer.firstName} ${this.props.customer.lastName}`,
						currency: 'eur',
					})
					.then(({token}) => {
						this.props.saveStripeTokenIdAction(token);
					})
					.catch(err => console.log(err));
			}

			stripeElementChange = e => {
				this.setState({[e.elementType]: !e.empty && e.complete});
			};

			isFormComplete = () => this.state.cardNumber && this.state.cardExpiry && this.state.cardCvc;

			render() {
				return (
					<CheckoutFormSection display={this.props.display}>
						<CheckoutFormHeader>Payment</CheckoutFormHeader>
						<StripeForm className="StripeForm">
							<StripeForm.ElementsWrapper>
								<CardNumberElement
									className={'CardNumberElement'}
									placeholder={'Card number'}
									onChange={this.stripeElementChange}
									{...createOptions()}
								/>
								<CardExpiryElement
									className={'CardExpiryElement'}
									placeholder={'MM/YY'}
									{...createOptions()}
									onChange={this.stripeElementChange}
								/>
								<CardCVCElement
									className={'CardCVCElement'}
									{...createOptions()}
									onChange={this.stripeElementChange}
								/>
							</StripeForm.ElementsWrapper>
							<Button
								modifiers={this.isFormComplete() ? ['green', 'large'] : ['disabled', 'large']}
								disabled={!this.isFormComplete()}
								onClick={this.handleSubmit}
								width={'120px'}
								height={'42px'}
							>
								Save
							</Button>
						</StripeForm>
					</CheckoutFormSection>
				);
			}
		},
	),
);
