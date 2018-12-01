import React from 'react';
import {OrderModal as Order} from '@/components/Modals/blocks/OrderModal';
import {ButtonFlex} from '@/components/Common/Button';
import {default as NextLink} from 'next/link';
import {Flex} from 'rebass';
import {Link} from '@/components/Common/Link';

interface Props {
	order: any;
}

class OrderModal extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	state = {
		showModal: false,
	};

	handleOpenModal = () => this.setState({showModal: true});

	handleCloseModal = () => this.setState({showModal: false});

	render() {
		return (
			<>
				<Order>
					<Order.Informations>
						<div>
							<Order.StoreName>{this.props.order.store.name}</Order.StoreName>
							<Order.Description>
								{[
									...this.props.order.detailsMeals.map(
										detailMeal => `${detailMeal.quantity} x ${detailMeal.meal.name}`,
									),
									...this.props.order.detailsProducts.map(
										detailProduct => `${detailProduct.quantity} x ${detailProduct.product.name}`,
									),
								].join(', ')}
							</Order.Description>
						</div>
						<Flex justifyContent={'space-between'} alignItems={'center'}>
							<Flex alignItems={'center'}>
								<Order.Price>{this.props.order.totalPaid} €</Order.Price>
								{/*<div*/}
								{/*style={{*/}
								{/*width: '1px',*/}
								{/*height: '18px',*/}
								{/*backgroundColor: 'rgb(224, 224, 224)',*/}
								{/*marginRight: '8px',*/}
								{/*marginLeft: '8px',*/}
								{/*/>*/}
								{/*<p*/}
								{/*style={{fontSize: '12px', textTransform: 'uppercase'}}*/}
								{/*>*/}
								{/*View Receipt*/}
								{/*</p>*/}
							</Flex>
							<div>
								<NextLink
									as={`/store/${this.props.order.store.slug}`}
									href={`/store?slug=${this.props.order.store.slug}`}
									passHref={true}
								>
									<Link>
										<ButtonFlex as={'div'} modifiers={['large', 'green']} height={'28px'}>
											<p style={{fontSize: '12px'}}>View Store</p>
										</ButtonFlex>
									</Link>
								</NextLink>
							</div>
						</Flex>
					</Order.Informations>
				</Order>
			</>
		);
	}
}

export default OrderModal;
