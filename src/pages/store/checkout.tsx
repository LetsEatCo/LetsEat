import React from 'react';
import {theme} from '@/utils/ui/theme';
import {http} from '@/services/http.service';
import {Container} from '@/components/Common/Container';
import {connect} from 'react-redux';
import {Text} from 'rebass';
import CheckoutPageLayout from '@/layouts/Checkout';
import {fontScale} from '@/utils/ui';
import {Column} from '@/components/Common/Column';
import {bindActionCreators} from 'redux';
import {removeItemFromCartAction} from '@/store/actions/cart.actions';
import StripeForm from '@/components/Forms/Checkout/StripeForm';
import DeliveryForm from '@/components/Forms/Checkout/DeliveryForm';
import OrderCart from '@/components/Checkout/OrderCart';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Router from 'next/router';
import {SubmissionError} from 'redux-form';
import {checkoutSetDeliveryAddressAction} from '@/store/actions/checkout.actions';
import {Button} from '@/components/Common/Button';
import {
	DeliveryTypeInput,
	DeliveryTypeItem,
	DeliveryTypeItemLabel,
	DeliveryTypeItemSpan,
	DeliveryTypeList,
} from '@/components/Checkout/blocks/DeliveryTypeList';
import {
	CheckoutForm,
	CheckoutFormHeader,
	CheckoutFormSection,
} from '@/components/Forms/blocks/Checkout/Common/CheckoutForm';
import {formatAddress, isCustomerLoggedIn} from '@/utils';
import {redirectToLogin} from '@/utils/redirect-to-homepage.util';

interface CheckoutPageProps {
	storeData: any;
	cart: any;
	removeItemFromCartAction: any;
	customer: any;
	checkout: any;
	setDeliveryAddressAction: any;
}

interface CheckoutPageState {
	showCart: boolean;
	stripe: any;
	fulfillmentType: 'delivery' | 'takeAway' | any;
}

type Props = Readonly<Partial<CheckoutPageProps>>;

type State = Readonly<Partial<CheckoutPageState>>;

const mapStateToProps = state => {
	return {
		cart: state.customer.cart || {},
		customer: state.customer || {},
		checkout: state.checkout || {},
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeItemFromCartAction: bindActionCreators(removeItemFromCartAction, dispatch),
		setDeliveryAddressAction: bindActionCreators(checkoutSetDeliveryAddressAction, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(
	class extends React.Component<Props, State> {
		constructor(props) {
			super(props);
			this.handleDeliveryAddressFormSubmit = this.handleDeliveryAddressFormSubmit.bind(this);
			this.placeOrder = this.placeOrder.bind(this);
			this.chooseFulfillmentType = this.chooseFulfillmentType.bind(this);
		}

		static async getInitialProps({query, req, res}) {
			if (!isCustomerLoggedIn(req)) {
				return redirectToLogin(res, `/store/${query.slug}`);
			}
			const store = await http()
				.get('/stores/', {params: {slug: query.slug}})
				.toPromise();
			const customer = await http(req)
				.get('/customers/me')
				.toPromise();

			if (!(customer.data.cart.itemsCount > 0)) {
				return redirectToLogin(res, `/store/${query.slug}`);
			}

			return {
				storeData: store.data,
				cart: customer ? customer.data.cart : {},
				customer: customer || {},
			};
		}

		state = {
			stripe: null,
			fulfillmentType: 'delivery',
		};

		componentDidMount() {
			window.addEventListener('load', () => {
				this.setState({stripe: window.Stripe(CONFIG.stripe.publishableKey)});
			});
			if (window.Stripe) {
				this.setState({stripe: window.Stripe(CONFIG.stripe.publishableKey)});
			}
			Router.beforePopState(({as}) => {
				window.location.href = as;
				return false;
			});
		}

		handleDeliveryAddressFormSubmit = async values => {
			try {
				this.props.setDeliveryAddressAction(values);
			} catch {
				throw new SubmissionError({
					_error: 'Error',
				});
			}
		};

		chooseFulfillmentType = e => {
			return this.setState({fulfillmentType: e.currentTarget.value});
		};

		placeOrder = () => {
			const data = {
				totalToPay: this.props.cart.totalPrice,
				deliveryAddress: this.props.checkout.deliveryAddress.address,
				deliveryNote: this.props.checkout.deliveryAddress.deliveryNote,
				paymentDetails: {id: this.props.checkout.stripe.token.id},
				isDelivery: this.state.fulfillmentType === 'delivery',
				isTakeAway: this.state.fulfillmentType === 'takeAway',
			};
			return http()
				.post('customers/me/orders', data)
				.subscribe({
					next: response => {
						console.log(response);
					},
					error: error => {
						console.log(error);
					},
				});
		};

		render() {
			return (
				<CheckoutPageLayout headerBackgroundColor={theme.colors.White}>
					<Container flexDirection={'column'}>
						<Text
							as={'h1'}
							fontSize={fontScale(5)}
							fontWeight={600}
							color={'Text'}
							letterSpacing={-2}
						>
							Checkout
						</Text>
					</Container>
					<Container flexDirection={'row'} justifyContent={'space-between'}>
						<Column maxWidth={'484px'} flexDirection={'column'}>
							<DeliveryTypeList>
								<DeliveryTypeItem>
									<DeliveryTypeInput
										type="radio"
										id="delivery"
										name="fulfillmentType"
										value="delivery"
										checked={this.state.fulfillmentType === 'delivery'}
										onChange={this.chooseFulfillmentType}
									/>
									<DeliveryTypeItemLabel
										htmlFor="delivery"
										isSelected={this.state.fulfillmentType === 'delivery'}
									>
										<DeliveryTypeItemSpan>
											<span>DELIVERY</span>
										</DeliveryTypeItemSpan>
									</DeliveryTypeItemLabel>
								</DeliveryTypeItem>
								<DeliveryTypeItem>
									<DeliveryTypeInput
										type="radio"
										id="takeAway"
										name="fulfillmentType"
										value="takeAway"
										checked={this.state.fulfillmentType === 'takeAway'}
										onChange={this.chooseFulfillmentType}
									/>
									<DeliveryTypeItemLabel
										htmlFor="takeAway"
										isSelected={this.state.fulfillmentType === 'takeAway'}
									>
										<DeliveryTypeItemSpan>
											<span>TAKE AWAY</span>
										</DeliveryTypeItemSpan>
									</DeliveryTypeItemLabel>
								</DeliveryTypeItem>
							</DeliveryTypeList>
							<DeliveryForm
								onSubmit={this.props.setDeliveryAddressAction}
								display={(this.state.fulfillmentType === 'delivery').toString()}
							/>
							<CheckoutFormSection display={(this.state.fulfillmentType === 'takeAway').toString()}>
								<CheckoutFormHeader>Pickup Address</CheckoutFormHeader>
								<CheckoutForm p={'15px 30px'} fontSize={fontScale(0)}>
									{formatAddress(this.props.storeData.address)}
								</CheckoutForm>
							</CheckoutFormSection>
							<StripeProvider stripe={this.state.stripe}>
								<Elements>
									<StripeForm customer={this.props.customer.profile} display={'true'} />
								</Elements>
							</StripeProvider>
							<Button
								modifiers={['green', 'large']}
								width={'180px'}
								height={'42px'}
								ml={'auto'}
								mt={'28px'}
								onClick={this.placeOrder}
							>
								ORDER
							</Button>
						</Column>
						<Column maxWidth={'390px'}>
							<OrderCart
								storeData={this.props.storeData}
								cart={this.props.cart}
								removeItemFromCartAction={this.props.removeItemFromCartAction}
							/>
						</Column>
					</Container>
				</CheckoutPageLayout>
			);
		}
	},
);
