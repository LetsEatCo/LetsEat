import * as React from 'react';
import {Text} from 'rebass';
import HomeLayout from '@/layouts/Home';
import {connect} from 'react-redux';
import {fontScale} from '@/utils/ui';
import {theme} from '@/utils/ui/theme';
import Hero from '@/components/Hero';

class HomePage extends React.Component {
	render() {
		return (
			<HomeLayout headerBackgroundColor={theme.colors.HeaderOrange}>
				<Hero bg={'HeaderOrange'} height={'540px'}>
					<Hero.Container flexDirection={'column'}>
						<Hero.Logo />
						<Hero.Title
							as={'h1'}
							fontSize={[fontScale(6.5)]}
							fontWeight={'600'}
							color={'Black'}
							py={20}
							m={'0 auto'}
						>
							Anything, anytime, anywhere
						</Hero.Title>
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

export default connect()(HomePage);
