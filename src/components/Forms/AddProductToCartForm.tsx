import {Box} from 'rebass';
import * as React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {AddProductToCartForm as Form} from '@/components/Forms/blocks/AddProductToCartForm/index';
import {createMealSubsectionsList} from '@/components/Lists/MealSubsectionsList';

interface AddProductToCartFormProps {
	handleClose?: any;
	handleSubmit?: any;
	error?: any;
	data?: any;
	quantity?: number;
}

type Props = AddProductToCartFormProps & InjectedFormProps<AddProductToCartFormProps>;

class InputNumber extends React.Component<any, any> {
	decrease = () => {
		if (this.props.input.value !== 1) {
			return this.props.input.onChange((this.props.input.value as number) - 1);
		}
	};

	increase = () => this.props.input.onChange((this.props.input.value as number) + 1);

	render() {
		return (
			<Form.InputNumber>
				<Form.InputNumberIncreaseOrDecrease onClick={this.decrease}>
					-
				</Form.InputNumberIncreaseOrDecrease>
				<span>{this.props.input.value}</span>
				<Form.InputNumberIncreaseOrDecrease onClick={this.increase}>
					+
				</Form.InputNumberIncreaseOrDecrease>
			</Form.InputNumber>
		);
	}
}

class AddProductToCartFormComponent extends React.Component<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Box mr={4}>
				<Form.Wrapper hasImage={!!this.props.data.imageUrl}>
					{!!this.props.data.imageUrl && (
						<Form.Image backgroundImage={`url(${this.props.data.imageUrl})`} />
					)}
					<Form as={'form'} onSubmit={this.props.handleSubmit}>
						<Form.Upper>
							<Form.Header>
								<Box width={'100%' as any}>
									<Form.Header.ProductName>{this.props.data.name}</Form.Header.ProductName>
									<Form.Header.ProductDescription>
										{this.props.data.description}
									</Form.Header.ProductDescription>
								</Box>
								<Form.CloseButton onClick={this.props.handleClose} />
							</Form.Header>
							<Form.Body>
								<Box style={{minHeight: '524px'}}>
									{this.props.data.subsections &&
										createMealSubsectionsList(this.props.data.subsections)}
								</Box>
							</Form.Body>
						</Form.Upper>
						<Form.Footer>
							<Form.CheckboxField
								name="quantity"
								type="number"
								id="quantity"
								component={InputNumber}
							/>
							<Form.SubmitButton type="submit">
								<span>Add to cart</span>
							</Form.SubmitButton>
						</Form.Footer>
					</Form>
				</Form.Wrapper>
			</Box>
		);
	}
}

export const AddProductToCartForm: any = reduxForm({
	form: 'addProductToCartForm',
	initialValues: {
		quantity: 1,
	},
})(AddProductToCartFormComponent);
