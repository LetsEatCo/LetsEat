import {addItemToCartEpic} from 'src/store/epics/customer/cart/add-item-to-cart.epic';
import {removeItemFromCartEpic} from 'src/store/epics/customer/cart/remove-item-from-cart.epic';

export const CartEpics = [addItemToCartEpic, removeItemFromCartEpic];
