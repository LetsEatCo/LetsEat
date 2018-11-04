import styled from 'styled-components';
import {Box} from 'rebass';

const AddressBar = styled(Box)<any>`
	position: sticky;
	top: 72px;
	width: 100vw;
	height: 70px;
	background-color: #fff;
	border-bottom: 1px solid rgba(217, 219, 224, 0.5);
	z-index: 300;
`;

export default AddressBar;
