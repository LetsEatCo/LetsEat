import styled from 'styled-components';
import {theme} from '@/utils/ui/theme';
import {OrderStoreName} from '@/components/Modals/blocks/OrderModal/OrderStoreName';
import {OrderPrice} from '@/components/Modals/blocks/OrderModal/OrderPrice';
import {OrderDescription} from '@/components/Modals/blocks/OrderModal/OrderDescription';
import {OrderInformations} from '@/components/Modals/blocks/OrderModal/OrderInformations';

const OrderModal: any = styled.div`
	width: calc(100% - 17.5px);
	height: 128px;
	display: flex;
	margin: 16px 0;
	padding: 0;
	border: 1px solid ${theme.colors.LightOutline};
	border-image: initial;
	transition: background-color 0.35s;
	will-change: background-color;
	box-sizing: content-box;
	cursor: pointer;

	&:hover {
		background-color: ${theme.colors.Hover};
	}
`;

OrderModal.StoreName = OrderStoreName;
OrderModal.Price = OrderPrice;
OrderModal.Description = OrderDescription;
OrderModal.Informations = OrderInformations;

export {OrderModal};
