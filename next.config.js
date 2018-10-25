const ConfigWebpackPlugin = require("config-webpack");
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = withTypescript(withCSS({
	cssModules: true,
	webpack: (config) => {
		config.module.rules.push(
			{
				resolve: {
					plugins: [
						new TsConfigPathsPlugin(),
					],
				}
			}
		);
		config.plugins.push(
			new ConfigWebpackPlugin()
		);
		return config;
	},
}));
