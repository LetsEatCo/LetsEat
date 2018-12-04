import styled from 'styled-components';
import {Box} from 'rebass';
import {fontScale} from '@/utils/ui';

const StoreInformations: any = styled(Box)<any>`
	padding-top: 42px;
	padding-bottom: 54px;
	flex-direction: row;
	align-items: center;
	top: 0;
	width: 100%;
	border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;

const Name = styled.h1`
	letter-spacing: -2px;
	font-size: ${fontScale(5)};
	color: ${props => props.theme.colors.Text};
`;

const Details = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Cuisine = styled.p`
	display: flex;
	justify-content: flex-end;
	text-transform: uppercase;
	text-decoration: none;
	padding: 4px 16px;
	letter-spacing: 1px;
	color: ${props => props.theme.colors.labelTextPink};
	background-color: ${props => props.theme.colors.labelBackgroundPink};
	font-size: ${fontScale(-2)};
`;

StoreInformations.Name = Name;
StoreInformations.Details = Details;
StoreInformations.Details.Cuisine = Cuisine;

export {StoreInformations};
