# St. Patrick's Sandbox Project Structure

``st-patricks-sandbox/
│── dist/ # Final build output
  │── src/ # Source files │
  ├── index.js # Main JavaScript file │
  ├── styles.scss # Custom SCSS styles │
  ├── index.html # Main HTML file
│── webpack.config.js # Webpack configuration
│── package.json # Project metadata
│── .babelrc # Babel configuration
│── node_modules/ # Installed dependencies (after running npm install)``

## Importing Required Modules

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
-path: A Node.js module that helps resolve file paths.
-MiniCssExtractPlugin: A Webpack plugin that extracts CSS into separate files.

## Module Exports (Webpack Configuration)

``module.exports = {
 entry: "./src/index.js"
 ``

-entry: The main JavaScript file Webpack will use as the starting point.

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,  // Ensures old builds are removed
  },
-output.filename: Webpack compiles all JS files into bundle.js.
-output.path: The final build files go inside the dist/ directory.
-clean: true: Deletes old builds before generating new ones.

## Module Rules (Loaders)

JavaScript Handling
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
-test: /\.js$/: Tells Webpack to process .js files.
-exclude: /node_modules/: Skips node_modules/ for faster builds.
-babel-loader: Converts modern JavaScript to compatible versions.

## SCSS/CSS Handling

``
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },``

-test: /\.scss$/: Targets .scss files.
-MiniCssExtractPlugin.loader: Extracts CSS into a separate file (styles.css).
-css-loader: Allows Webpack to understand CSS files.
-postcss-loader with autoprefixer: Automatically adds CSS vendor prefixes.
-sass-loader: Compiles SCSS into standard CSS.

## Plugins

``
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],``

-MiniCssExtractPlugin: Extracts CSS into a separate file.

## Development Server Configuration

``
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },``

open: true: Automatically opens the browser.

## Mode

  mode: "development",
-development: Optimized for speed (use "production" for optimized builds).

## Final Notes

Run the development server with:
-npm start

Build for production with:

-npm run build
