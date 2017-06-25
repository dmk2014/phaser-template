# Personal Template for Phaser CE

## Description
Phaser template for TypeScript. Inspired by a number of similar projects. Tested only on macOS, but no issues anticipated on Windows or Linux.

Exposes Phaser, PIXI and p2 as globals using expose-loader. These dependencies are imported once for the entire application in app.ts. Webpack will then make them available globally.

TypeScript definitions for Phaser included in tsconfig.json.

Assets are loaded using file-loader. Output to ```dist/assets/[hast].[ext]```.

Server and watcher for development provided with webpack-dev-server.

## Scripts

Defined in package.json.

### serve

```npm run serve```

Start webpack-dev-server with file watching enabled. Will wait 500ms for additional changes before compilation. Source maps included for debugging. Server configuration can be modified in webpack.config.js.

### build:Dev

```npm run build:dev```

Create a development build. Output to dist folder.

## Notes
- Including PhaserCE Typescript Definitions - https://github.com/photonstorm/phaser-ce/issues/16

- DevServer.ContentBase option may be required when bundling assets.

## TODO
- Lint TypeScript
- Production config
- Minify
- Clean step before build
- Assets
    - Support additional file formats
    - Consider maintaining directory structure
    - Consider including filename in output