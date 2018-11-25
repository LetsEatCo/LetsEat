export const parseCookieString: any = (string: string) => {
	return string.split(';').reduce((prev, current) => {
		const [name, value] = current.split('=');
		prev[name] = value;
		return prev;
	}, {});
};
