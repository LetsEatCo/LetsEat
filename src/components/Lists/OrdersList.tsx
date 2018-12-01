import React from 'react';
import OrderModal from '@/components/Modals/OrderModal';

export const createOrdersList = (orders: any[]) =>
	orders.map((order, index) => <OrderModal key={index} order={order} />);
