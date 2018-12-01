import styled from 'styled-components';
import {Box, Flex, Text} from 'rebass';
import {BlackLogo} from '@/components/Logo';

const applyBorderBottom = borderBottom => `border-bottom: ${borderBottom}`;
const Hero: any = styled(Box)<any>`
	margin: 0 auto;
	height: ${props => props.height || '540px'};
	${({borderBottom}) => applyBorderBottom(borderBottom)}
`;

const Title = styled(Text)<any>`
	max-width: ${props => props.maxWidth || '480px'};
`;

const Paragraph = styled(Text)<any>`
	position: ${props => props.position || 'relative'};
	margin: 0;
`;

const Logo = styled(BlackLogo)`
	max-width: 160px;
	display: flex;
	margin: 0 auto;
	max-height: 90px;
`;

const Container = styled(Flex)`
	height: 100%;
	max-width: 1024px;
	margin: 0 auto;
	position: relative;
`;

Hero.Container = Container;
Hero.Logo = Logo;
Hero.Title = Title;
Hero.Paragraph = Paragraph;

export default Hero;
