import styled from 'styled-components';
import {Store, StoreLink} from '@/components/Checkout/blocks/Order/Store';
import {DetailsList} from '@/components/Checkout/blocks/Order/DetailsList';

const OrderCart: any = styled.section`
	box-shadow: rgba(0, 0, 0, 0.13) 0 8px 15px 0;
	margin-top: -60px;
	border: 1px solid rgb(241, 242, 243);
	border-image: initial;
	width: 100%;
`;

const Container = styled.div`
	padding: 20px 32px;
`;

OrderCart.Container = Container;
OrderCart.Store = Store;
OrderCart.StoreLink = StoreLink;
OrderCart.DetailsList = DetailsList;

export default OrderCart;
