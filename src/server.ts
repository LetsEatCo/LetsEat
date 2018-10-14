import Koa from 'koa';
import Router from 'koa-router';
import {default as Next} from 'next';
import {env} from '@/utils';

const dev = env('NODE_ENV') !== 'production';
const app = Next({dev, dir: './src'});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();

	router.get('/a', async ctx => {
		await app.render(ctx.req, ctx.res, '/b', ctx.query);
		ctx.respond = false;
	});

	router.get('/b', async ctx => {
		await app.render(ctx.req, ctx.res, '/a', ctx.query);
		ctx.respond = false;
	});

	router.get('*', async ctx => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.use(async (ctx, next) => {
		ctx.res.statusCode = 200;
		await next();
	});

	server.use(router.routes());
	server.listen(9090, () => {
		console.log(`> Ready on http://localhost:${9090}`);
	});
});
