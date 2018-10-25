import dotenv from 'dotenv';

dotenv.config();

const env: any = process.env.NODE_ENV;

const development = {
	app: {
		port: process.env.DEV_APP_PORT || 9090
	},
	api: {
		baseUrl: process.env.DEV_API_BASE_URL || 'http://localhost'
	}
};

const test = {
	app: {
		port: process.env.TEST_APP_PORT || 9090
	}
};

const config: any = {
	development,
	test
};

export default config[env];
