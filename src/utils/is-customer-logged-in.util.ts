import Cookies from 'universal-cookie';

export const isCustomerLoggedIn = (req?) => {
	return req.universalCookies ? !!req.universalCookies.get('JWT') : !!new Cookies().get('JWT');
};
