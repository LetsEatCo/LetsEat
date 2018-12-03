import React from 'react';
import StoreLayout from '@/layouts/Store';
import {theme} from '@/utils/ui/theme';
import {http} from '@/services/http.service';
import {Container} from '@/components/Common/Container';
import {StoreBanner} from '@/components/Store/blocks/StoreBanner';
import {StoreInformations} from '@/components/Store/blocks/StoreInformations';
import {connect} from 'react-redux';
import {default as NextLink} from 'next/link';
import {createStoreSectionsList} from '@/components/Lists/StoreSectionsList';
import {StoreSectionsList} from '@/components/Lists/blocks/StoreSectionsList';
import {StoreBar} from '@/components/Store/StoreBar';
import Router from 'next/router';

interface StorePageProps {
	store: any;
	storeData: any;
	cuisineSlug: string;
	itemsCount: number;
	hasItems: boolean;
	cart: any;
	cartBelongsToStore: boolean;
}

interface StorePageState {
	showCart: boolean;
}

type Props = Readonly<Partial<StorePageProps>>;

type State = Readonly<Partial<StorePageState>>;

const mapStateToProps = state => {
	return {
		itemsCount: state.customer.cart ? state.customer.cart.itemsCount : 0,
		hasItems: state.customer.cart ? state.customer.cart.itemsCount > 0 : false,
	};
};

const CuisineLink = ({href, text}) => (
	<NextLink href={href} passHref={true}>
		<StoreInformations.Details.Cuisine>{text}</StoreInformations.Details.Cuisine>
	</NextLink>
);

class StorePage extends React.Component<Props, State> {
	constructor(props) {
		super(props);
	}

	static async getInitialProps({
		query,
		req,
	}): Promise<{storeData: any; cuisineSlug: string; cart: any; cartBelongsToStore: boolean}> {
		const store = await http()
			.get('/stores/', {params: {slug: query.slug}})
			.toPromise();
		return http(req)
			.get('/customers/me')
			.toPromise()
			.then(res => {
				return {
					storeData: store.data,
					cuisineSlug: store.data.cuisines[0] || '',
					cart: res ? res.data.cart : {},
					cartBelongsToStore: res.data.cart ? res.data.cart.store.uuid === store.data.uuid : false,
				};
			})
			.catch(() => {
				return {
					storeData: store.data,
					cuisineSlug: store.data.cuisines[0] || '',
					cart: {},
					cartBelongsToStore: false,
				};
			});
	}

	componentDidMount() {
		Router.beforePopState(({as}) => {
			window.location.href = as;
			return false;
		});
	}

	render() {
		return (
			<StoreLayout headerBackgroundColor={theme.colors.White}>
				<div>
					<StoreBanner backgroundImage={`url(${this.props.storeData.imageUrl})`} />
				</div>
				<StoreBar
					belongsToStore={this.props.cartBelongsToStore}
					hasItems={this.props.hasItems}
					itemsCount={
						this.props.hasItems && this.props.cartBelongsToStore ? this.props.itemsCount : 0
					}
					cart={this.props.cart}
					storeSlug={this.props.storeData.slug}
				/>
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

export default connect(mapStateToProps)(StorePage);
