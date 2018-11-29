import styled from 'styled-components';
import {Box} from 'rebass';
import {CheckoutField, CheckoutTextArea} from '@/components/Forms/blocks/Common/Field';

const DeliveryForm: any = styled(Box)``;

DeliveryForm.Field = CheckoutField;
DeliveryForm.TextArea = CheckoutTextArea;

export default DeliveryForm;
