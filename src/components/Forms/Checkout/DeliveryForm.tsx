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
		}

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
							/>
							<DeliveryForm.TextArea
								component="textarea"
								name="deliveryNote"
								placeholder="Add delivery instructions. (e.g. “Use the call box when you arrive.”)"
								required={false}
							/>
							{this.props.error && (
								<Text fontSize={fontScale(-2)} color={Colors.cadmiumRed} mt={3}>
									{this.props.error}
								</Text>
							)}
							<Button modifiers={['green', 'large']} width={'120px'} height={'42px'}>
								Save
							</Button>
						</Flex>
					</CheckoutForm>
				</CheckoutFormSection>
			);
		}
	},
);
