import React from 'react';
import ProfileModal from '@/components/Modals/blocks/ProfileModal';
import {default as NextLink} from 'next/link';

export const ProfileModalComponent = React.forwardRef((props, ref) => {
	return (
		<ProfileModal {...props} ref={ref}>
			<ProfileModal.Menu>
				<ProfileModal.MenuItemWrapper>
					<NextLink href={'/orders'} passHref={true}>
						<ProfileModal.MenuItemLink>
							<ProfileModal.MenuItem>
								<ProfileModal.MenuItemText>Order History</ProfileModal.MenuItemText>
							</ProfileModal.MenuItem>
						</ProfileModal.MenuItemLink>
					</NextLink>
				</ProfileModal.MenuItemWrapper>
				<ProfileModal.MenuItemWrapper>
					<NextLink href={'/account'} passHref={true}>
						<ProfileModal.MenuItemLink>
							<ProfileModal.MenuItem>
								<ProfileModal.MenuItemText>Account Settings</ProfileModal.MenuItemText>
							</ProfileModal.MenuItem>
						</ProfileModal.MenuItemLink>
					</NextLink>
				</ProfileModal.MenuItemWrapper>
			</ProfileModal.Menu>
		</ProfileModal>
	);
});
