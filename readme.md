[![Dependencies](https://david-dm.org/dmk2014/phaser-template.svg)](https://david-dm.org/dmk2014/phaser-template)

# Personal Template for Phaser CE

## Description
[Phaser](https://github.com/photonstorm/phaser) template for TypeScript. Inspired by a number of similar projects. Tested only on macOS, but no issues anticipated on Windows or Linux.

Includes Phaser, PIXI and p2 as globals using expose-loader. These dependencies are imported once for the entire application in app.ts. Webpack will expose them globally at runtime.

TypeScript definitions for Phaser included in tsconfig.json.

Assets loaded using file-loader. Output to ```dist/assets/[hast].[ext]```. Google Fonts added in the load state using webfontloader.

Server and watcher for development provided with webpack-dev-server.

Implements a full working sample of the Phaser state system (Boot, Load, Menu and Play) as well as demonstrating Phaser concepts such as sprites, tilemaps, arcade physics and more.

## Scripts

Defined in package.json.

### serve

```npm run serve```

Start webpack-dev-server with file watching enabled. Will wait 500ms for additional changes before compilation. Source maps included for debugging. Server configuration can be modified in webpack.config.js.

### build:dev

```npm run build:dev```

Create a development build. Output to dist folder.

## Credits
- Sample level created using [Tiled](http://www.mapeditor.org). Spritesheets created with [TexturePacker](https://www.codeandweb.com/texturepacker).
- Textures from [Platformer Art Complete Pack](https://opengameart.org/content/platformer-art-complete-pack-often-updated).
- Menu audio created by [mrpoly](https://opengameart.org/content/menu-music).

## Notes
- Including PhaserCE Typescript Definitions - https://github.com/photonstorm/phaser-ce/issues/16.
- DevServer.ContentBase option may be required when bundling assets.

## TODO
- Lint TypeScript
- Production config
- Minify
- Clean step before build
- Assets
    - Consider maintaining directory structure
    - Consider including filename in output
- Level
    - Add coins & HUD.
    - Additional sounds.