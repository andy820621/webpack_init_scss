const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	// mode: "production",
	mode: "development",
	entry: { bundle: path.resolve(__dirname, "src/index.js") },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name]_[hash].js",
		assetModuleFilename: "images/[name][ext]",
		clean: true,
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack App",
			// filename: "index.html",
			template: "src/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/main.css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				// test: /\.css$/i,
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jp?g|gif|webp)$/i,
				type: "asset/resource",
			},
			// If you want compatibility with older browsers, please uncomment below.
			// {
			// 	test: /\.m?js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: {
			// 			presets: ["@babel/preset-env"],
			// 		},
			// 	},
			// },
		],
	},
	devServer: {
		port: 3064,
		open: true,
		compress: true,
		static: [
			{
				directory: path.join(__dirname, "dist"),
				publicPath: "/",
			},
		],
	},
};
