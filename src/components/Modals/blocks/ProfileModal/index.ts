import styled from 'styled-components';
import {fontScale} from '@/utils/ui';

const ProfileModal: any = styled.div`
	bottom: -13px;
	left: calc((-50% + 24px) + -60px);
	transform: translate(calc((-50% + 24px) + 0px), 100%);
	background-color: rgb(255, 255, 255);
	filter: drop-shadow(rgba(16, 25, 30, 0.08) 0px 1px 4px);
	position: absolute;
	z-index: 1100;
	opacity: 1;
	border: 1px solid rgb(242, 243, 243);
	border-image: initial;
	transition: opacity 100ms ease-in-out 0s;

	&:before {
		margin-left: -9px;
		border-bottom-color: rgb(242, 243, 243) !important;
		border-width: 9px !important;
		position: absolute;
		width: 0px;
		height: 0px;
		content: '';
		bottom: 100%;
		left: calc(50% - -45px);
		border-style: solid;
		border-color: transparent;
		border-image: initial;
	}
`;

const ProfileModalMenu = styled.menu`
	min-width: 215px;
	background-color: rgb(255, 255, 255);
	margin: 0;
	padding: 0;
`;

const ProfileModalMenuItemWrapper = styled.div`
	display: block;
	white-space: nowrap;
	&:not(:last-child) > * > * {
		border-bottom: 1px solid rgba(217, 219, 224, 0.5);
	}
`;

const ProfileModalMenuItemLink = styled.a`
	-webkit-box-align: center;
	align-items: center;
	display: flex;
	background-color: ${({theme}) => theme.colors.White};
	width: 100%;
	cursor: pointer;
	padding: 0px 18px;
	border: initial;
	outline: none;
	margin: 0;
	text-decoration: none;

	&:hover {
		background-color: ${({theme}) => theme.colors.Base};
	}
`;

const ProfileModalMenuItem = styled.div`
	width: 100%;
	text-align: left;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: space-between;
`;

const ProfileModalMenuItemText = styled.span`
	display: inline-block;
	font-size: ${fontScale(0)}
	letter-spacing: -0.28px;
	font-weight: 500;
	line-height: normal;
	color: rgb(45, 49, 56);
	text-align: left;
	padding: 20px 0;
`;

ProfileModal.Menu = ProfileModalMenu;
ProfileModal.MenuItemWrapper = ProfileModalMenuItemWrapper;
ProfileModal.MenuItemLink = ProfileModalMenuItemLink;
ProfileModal.MenuItem = ProfileModalMenuItem;
ProfileModal.MenuItemText = ProfileModalMenuItemText;

export default ProfileModal;
