import React from 'react';
import styled from 'styled-components';
import {Card, Flex, Text} from 'rebass';
import {theme} from '@/utils/ui/theme';
import {fontScale} from '@/utils/ui';
import {default as NextLink} from 'next/link';

const StoreList = styled(Flex)`
	width: 100%;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 0 64px;
`;

const Store = styled(Flex)`
	flex: 0 1 calc(33.33333333333333% - 24px);
	flex-direction: column;
	margin-top: 36px;
`;

const StoreLink = styled.a`
	justify-content: center;
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;

const StoreCardImage = styled(Card)`
	justify-content: center;
	display: flex;
	height: 240px;
	width: 100%;
	background-color: #f6f6f6;
	box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
`;

const StoreDescriptionName = styled(Text)`
	width: 100%;
	text-decoration: none;
	color: ${theme.colors.Text};
	font-size: ${fontScale(0)};
	font-weight: 600;
	margin: 0 0 4px;
`;

const StoreDescription = styled.div`
	padding-top: 16px;
`;

export {StoreList};

export const createStoreList = (stores: any[]) => {
	const list: any = [];

	for (const [index, store] of stores.entries()) {
		list.push(
			<Store key={index}>
				<NextLink href={`/store/${store.slug}`} passHref={true}>
					<StoreLink>
						<StoreCardImage />
						<StoreDescription>
							<StoreDescriptionName as={'h3'}>{store.name}</StoreDescriptionName>
						</StoreDescription>
					</StoreLink>
				</NextLink>
			</Store>,
		);
	}

	return list;
};
