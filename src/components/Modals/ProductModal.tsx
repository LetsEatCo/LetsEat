import {bindActionCreators} from 'redux';
import {addItemToCartAction} from '@/store/actions/cart.actions';
import {connect} from 'react-redux';
import React from 'react';
import {SubmissionError} from 'redux-form';
import {StyledModal} from '@/components/Modals/index';
import {AddProductToCartForm} from '@/components/Forms/AddProductToCartForm';
import {ProductModal as Product} from '@/components/Modals/blocks/ProductModal';
import {displayLoginFormAction} from '@/store/actions/ui.actions';

interface State {
	showModal: boolean;
}

const getParent = () => document.querySelector('body') as HTMLElement;

const mapDispatchToProps = dispatch => ({
	addProductToCartAction: bindActionCreators(addItemToCartAction, dispatch),
	displayLoginFormAction: bindActionCreators(displayLoginFormAction, dispatch),
});

export const ProductModal = connect(
	null,
	mapDispatchToProps,
)(
	class extends React.Component<any, State> {
		constructor(props) {
			super(props);
			this.handleOpenModal = this.handleOpenModal.bind(this);
			this.handleCloseModal = this.handleCloseModal.bind(this);
			this.handleAddProductToCartFormSubmit = this.handleAddProductToCartFormSubmit.bind(this);
		}

		state = {
			showModal: false,
		};

		handleOpenModal = () => this.setState({showModal: true});

		handleCloseModal = () => this.setState({showModal: false});

		handleAddProductToCartFormSubmit = async values => {
			const optionUuids: any[] = Object.entries(values).reduce(
				(acc, [key, val]) => {
					if (val === true) {
						acc.push(key);
					}
					return acc;
				},
				[] as string[],
			);
			const data = {
				[this.props.uuidKey]: this.props.product.uuid,
				quantity: values.quantity,
				optionUuids,
			};
			try {
				return new Promise((resolve, reject) => {
					return this.props.addProductToCartAction(data, resolve, reject);
				})
					.then(() => this.handleCloseModal())
					.catch(() => {
						this.handleCloseModal();
						this.props.displayLoginFormAction(true);
					});
			} catch {
				this.handleCloseModal();
				this.props.displayLoginFormAction(true);
				throw new SubmissionError({
					_error: 'Error',
				});
			}
		};

		componentWillUnmount() {
			this.props.displayLoginFormAction(false);
		}

		render() {
			return (
				<>
					<Product onClick={this.handleOpenModal}>
						<Product.Informations>
							<div>
								<Product.Name>{this.props.product.name}</Product.Name>
								<Product.Description>{this.props.product.description}</Product.Description>
							</div>
							<Product.Price>{this.props.product.price}€</Product.Price>
						</Product.Informations>
						{this.props.product.imageUrl && (
							<Product.Image backgroundImage={`url(${this.props.product.imageUrl})`} />
						)}
					</Product>
					<StyledModal isOpen={this.state.showModal} ariaHideApp={false} parentSelector={getParent}>
						<AddProductToCartForm
							onSubmit={this.handleAddProductToCartFormSubmit}
							handleClose={this.handleCloseModal}
							data={this.props.product}
						/>
					</StyledModal>
				</>
			);
		}
	},
);
