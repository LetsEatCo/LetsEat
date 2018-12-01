import styled from 'styled-components';
import {theme} from '@/utils/ui/theme';
import {OrderStoreName} from '@/components/Modals/blocks/OrderModal/OrderStoreName';
import {OrderPrice} from '@/components/Modals/blocks/OrderModal/OrderPrice';
import {OrderDescription} from '@/components/Modals/blocks/OrderModal/OrderDescription';
import {OrderInformations} from '@/components/Modals/blocks/OrderModal/OrderInformations';
import {Card} from 'rebass';

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

const OrderModalImage = styled(Card)`
	justify-content: center;
	display: flex;
	width: 200px;
	background-color: #f6f6f6;
	box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

OrderModal.StoreName = OrderStoreName;
OrderModal.Price = OrderPrice;
OrderModal.Description = OrderDescription;
OrderModal.Informations = OrderInformations;
OrderModal.Image = OrderModalImage;

export {OrderModal};
