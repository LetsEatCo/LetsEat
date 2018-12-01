import styled from 'styled-components';
import {Box, Card, Text} from 'rebass';
import {Field} from '@/components/Forms/blocks/Common/Field';
import {CheckboxField} from '@/components/Forms/blocks/Common/CheckboxField';
import {Header} from '@/components/Forms/blocks/Common/Header';
import {CloseButton} from './CloseButton';
import {SubmitButton} from '@/components/Forms/blocks/Common/SubmitButton';
import {Body} from '@/components/Forms/blocks/Common/Body';
import React from 'react';
import {fontScale} from '@/utils/ui';
import {Footer} from '@/components/Forms/blocks/AddProductToCartForm/Footer';
import {Upper} from '@/components/Forms/blocks/AddProductToCartForm/Upper';
import {
	InputNumber,
	InputNumberIncreaseOrDecrease,
} from '@/components/Forms/blocks/AddProductToCartForm/InputNumber';

const AddProductToCartWrapper: any = styled(Box)<any>`
	max-height: 640px;
	display: flex;
	max-width: ${({hasImage}) => (hasImage ? '1060px' : '525px')};
	position: fixed;
	visibility: visible;
	top: 50%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	box-shadow: rgba(34, 34, 34, 0.15) 0 2px 20px 0;
`;

const AddProductToCartForm: any = styled(Box)`
	max-width: 525px;
	width: 525px;
	display: inline-flex;
	flex-direction: column;
`;

const AddProductToCartFormImage: any = styled(Card)`
	width: 600px;
	height: 640px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

AddProductToCartForm.Header = props => (
	<Header
		modifiers={['justifyContentFlexStart']}
		children={props.children}
		width={'100%'}
		mb={28}
	/>
);
AddProductToCartForm.Header.ProductName = props => (
	<Text fontSize={fontScale(2)} color={'Text'} children={props.children} mb={20} />
);

AddProductToCartForm.Header.ProductDescription = props => (
	<Text fontSize={fontScale(0)} color={'LightText'} fontWeight={'400'} children={props.children} />
);
AddProductToCartForm.Upper = Upper;
AddProductToCartForm.Body = props => (
	<Body as={'div'} modifiers={['noPaddingTopBottom']} children={props.children} />
);

AddProductToCartForm.Field = Field;
AddProductToCartForm.CheckboxField = CheckboxField;
AddProductToCartForm.SubmitButton = props => (
	<SubmitButton modifiers={['addToCartButton']} fontWeight={'400'} children={props.children} />
);
AddProductToCartForm.Footer = Footer;
AddProductToCartForm.InputNumber = InputNumber;

AddProductToCartForm.InputNumberIncreaseOrDecrease = InputNumberIncreaseOrDecrease;

AddProductToCartForm.CloseButton = CloseButton;
AddProductToCartForm.Wrapper = AddProductToCartWrapper;
AddProductToCartForm.Image = AddProductToCartFormImage;

export {AddProductToCartForm};
