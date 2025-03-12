# St. Patrick's Bootstrap Sandbox Project Structure

## What is a Bootstrap Sandbox

A Bootstrap Sandbox is an isolated environment where you can experiment with Bootstrap components, layouts, and styles without affecting other projects. It’s commonly used for:

✅ Testing Bootstrap features (e.g., Navbar, Carousel, Buttons, Cards)
✅ Experimenting with custom styles (SCSS, CSS overrides)
✅ Building small prototypes before integrating into larger applications
✅ Learning and practicing Bootstrap in a structured setup

What Makes a Bootstrap Sandbox Special
📦 Modular Setup: Uses Webpack and Babel to bundle assets efficiently.
⚡ Hot Reloading: Instantly reflects changes in the browser using Webpack DevServer.
🎨 SCSS Support: Allows easy customization of Bootstrap styles.
🚀 Fast Development: Works like a playground for Bootstrap experiments
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

1️⃣ Initialize a Project
mkdir bootstrap-sandbox
cd bootstrap-sandbox
npm init -y
2️⃣ Install Required Dependencies

npm install webpack webpack-cli webpack-dev-server --save-dev
npm install @babel/core @babel/preset-env babel-loader --save-dev
npm install sass sass-loader css-loader postcss-loader autoprefixer mini-css-extract-plugin --save-dev
npm install bootstrap

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
  },
  ``

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

