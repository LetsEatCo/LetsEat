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
	border-bottom: 1px solid rgba(217, 219, 224, 0.5);
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
`;

export const Product = styled(Flex)`
	width: calc(50% - 17.5px);
	height: 128px;
	margin: 16px 0;
	padding: 0;
	border: 1px solid rgba(217, 219, 224, 0.5);
	border-image: initial;
`;

export const ProductInformations = styled(Flex)`
	display: flex;
	flex-direction: column;
	min-width: 0;
	flex: 1 1 0;
	justify-content: space-between;
	padding: 20px 20px 15px;
`;

export {StoreSectionsList};

export const createStoreSectionsList = (sections: any[]) => {
	const list: any = [];
	for (const [index, section] of sections.entries()) {
		console.log(sections);
		list.push(
			<Section key={index}>
				<SectionTitle>{section.name}</SectionTitle>
			</Section>,
		);
	}

	return list;
};
