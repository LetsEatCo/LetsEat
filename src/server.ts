import Koa from 'koa';
import Router from 'koa-router';
import {default as Next} from 'next';
import {env} from '@/utils';
import dotenv from 'dotenv';
import config from 'config';
import universalCookie from 'universal-cookie-koa';
import helmet from 'koa-helmet';

dotenv.config();

const dev = env('NODE_ENV') !== 'production';
const quiet = env('NODE_ENV') === 'production';
const app = Next({dev, dir: './src', quiet});
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = new Koa();
		const router = new Router();

		server.use(universalCookie());
		server.use(helmet());

		router.get('/store/:slug', async ctx => {
			await app.render(ctx.req, ctx.res, '/store', ctx.params);
			ctx.respond = false;
		});

		router.get('/store/:slug/checkout', async ctx => {
			await app.render(ctx.req, ctx.res, '/store/checkout', ctx.params);
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
		server.listen(config.get('app.port'), () => {
			console.log(`> Ready on port :${config.get('app.port')}`);
		});
	})
	.catch((err: Error) => {
		console.log(err);
	});
