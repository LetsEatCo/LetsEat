import Router from 'next/router';

export const redirectToLogin = async (res, urlToRedirect) => {
	if (res) {
		res.writeHead(302, {Location: urlToRedirect});
		res.end();
	}
	return Router.push(urlToRedirect);
};
