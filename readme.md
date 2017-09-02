[![Dependencies](https://david-dm.org/dmk2014/phaser-template.svg)](https://david-dm.org/dmk2014/phaser-template)

# TypeScript Template for Phaser CE

## Description
[Phaser](https://github.com/photonstorm/phaser) template for TypeScript. Inspired by a number of similar projects. Tested only on macOS, but no issues anticipated on Windows or Linux.

Includes Phaser, PIXI and p2 as globals using expose-loader. These dependencies are imported once for the entire application in app.ts. Webpack will expose them globally at runtime.

TypeScript definitions for Phaser included in tsconfig.json.

Assets loaded using file-loader. Google Fonts added in the load state using webfontloader.

Server and watcher for development provided with webpack-dev-server.

Implements a full working sample of the Phaser state system (Boot, Load, Menu and Play) as well as demonstrating Phaser concepts such as sprites, tilemaps, arcade physics and more.

## Scripts

### build:dev

```npm run build:dev```

Create a development build. Output to build folder.

### build:prod

```npm run build:prod```

Create a production build. Output to dist folder.

### lint

```npm run lint```

Run TSLint on the TypeScript source files. The recommended ruleset is used, along with some custom rules as defined in tslint.json. These rules are a personal preference. For VSCode users, the [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) plugin is recommended.

### serve

```npm run serve```

Start webpack-dev-server with file watching enabled. Will wait 500ms for additional changes before compilation. Source maps included for debugging. Server configuration can be modified in webpack.dev.js.

### serve:dev

```npm run serve:dev```

Alias for serve.

### serve:prod

```npm run serve:prod```

Start webpack-dev-server using production configuration.

## Credits
- Sample level created using [Tiled](http://www.mapeditor.org). Spritesheets created with [TexturePacker](https://www.codeandweb.com/texturepacker).
- Textures from [Platformer Art Complete Pack](https://opengameart.org/content/platformer-art-complete-pack-often-updated).
- Menu audio created by [mrpoly](https://opengameart.org/content/menu-music).

## Notes
- Including PhaserCE Typescript Definitions - https://github.com/photonstorm/phaser-ce/issues/16.

## TODO
- Assets
    - Maintain directory structure?
- Level
    - Add coins & HUD.
    - Additional sounds.