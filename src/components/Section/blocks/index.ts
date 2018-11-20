import styled from 'styled-components';
import {SectionTitle} from '@/components/Section/blocks/Title';

const Section: any = styled.div`
	padding-top: 32px;
	display: flex;
	flex-direction: column;
`;

Section.Title = SectionTitle;

export {Section};
