import * as React from 'react';
import {Box, Text} from 'rebass';
import HomeLayout from '@/layouts/Home/HomeLayout';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {fontScale} from '@/utils/ui';
import {BlackLogo} from '@/components/Logo';

interface IndexProps extends React.ClassAttributes<any> {
	store?: any;
	as?: any;
}

const Hero: any = styled(Box)`
	margin: 0 auto;
	height: 540px;
	background-color: ${props => props.theme.colors.HeaderOrange};
`;

const HeroTitle: any = styled(Text)`
	margin: 0 auto;
	max-width: 480px;
	text-align: center;
`;

const HeroLogo: any = styled(BlackLogo)`
	max-width: 160px;
	display: flex;
	margin: 0 auto;
	max-height: 90px;
`;

const Container = styled(Box)`
	max-width: 1024px;
	margin: 0 auto;
`;

Hero.Container = Container;

class Index extends React.Component<IndexProps> {
	static getInitialProps({store}) {
		return store;
	}

	render() {
		return (
			<HomeLayout>
				<Hero>
					<Hero.Container>
						<HeroLogo />
						<HeroTitle
							as={'h1'}
							fontSize={[fontScale(6.5)]}
							fontWeight={'600'}
							color={'Black'}
							py={20}
						>
							Anything, anytime, anywhere
						</HeroTitle>
						<Text
							fontSize={[fontScale(1)]}
							fontWeight={'400'}
							textAlign={'center'}
							color={'Black'}
							py={20}
						>
							Your favorite stores available for delivery or pickup.
						</Text>
					</Hero.Container>
				</Hero>
			</HomeLayout>
		);
	}
}

export default connect()(Index);
