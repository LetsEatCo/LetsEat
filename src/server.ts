import {createServer} from 'http';
import {parse} from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev, dir: './src'});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url as string, true);
		const {pathname, query} = parsedUrl;

		if (pathname === '/a') {
			app.render(req, res, '/b', query);
		} else if (pathname === '/b') {
			app.render(req, res, '/a', query);
		} else {
			handle(req, res, parsedUrl);
		}
	}).listen(3000, err => {
		if (err) {
			throw err;
		}
		console.log('> Ready on http://localhost:3000');
	});
});
