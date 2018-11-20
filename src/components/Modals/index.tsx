/* tslint:disable */
import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

interface Props extends ReactModal.Props {
	className?: string;
}

const ReactModalAdapter: React.SFC<Props> = ({className, ...props}) => {
	const contentClassName = `${className}__content`;
	const bodyClassName = `${className}__body`;
	const overlayClassName = `${className}__overlay`;
	return (
		<ReactModal
			portalClassName={className}
			className={contentClassName}
			overlayClassName={overlayClassName}
			bodyOpenClassName={bodyClassName}
			{...props}
		/>
	);
};

export const StyledModal = styled(ReactModalAdapter)`
	&__overlay {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.75);
		&.ReactModal__Overlay--after-open {
		}
		&.ReactModal__Overlay--before-close {
		}
	}

	&__body {
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	&__content {
		&.ReactModal__Content--after-open {
		}
		&.ReactModal__Content--before-close {
		}
	}
`;
