import React from 'react';
import StoreLayout from '@/layouts/Store';
import {theme} from '@/utils/ui/theme';
import {http} from '@/services/http.service';
import {Container} from '@/components/Common/Container';
import {StoreBanner} from '@/components/Store/blocks/StoreBanner';
import StoreBar from '@/components/Store/blocks/StoreBar';
import {StoreInformations} from '@/components/Store/blocks/StoreInformations';
import {connect} from 'react-redux';
import {default as NextLink} from 'next/link';
import {createStoreSectionsList, StoreSectionsList} from '@/components/Lists/StoreSectionsList';

interface StorePageProps {
	store: any;
	storeData: any;
	cuisineSlug: string;
}

const CuisineLink = ({href, text}) => (
	<NextLink href={href} passHref={true}>
		<StoreInformations.Details.Cuisine>{text}</StoreInformations.Details.Cuisine>
	</NextLink>
);

class StorePage extends React.Component<Partial<StorePageProps>> {
	static async getInitialProps({query}) {
		const res = await http()
			.get('/stores/', {params: {slug: query.slug}})
			.toPromise();
		return {
			storeData: res.data[0],
			cuisineSlug: res.data[0].cuisines[0] ? res.data[0].cuisines[0].slug : '',
		};
	}

	render() {
		return (
			<StoreLayout headerBackgroundColor={theme.colors.White}>
				<StoreBanner />
				<StoreBar>
					<Container flexDirection={'row'} alignItems={'center'}>
						<StoreBar.CartButton>Items</StoreBar.CartButton>
					</Container>
				</StoreBar>
				<Container flexDirection={'column'}>
					<StoreInformations>
						<StoreInformations.Details>
							{this.props.cuisineSlug && (
								<CuisineLink
									href={`/discover/${this.props.cuisineSlug}`}
									text={this.props.cuisineSlug}
								/>
							)}
						</StoreInformations.Details>
						<StoreInformations.Name>{this.props.storeData.name}</StoreInformations.Name>
					</StoreInformations>
					<StoreSectionsList>
						{createStoreSectionsList(this.props.storeData.sections)}
					</StoreSectionsList>
				</Container>
			</StoreLayout>
		);
	}
}

export default connect()(StorePage);
