import {Container} from '@/components/Common/Container';
import {default as StoreBarBlock} from '@/components/Store/blocks/StoreBar';
import ReactSVG from 'react-svg';
import React from 'react';
import {connect} from 'react-redux';
import CartModal from '@/components/Modals/blocks/CartModal';
import {Wrapper} from '@/components/Common/Wrapper';
import {fontScale} from '@/utils/ui';
import {theme} from '@/utils/ui/theme';
import {bindActionCreators} from 'redux';
import {removeItemFromCartAction} from '@/store/actions/cart.actions';
import {isArrayEmpty} from '@/utils';
import {default as NextLink} from 'next/link';
import {Link} from '@/components/Common/Link';
import {isIterable} from 'rxjs/internal-compatibility';

const mapStateToProps = state => {
	return {
		cart: state.customer.cart || {},
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeItemFromCartAction: bindActionCreators(removeItemFromCartAction, dispatch),
	};
};

const shouldDisplayCartModal = (cart, showCart) => {
	return isIterable(cart.meals) && isIterable(cart.products)
		? !isArrayEmpty([...cart.meals, ...cart.products]) && showCart
		: false;
};

export const StoreBar = connect(
	mapStateToProps,
	mapDispatchToProps,
)(
	class extends React.Component<any, any> {
		constructor(props) {
			super(props);
			this.showCart = this.showCart.bind(this);
			this.hideCart = this.hideCart.bind(this);
			this.removeCartItem = this.removeCartItem.bind(this);
		}

		state = {showCart: false};

		showCart = () => this.setState({showCart: true});

		removeCartItem: any = values => {
			this.props.removeItemFromCartAction(values);
		};

		hideCart = () => {
			setTimeout(() => this.setState({showCart: false}), 2000);
		};

		createCartItemsList = ({meals}: any) =>
			meals.map((meal, index) => (
				<CartModal.Item key={index}>
					<div>{meal.quantity}</div>
					<CartModal.Item.Name>{meal.meal.name}</CartModal.Item.Name>
					<CartModal.Item.Price>{meal.meal.price}€</CartModal.Item.Price>
					<ReactSVG
						onClick={() => this.removeCartItem({mealUuid: meal.uuid})}
						src={'https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/icon-close.svg'}
						svgStyle={{
							color: theme.colors.Text,
							width: '16px',
							marginLeft: '16px',
							cursor: 'pointer',
						}}
					/>
				</CartModal.Item>
			));

		render() {
			return (
				<StoreBarBlock>
					<Container flexDirection={'row'} alignItems={'center'}>
						<Wrapper onMouseEnter={this.showCart} onMouseLeave={this.hideCart}>
							<NextLink
								as={`/store/${this.props.storeSlug}/checkout`}
								href={`/store/checkout?slug=${this.props.storeSlug}`}
								passHref={true}
							>
								<Link>
									<StoreBarBlock.CartButton hasItems={this.props.hasItems}>
										<ReactSVG
											src={'https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/icon-cart.svg'}
											svgStyle={{color: this.props.hasItems ? '#FFF' : '#000', width: '18px'}}
										/>
										<StoreBarBlock.CartButton.VerticalSeparator />
										{this.props.itemsCount} Items
									</StoreBarBlock.CartButton>
								</Link>
							</NextLink>
							{shouldDisplayCartModal(this.props.cart, this.state.showCart) && (
								<CartModal onMouseEnter={this.showCart} onMouseLeave={this.hideCart}>
									<Wrapper modifiers={['overflowXScroll']}>
										<CartModal.Container>
											<CartModal.HeaderText>Order</CartModal.HeaderText>
										</CartModal.Container>
										<CartModal.ItemsList>
											{this.createCartItemsList(this.props.cart)}
										</CartModal.ItemsList>
									</Wrapper>
									<Wrapper>
										<CartModal.Container>
											<CartModal.Total>
												<div style={{fontSize: fontScale(1)}}>Total</div>
												<CartModal.Total.Price>
													{this.props.cart.totalPrice}€{' '}
												</CartModal.Total.Price>
											</CartModal.Total>
										</CartModal.Container>
										<NextLink
											as={`/store/${this.props.storeSlug}/checkout`}
											href={`/store/checkout?slug=${this.props.storeSlug}`}
											passHref={true}
											prefetch={true}
										>
											<Link>
												<CartModal.CheckoutButton>Checkout</CartModal.CheckoutButton>
											</Link>
										</NextLink>
									</Wrapper>
								</CartModal>
							)}
						</Wrapper>
					</Container>
				</StoreBarBlock>
			);
		}
	},
);
