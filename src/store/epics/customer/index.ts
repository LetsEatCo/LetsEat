import {
	fetchCustomerProfileEpic,
	loginCustomerEpic,
	registerCustomerEpic,
} from '@/store/epics/customer/auth';

export const CustomerEpics = [loginCustomerEpic, fetchCustomerProfileEpic, registerCustomerEpic];
