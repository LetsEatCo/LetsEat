import OrderCart from '@/components/Checkout/blocks/Order';
import {Flex, Text} from 'rebass';
import {fontScale} from '@/utils/ui';
import {default as NextLink} from 'next/link';
import {createOrderDetailList} from '@/components/Checkout/blocks/Order/DetailsList';
import React from 'react';
import {connect} from 'react-redux';

interface OrderCartProps {
	storeData: any;
	cart: any;
	removeItemFromCartAction: any;
}

export default connect()(
	class extends React.Component<OrderCartProps> {
		constructor(props) {
			super(props);
			this.removeCartItem = this.removeCartItem.bind(this);
		}

		removeCartItem: any = values => {
			this.props.removeItemFromCartAction(values);
		};
		render() {
			return (
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
			);
		}
	},
);
