import React from 'react';
import {connect} from 'react-redux';
import {fontScale} from '@/utils/ui';
import FeedLayout from '@/layouts/Feed';
import Hero from '@/components/Hero';
import AddressBar from '@/components/AddressBar/block';
import rootEpic from '@/store/epics';
import {of} from 'rxjs';
import {FETCH_STORES} from '@/store/constants';
import {createStoreList, StoreList} from '@/components/Lists/FeedStoreList';
import {Container} from '@/components/Common/Container';

interface FeedPageProps extends React.ClassAttributes<any> {
	stores?: any;
}

class FeedPage extends React.Component<FeedPageProps> {
	static async getInitialProps({store}) {
		const resultAction = await rootEpic(of({type: FETCH_STORES})).toPromise();
		store.dispatch(resultAction);
		const res = await resultAction;
		return {stores: res.payload.data};
	}

	render() {
		return (
			<FeedLayout>
				<Hero bg={'HeaderPink'} height={'308px'}>
					<Hero.Container alignItems={'center'}>
						<Hero.Title
							as={'h1'}
							fontSize={[fontScale(7)]}
							fontWeight={'600'}
							color={'Black'}
							px={20}
							maxWidth={'100%'}
							textAlign={'left'}
							m={'0 0 0 0'}
						>
							<Hero.Paragraph>Find your favorite stores,</Hero.Paragraph>
							<Hero.Paragraph>near to you.</Hero.Paragraph>
						</Hero.Title>
					</Hero.Container>
				</Hero>
				<AddressBar />
				<Container>
					<StoreList>{createStoreList(this.props.stores)}</StoreList>
				</Container>
			</FeedLayout>
		);
	}
}

export default connect()(FeedPage);
