# Build
All scripts are defined in package.json. No gulp.
## Production
Start the server with `npm start` - this will build the frontend and start the server
## Development
Running `npm run dev` will start a hot-reloading build for vue.js that will automatically reload modules as they're saved
## Task descriptions
### build
    "browserify app/app.js -g envify -t vueify -p [ vueify/plugins/extract-css -o public/styles.bundle.css ] -t babelify -o public/app.bundle.js",
The production builder - the `vueify/plugins/extract-css` browserify plugin wraps all of the css down to one file to prevent screen flash

    "watch": "watchify app/app.js -t vueify -t babelify -p browserify-hmr -o public/app.bundle.js",
The development builder - uses `watchify` and `browserify-hmr` to rebuild and hot-reload modules during development

    "start": "node server.js",
The script that actually starts the server in production - called by `npm start`

    "prestart": "npm run build"
The script that initiates the front-end build in production - called by `npm start`
    
    "dev": "concurrently \"nodemon server.js\" \"npm run watch\""
Call this to start the server and frontend watcher for development