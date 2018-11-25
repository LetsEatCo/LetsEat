import styled from 'styled-components';

export const Store = styled.div`
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 25px;
	border-bottom: 1px solid rgb(236, 237, 239);
`;

export const StoreLink = styled.a`
	text-decoration: none;
	color: ${props => props.theme.colors.Cta};
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 0.7px;
	font-weight: 600;
	align-items: center;
	display: flex;
`;
