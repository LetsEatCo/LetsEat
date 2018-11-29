import Cookies from 'universal-cookie';

export const isCustomerLoggedIn = (req?) => {
	if (req && req.headers) {
		const cookies = new Cookies(req.headers.cookie);
		return !!cookies.get('JWT');
	}
	return !!new Cookies().get('JWT');
};
