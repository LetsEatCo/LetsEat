import styled from 'styled-components';
import {Box} from 'rebass';

const Header: any = styled(Box)`
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
	z-index: 400;
	padding: 0 20px;
`;

const Container = styled(Box)`
	display: flex;
	max-width: 1024px;
	max-height: 72px;
	margin: 0 auto;
	width: 100%;
`;

const Left = styled(Box)`
	display: flex;
	flex-grow: 1;
	align-items: center;
	width: auto;
	justify-content: flex-start;
`;

const Right = styled(Box)`
	display: flex;
	flex: auto;
	align-items: center;
	width: auto;
	justify-content: flex-end;
`;

const Link = styled.a`
	display: inline-flex;
	height: 100%;
	align-items: center;
	width: auto;
`;

Header.Container = Container;
Header.Left = Left;
Header.Right = Right;
Header.Link = Link;

export default Header;
