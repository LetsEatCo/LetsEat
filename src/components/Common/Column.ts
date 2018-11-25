import styled from 'styled-components';
import {Flex, FlexProps} from 'rebass';
import {StyledRebass} from '@/typings/styled-components';

interface OverrideProps {
	maxWidth?: string;
}
const applyMaxWidth = value => `max-width: ${value}`;
export const Column: StyledRebass<FlexProps & OverrideProps> = styled(Flex)<any>`
	height: 100%;
	margin: 0;
	width: 100%;
	${({maxWidth}) => maxWidth && applyMaxWidth(maxWidth)}
`;
