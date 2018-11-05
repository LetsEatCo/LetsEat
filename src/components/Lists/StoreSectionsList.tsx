import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {fontScale} from '@/utils/ui';
import {theme} from '@/utils/ui/theme';

const StoreSectionsList = styled(Flex)`
	width: 100%;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 0 64px;
`;

const Section = styled.div`
	padding-top: 32px;
	display: flex;
	flex-direction: column;
`;

const SectionTitle = styled.h3`
	font-size: ${fontScale(3)};
	color: ${theme.colors.Text};
	letter-spacing: -0.88px;
	font-weight: 600;
	line-height: normal;
	padding-top: 32px;
	padding-bottom: 16px;
	margin: 0;
	border-bottom: 1px solid ${theme.colors.LightOutline};
`;

const ProductList = styled(Flex)`
	padding-top: 16px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
`;

const Product = styled(Flex)`
	width: calc(50% - 17.5px);
	height: 128px;
	margin: 16px 0;
	padding: 0;
	border: 1px solid ${theme.colors.LightOutline};
	border-image: initial;
	transition: background-color 0.35s;
	will-change: background-color;

	&:hover {
		background-color: ${theme.colors.Hover};
	}
`;

const ProductName = styled.h3`
	letter-spacing: -0.28px;
	font-weight: 500;
	line-height: normal;
	display: block;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${theme.colors.Text};
	overflow: hidden;
	margin: 0 0 5px;
`;

const ProductInformations = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 0;
	flex: 1 1 0;
	padding: 20px 20px 15px;
	justify-content: space-between;
`;

const ProductPrice = styled.div`
	letter-spacing: -0.16px;
	font-weight: 500;
	color: ${theme.colors.Cta};
	line-height: 20px;
	font-size: 13px;
	display: block;
`;

const ProductDescription = styled(Flex)`
	font-size: 14px;
	letter-spacing: 0.14px;
	font-weight: 400;
	line-height: 1.43;
	color: rgba(143, 149, 163, 0.9);
	margin-bottom: 5px;
	overflow: hidden;
`;

const createSectionProductsList = (products: any[]) => {
	const list: any = [];
	for (const [index, product] of products.entries()) {
		list.push(
			<Product key={index}>
				<ProductInformations>
					<div>
						<ProductName>{product.name}</ProductName>
						<ProductDescription>{product.description}</ProductDescription>
					</div>
					<ProductPrice>{product.price}€</ProductPrice>
				</ProductInformations>
			</Product>,
		);
	}
	return list;
};

export const createStoreSectionsList = (sections: any[]) => {
	const list: any = [];
	for (const [index, section] of sections.entries()) {
		list.push(
			<Section key={index}>
				<SectionTitle>{section.name}</SectionTitle>
				<ProductList>
					{createSectionProductsList(section.products.concat(section.meals))}
				</ProductList>
			</Section>,
		);
	}

	return list;
};

export {StoreSectionsList};
