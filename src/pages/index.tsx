import * as React from 'react';
import {Box, Flex, Heading, Text, Button} from 'rebass';

export default class Index extends React.Component {
	render() {
		return (
			<Text fontFamily="system-ui,sans-serif">
				<Box px={3} py={5} color="white" bg="blue">
					<Heading as="h1" fontSize={[4, 5, 6]}>
						Hello, Next.js
					</Heading>
				</Box>
				<Flex px={3} py={4} alignItems="center">
					<Heading color="blue">Hello</Heading>
					<Box mx="auto" />
					<Button>Hey</Button>
				</Flex>
			</Text>
		);
	}
}
