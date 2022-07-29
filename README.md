# Phaser 3 Typescript Project Template

This is a basic template to start a Phaser 3 game using Typescript. It is heavily based on the official [Phaser 3 Project Template](https://github.com/photonstorm/phaser3-project-template) repository, with the addition of Typescript transpilation via `ts-loader`. It also uses Babel and Webpack to build code, and to enable hot reloading in the dev build.

The template includes Jest as a testing library, and the Typescript version of StandardJS for code formatting and linting.

<!-- TODO: Figure out why above repo says using import to get game images is not recommended and what the appropriate alternative is -->

## Requirements

Node.js is required to install dependencies and run scripts. This template was created using Node v17.4.0 and npm v8.14.0.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies. |
| `npm start` | Build project and open the Express server to run it. |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc.). |
| `npx test` | Runs the Jest test library with the default configuration. |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Images

By default, the template will read any files in the `/public` directory and serve them with the webpack dev server. It is possible to use the `import Variable from '../public/assets/filename.png'` syntax, but the Phaser example repository advises against it. Instead, you can use the file addresses in your image load calls, like this: `this.load.image(mineWallsTileset, './assets/filename.png')`.

## Customizing the Template

### Babel

You can write in Typescript, which is transpiled by `ts-loader`, and then Babel will process it to a version of JavaScript that you want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

```json
"browsers": [
  ">0.25%",
  "not ie 11",
  "not op_mini all"
]
```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can modify the `webpack/base.js` file for cross-project changes, add production customizations to `webpack/prod.js`, or modify and/or create new configuration files in the `webpack/` directory then target them in specific npm tasks inside of `package.json`.

## Deploying Code

After you run the `npm run build` command, your code will be built into chunked bundles located in `dist/`, along with any other assets your project depends on that have been imported from outside of the `public/` directory.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you will then be able to open `http://mycoolserver.com/index.html` and play your game.
