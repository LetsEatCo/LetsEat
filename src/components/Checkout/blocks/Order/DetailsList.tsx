import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {fontScale} from '@/utils/ui';

export const DetailsList = styled.ul`
	padding: 0 0 10px;
	margin: 0;
	border-bottom: 1px solid ${props => props.theme.colors.LightOutline};
`;

const OrderDetail = styled.li`
	display: block;
	margin-bottom: 22px;
	color: ${props => props.theme.colors.Text};
	letter-spacing: -0.2px;
`;

const OrderDetailItemName = styled.span`
	line-height: 2;
`;

const OrderDetailItemPrice = styled.span`
	font-weight: 500;
	line-height: 2;
`;

const OrderDetailItemOptions = styled.div`
	font-size: ${fontScale(-1)};
	color: ${props => props.theme.colors.LightText};
	line-height: 1.5;
	margin-bottom: 2px;
`;

const OrderDetailRemoveItemAction = styled.span`
	font-size: ${fontScale(-2)};
	text-transform: uppercase;
	color: ${props => props.theme.colors.LightText};
	line-height: 1.5;
	font-weight: 600;
`;
export const createOrderDetailList = (items: any[], removeCartItem: any) =>
	items.map((item, index) => (
		<OrderDetail key={index}>
			<Flex justifyContent={'space-between'} fontSize={fontScale(-0.5)}>
				<OrderDetailItemName>
					{item.quantity} x {item.meal.name}
				</OrderDetailItemName>
				<OrderDetailItemPrice>{item.meal.price} € </OrderDetailItemPrice>
			</Flex>
			<OrderDetailItemOptions>
				{[
					...item.productOptions.map(productOption => productOption.optionProduct.product.name),
					...item.ingredientOptions.map(
						ingredientOption => ingredientOption.optionIngredient.ingredient.name,
					),
				].join(', ')}
			</OrderDetailItemOptions>
			<div>
				<OrderDetailRemoveItemAction onClick={() => removeCartItem({mealUuid: item.uuid})}>
					Remove
				</OrderDetailRemoveItemAction>
			</div>
		</OrderDetail>
	));
