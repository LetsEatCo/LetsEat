import styled from 'styled-components';
import {Card} from 'rebass';

export const StoreBanner = styled(Card)`
	justify-content: center;
	display: flex;
	height: 280px;
	perspective: 1px;
	overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
	background-color: #f6f6f6;
	box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;
