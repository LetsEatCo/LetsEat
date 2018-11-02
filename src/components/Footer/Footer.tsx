import styled from 'styled-components';
import {Box} from 'rebass';
import React from 'react';
import {theme} from '@/utils/ui/theme';
import {fontScale} from '@/utils/ui';

const StyledFooter: any = styled.footer`
	width: 100%;
	color: ${theme.colors.White};
	background-color: ${theme.colors.Black};
`;

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	margin: 0 auto;
`;

const Top = styled(Box)`
	padding-top: 72px;
	padding-bottom: 56px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	color: rgba(255, 255, 255, 0.9);
`;

const Bottom = styled(Box)`
	display: flex;
	flex-flow: row wrap;
	padding-top: 96px;
	padding-bottom: 163px;
`;

const Image = styled.img`
	width: 140px;
`;

const H3 = styled.h3`
	font-weight: 400;
	font-size: ${fontScale(0.5)};
`;

const Paragraph = styled.p`
	font-weight: 400;
	color: rgba(255, 255, 255, 0.4);
	font-size: ${fontScale(-1.5)};
`;

StyledFooter.Container = Container;

StyledFooter.Top = Top;
StyledFooter.Top.Paragraph = Paragraph;
StyledFooter.Top.H3 = H3;

StyledFooter.Bottom = Bottom;
StyledFooter.Bottom.Image = Image;

export class Footer extends React.PureComponent {
	render() {
		return (
			<StyledFooter>
				<StyledFooter.Container>
					<StyledFooter.Top>
						<StyledFooter.Top.H3>
							Let't Eat is the largest, most reliable on-demand delivery and pickup platform.
						</StyledFooter.Top.H3>
						<StyledFooter.Top.Paragraph>
							Able to deliver anything from anywhere, Let't Eat is the food delivery, grocery
							delivery, whatever-you-can-think-of delivery service to bring what you crave right to
							your door. We’re the largest in the Universe with more than 25,000+ partner merchants,
							many of them exclusive, and we’re adding more every day. Every customer enjoys a
							curated and tailored experience, showcasing the very best of their city. Just enter
							your address, find something you like, and add it to your cart. Once you place your
							order we’ll forward your payment to the store and you can watch us zigzag through the
							city streets to bring your package to you
						</StyledFooter.Top.Paragraph>
					</StyledFooter.Top>
					<StyledFooter.Bottom>
						<StyledFooter.Bottom.Image
							src={'https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/Logo--White--no-fork.svg'}
						/>
					</StyledFooter.Bottom>
				</StyledFooter.Container>
			</StyledFooter>
		);
	}
}
