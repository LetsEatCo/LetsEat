import styled from 'styled-components';
import {fontScale} from '@/utils/ui';
import {theme} from '@/utils/ui/theme';

export const SectionTitle = styled.h3`
	font-size: ${fontScale(3)};
	color: ${theme.colors.Text};
	letter-spacing: -0.88px;
	font-weight: 600;
	line-height: normal;
	padding-top: 32px;
	padding-bottom: 16px;
	margin: 0;
	border-bottom: 1px solid ${theme.colors.LightOutline};
`;
