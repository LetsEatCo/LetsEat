import styled from 'styled-components';
import {theme} from '@/utils/ui/theme';
import {ProductName} from '@/components/Modals/blocks/ProductModal/ProductName';
import {ProductPrice} from '@/components/Modals/blocks/ProductModal/ProductPrice';
import {ProductDescription} from '@/components/Modals/blocks/ProductModal/ProductDescription';
import {ProductInformations} from '@/components/Modals/blocks/ProductModal/ProductInformations';

const ProductModal: any = styled.div`
	width: calc(50% - 17.5px);
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

ProductModal.Name = ProductName;
ProductModal.Price = ProductPrice;
ProductModal.Description = ProductDescription;
ProductModal.Informations = ProductInformations;

export {ProductModal};
