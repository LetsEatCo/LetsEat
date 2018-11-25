import axios, {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';
import Cookies from 'universal-cookie';

export const http = (req: any = null) => {
	let cookies;
	if (req && req.headers) {
		cookies = new Cookies(req.headers.cookie);
	} else {
		cookies = new Cookies();
	}
	const defaultOptions = {
		baseURL: CONFIG.api.baseUrl,
		headers: {
			Authorization: cookies.get('JWT') ? `Bearer ${cookies.get('JWT')}` : '',
		},
	};
	return {
		get: (url, options = {}): Observable<AxiosResponse> => {
			return Observable.create(async obs =>
				axios
					.get(url, {...defaultOptions, ...options})
					.then(response => {
						obs.next(response.data);
						obs.complete();
					})
					.catch(error => {
						obs.error(error);
					}),
			);
		},
		post: (url, data, options = {}): Observable<AxiosResponse> => {
			return Observable.create(async obs =>
				axios
					.post(url, data, {...defaultOptions, ...options})
					.then(response => {
						obs.next(response.data);
					})
					.catch(error => {
						obs.error(error);
					}),
			);
		},
		patch: (url, data, options = {}): Observable<AxiosResponse> =>
			Observable.create(axios.patch(url, data, {...defaultOptions, ...options})),
		delete: (url, options = {}): Observable<AxiosResponse> =>
			Observable.create(axios.delete(url, {...defaultOptions, ...options})),
	};
};
