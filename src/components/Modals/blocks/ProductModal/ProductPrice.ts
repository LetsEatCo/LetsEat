import styled from 'styled-components';
import {theme} from '@/utils/ui/theme';
import {fontScale} from '@/utils/ui';

export const ProductPrice = styled.div`
	letter-spacing: -0.16px;
	font-weight: 500;
	color: ${theme.colors.Cta};
	line-height: 20px;
	font-size: ${fontScale(-1)};
	display: block;
`;
