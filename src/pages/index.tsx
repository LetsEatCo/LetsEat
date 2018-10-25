import * as React from 'react';
import {Box, Heading, Text} from 'rebass';
import HomeLayout from '@/layouts/Home/HomeLayout';
import {connect} from 'react-redux';
import {GreyColors} from '@/utils/ui';
import styled from 'styled-components';

interface IndexProps extends React.ClassAttributes<any> {
	store?: any;
}

const Body = styled(Box)`
	margin: 0 5%;
`;

class Index extends React.Component<IndexProps> {
	static getInitialProps({store}) {
		return store;
	}

	render() {
		return (
			<HomeLayout>
				<Body>
					<Text fontWeight="300">
						<Box px={3} py={5}>
							<Heading as="h1" fontWeight="700" color={GreyColors.nero}>
								Hello, Next.js
							</Heading>
						</Box>
					</Text>
				</Body>
			</HomeLayout>
		);
	}
}

export default connect()(Index);
