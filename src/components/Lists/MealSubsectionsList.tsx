import React from 'react';
import styled from 'styled-components';
import {Flex, Text} from 'rebass';
import {fontScale} from '@/utils/ui';
import {AddProductToCartForm as Form} from '@/components/Forms/blocks/AddProductToCartForm';
import update from 'immutability-helper';
import {isArrayEmpty} from '@/utils';

const Subsection = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 28px;
`;

const SubsectionName: any = styled(Text)`
	text-transform: uppercase;
	font-weight: 500;
	font-size: ${fontScale(-1)};
	letter-spacing: 1px;
	color: ${props => props.theme.colors.Text};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${props => props.theme.colors.LightOutline};
`;

const SubsectionOptions = styled.ul`
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding-inline-start: 0;
`;

const SubsectionOption = styled(Flex)`
	padding: 8px 0;
	align-items: flex-start;
`;

const SubsectionOptionName = styled.label`
	flex: 1;
	color: ${props => props.theme.colors.Text};
`;

const SubsectionOptionPrice: any = styled(Text)`
	margin-left: auto;
	color: ${props => props.theme.colors.LightText};
	font-size: ${fontScale(-1)};
	font-weight: 500;
`;

export const createSubsectionsOptionsProductsList = (
	{options}: any,
	handleChange: any,
	{disabled, selected}: any,
) =>
	options.products.map((option, index) => (
		<SubsectionOption as={'li'} key={index}>
			<Form.CheckboxField
				name={`${option.uuid}`}
				type="checkbox"
				id={`${option.uuid}`}
				component="input"
				onClick={handleChange}
				disabled={disabled && !selected.includes(option.uuid)}
			/>
			<SubsectionOptionName htmlFor={`${option.uuid}`}>{option.product.name}</SubsectionOptionName>
			{option.price !== '0.00' && <SubsectionOptionPrice>+{option.price}€</SubsectionOptionPrice>}
		</SubsectionOption>
	));

export const createSubsectionsOptionsIngredientsList = (
	{options}: any,
	handleChange: any,
	{disabled, selected}: any,
) =>
	options.ingredients.map((option, index) => (
		<SubsectionOption as={'li'} key={index}>
			<Form.CheckboxField
				name={`${option.uuid}`}
				type="checkbox"
				id={`${option.uuid}`}
				component="input"
				onClick={handleChange}
				disabled={disabled && !selected.includes(option.uuid)}
			/>
			<SubsectionOptionName as={'label'} htmlFor={`${option.uuid}`}>
				{option.ingredient.name}
			</SubsectionOptionName>
			{option.price !== '0.00' && <SubsectionOptionPrice>+{option.price}€</SubsectionOptionPrice>}
		</SubsectionOption>
	));

class MealSubsection extends React.Component<any, any> {
	constructor(props) {
		super(props);

		this.state = {
			selected: [],
			disabled: false,
			minSelectionsPermitted: this.props.subsection.minSelectionsPermitted,
			maxSelectionsPermitted: this.props.subsection.maxSelectionsPermitted,
			isRequired: this.props.subsection.isRequired,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = event => {
		if (event.target.checked === true) {
			this.setState(
				{
					selected: update(this.state.selected, {$push: [event.target.id]}),
				},
				() => {
					if (this.state.selected.length >= this.state.maxSelectionsPermitted) {
						this.setState({disabled: true});
					}
				},
			);
		} else {
			this.setState(
				{
					selected: this.state.selected.filter(id => id !== event.target.id),
				},
				() => {
					if (this.state.selected.length <= this.state.maxSelectionsPermitted) {
						this.setState({disabled: false});
					}
				},
			);
		}
	};

	render() {
		return (
			<Subsection>
				<SubsectionName>
					{this.props.subsection.name} (Up to {this.props.subsection.maxSelectionsPermitted})
				</SubsectionName>
				<SubsectionOptions>
					{this.props.subsection && !isArrayEmpty(this.props.subsection.products) &&
						createSubsectionsOptionsProductsList(
						this.props.subsection,
						this.handleChange,
						this.state,
					)}
					{this.props.subsection && !isArrayEmpty(this.props.subsection.products) &&
						createSubsectionsOptionsIngredientsList(
							this.props.subsection,
							this.handleChange,
							this.state,
						)}
				</SubsectionOptions>
			</Subsection>
		);
	}
}

export const createMealSubsectionsList = (subsections: any[]) =>
	subsections.map((subsection, index) => <MealSubsection key={index} subsection={subsection} />);
