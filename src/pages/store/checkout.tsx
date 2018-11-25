import React from 'react';
import {theme} from '@/utils/ui/theme';
import {http} from '@/services/http.service';
import {Container} from '@/components/Common/Container';
import {connect} from 'react-redux';
import {Flex, Text} from 'rebass';
import CheckoutPageLayout from '@/layouts/Checkout';
import {fontScale} from '@/utils/ui';
import {Column} from '@/components/Common/Column';
import OrderCart from '@/components/Checkout/blocks/Order';
import {createOrderDetailList} from '@/components/Checkout/blocks/Order/DetailsList';
import {bindActionCreators} from 'redux';
import {removeItemFromCartAction} from '@/store/actions/cart.actions';
import {default as NextLink} from 'next/link';

interface StorePageProps {
	storeData: any;
	cuisineSlug: string;
	itemsCount: number;
	hasItems: boolean;
	cart: any;
	removeItemFromCartAction: any;
}

interface StorePageState {
	showCart: boolean;
}

type Props = Readonly<Partial<StorePageProps>>;

type State = Readonly<Partial<StorePageState>>;

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

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(
	class extends React.Component<Props, State> {
		constructor(props) {
			super(props);
			this.removeCartItem = this.removeCartItem.bind(this);
		}

		static async getInitialProps({query, req}): Promise<{storeData: any; cart: any}> {
			const store = await http()
				.get('/stores/', {params: {slug: query.slug}})
				.toPromise();
			const customer = await http(req)
				.get('/customers/me')
				.toPromise();

			return {
				storeData: store.data,
				cart: customer ? customer.data.cart : {},
			};
		}

		removeCartItem: any = values => {
			this.props.removeItemFromCartAction(values);
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
						<Column maxWidth={'484px'}>ssss</Column>
						<Column maxWidth={'390px'}>
							<OrderCart>
								<OrderCart.Container>
									<OrderCart.Store>
										<Text fontSize={fontScale(0)}>{this.props.storeData.name}</Text>
										<NextLink
											as={`/store/${this.props.storeData.slug}`}
											href={`/store?slug=${this.props.storeData.slug}`}
											passHref={true}
										>
											<OrderCart.StoreLink>View Menu</OrderCart.StoreLink>
										</NextLink>
									</OrderCart.Store>
									<OrderCart.DetailsList>
										{createOrderDetailList([...this.props.cart.meals], this.removeCartItem)}
									</OrderCart.DetailsList>
									<Flex flexDirection={'row'} justifyContent={'space-between'} pt={32} pb={16}>
										<Text fontSize={fontScale(1)} fontWeight={500}>
											Total
										</Text>
										<Text fontSize={fontScale(1)} fontWeight={500}>
											{this.props.cart.totalPrice} €
										</Text>
									</Flex>
								</OrderCart.Container>
							</OrderCart>
						</Column>
					</Container>
				</CheckoutPageLayout>
			);
		}
	},
);
