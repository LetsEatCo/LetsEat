import {Flex, Text} from 'rebass';
import * as React from 'react';
import {Colors, fontScale} from '@/utils/ui';
import {InjectedFormProps, reduxForm} from 'redux-form';
import DeliveryForm from '@/components/Forms/blocks/Checkout/DeliveryForm';
import {
	CheckoutForm,
	CheckoutFormHeader,
	CheckoutFormSection,
} from '@/components/Forms/blocks/Checkout/Common/CheckoutForm';
import {Button} from '@/components/Common/Button';

interface CheckoutDeliveryFormProps {
	handleSubmit?: any;
	error?: any;
	display: boolean;
}

type Props = InjectedFormProps<CheckoutDeliveryFormProps> & CheckoutDeliveryFormProps;

export default reduxForm({
	form: 'CheckoutDeliveryForm',
})(
	class extends React.Component<Props> {
		constructor(props) {
			super(props);
			this.state = {
				address: false,
			};
		}
		formElementChange = e => {
			this.setState({[e.target.id]: !!e.target.value});
		};

		isFormComplete = () => this.state.address;

		render() {
			return (
				<CheckoutFormSection display={this.props.display}>
					<CheckoutFormHeader>Delivery Address</CheckoutFormHeader>
					<CheckoutForm>
						<Flex flexDirection={'column'} as={'form'} onSubmit={this.props.handleSubmit}>
							<DeliveryForm.Field
								component="input"
								name="address"
								placeholder="Address"
								required={true}
								id={'address'}
								onChange={this.formElementChange}
							/>
							<DeliveryForm.TextArea
								component="textarea"
								name="deliveryNote"
								placeholder="Add delivery instructions. (e.g. “Use the call box when you arrive.”)"
								required={false}
								id={'deliveryNote'}
							/>
							{this.props.error && (
								<Text fontSize={fontScale(-2)} color={Colors.cadmiumRed} mt={3}>
									{this.props.error}
								</Text>
							)}
							<Button
								modifiers={this.isFormComplete() ? ['green', 'large'] : ['disabled', 'large']}
								disabled={!this.isFormComplete()}
								width={'120px'}
								height={'42px'}
							>
								Save
							</Button>
						</Flex>
					</CheckoutForm>
				</CheckoutFormSection>
			);
		}
	},
);
