import styled from 'styled-components';
import {HeaderText} from '@/components/Modals/blocks/CartModal/Header';
import {Item, ItemName, ItemPrice} from '@/components/Modals/blocks/CartModal/Item';
import {Container} from '@/components/Modals/blocks/CartModal/Container';
import {ItemsList} from '@/components/Modals/blocks/CartModal/ItemsList';
import {CheckoutButton} from '@/components/Modals/blocks/CartModal/CheckoutButton';
import {Total, TotalPrice} from '@/components/Modals/blocks/CartModal/Total';

const CartModal: any = styled.div<any>`
	bottom: -13px;
	transform: translate(calc((-50% + 62.5px) + 0px), 100%);
	background-color: rgb(255, 255, 255);
	filter: drop-shadow(rgba(16, 25, 30, 0.08) 0px 1px 4px);
	position: absolute;
	z-index: 1100;
	width: 362px;
	border: 1px solid rgb(242, 243, 243);
	border-image: initial;
`;

CartModal.HeaderText = HeaderText;

CartModal.Item = Item;
CartModal.Item.Name = ItemName;
CartModal.Item.Price = ItemPrice;

CartModal.Container = Container;

CartModal.ItemsList = ItemsList;

CartModal.CheckoutButton = CheckoutButton;

CartModal.Total = Total;
CartModal.Total.Price = TotalPrice;

export default CartModal;
