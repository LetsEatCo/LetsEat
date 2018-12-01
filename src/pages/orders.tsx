import React from 'react';
import {connect} from 'react-redux';
import OrdersLayout from '@/layouts/Orders';
import Hero from '@/components/Hero';
import {fontScale} from '@/utils/ui';
import {theme} from '@/utils/ui/theme';
import {http} from '@/services/http.service';
import {OrdersList} from '@/components/Orders/blocks/OrdersList';
import {createOrdersList} from '@/components/Lists/OrdersList';
import {Container} from '@/components/Common/Container';

class OrdersPage extends React.Component {
	static async getInitialProps({req}) {
		const orders = await http(req)
			.get('/customers/me/orders')
			.toPromise();
		return {
			orders: orders.data,
		};
	}

	render() {
		return (
			<OrdersLayout>
				<Hero bg={'White'} height={'180px'} borderBottom={`1px solid ${theme.colors.Outline}`}>
					<Hero.Container alignItems={'flex-end'}>
						<Hero.Title
							as={'h1'}
							letterSpacing={'-2px'}
							fontSize={[fontScale(5)]}
							fontWeight={'600'}
							color={'Black'}
							maxWidth={'100%'}
							textAlign={'left'}
							m={'0 0 0 0'}
							pb={30}
						>
							Orders
						</Hero.Title>
					</Hero.Container>
				</Hero>
				<Container flexDirection={'column'}>
					<OrdersList>{createOrdersList(this.props.orders)}</OrdersList>
				</Container>
			</OrdersLayout>
		);
	}
}

export default connect()(OrdersPage);
