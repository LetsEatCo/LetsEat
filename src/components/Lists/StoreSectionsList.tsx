import React from 'react';
import {Section} from '@/components/Section/blocks';
import {ProductModal} from '@/components/Modals/ProductModal';
import {ProductsList} from '@/components/Lists/blocks/ProductsList';

const createSectionProductsList = (products: any[], meals: any[]) =>
	products.map((product, index) => (
		<ProductModal key={index} product={product} uuidKey={'productUuid'} />
	)) &&
	meals.map((meal, index) => <ProductModal key={index} product={meal} uuidKey={'mealUuid'} />);

export const createStoreSectionsList = (sections: any[]) =>
	sections.map((section, index) => (
		<Section key={index}>
			<Section.Title>{section.name}</Section.Title>
			<ProductsList>{createSectionProductsList(section.products, section.meals)}</ProductsList>
		</Section>
	));
