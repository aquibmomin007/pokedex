# PokeDex App
AngularJS Boilerplate is used to create this Pokedex App.
## Git Repository to Boilerplate
```bash
https://github.com/jbutko/AngularJS-Boilerplate.git
```

# Features
* SASS support including sourceMaps
* Minimal CSS styling of the view
* Gulp watch, build and local server tasks
* localStorage service for set, get
* clear folder structure
* minified CSS and JS build files
* all json data in /data/ folder
* all images data in /images/ folder

```bash
git clone https://github.com/aquibmomin007/pokedex.git
```

## 1. Setup
```bash
npm install
```
- install all npm and bower dependencies

**Note:** If `npm install` fails during dependency installation it will be likely caused by `gulp-imagemin`. In that case remove `gulp-imagemin` dependency from `package.json`, run `npm install` again and then install `gulp-imagemin` separately with following command: `npm install gulp-imagemin --save-dev`. Also check if GIT is installed

If you get `tarball.destroy is not a function` error, do a `npm install tarball`. If issue still persists check `https://github.com/npm/npm/issues/8564`

## 2. Watch files
```bash
gulp
```
- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

## 3. Build production version
```bash
gulp build
```
**Note:** If `gulp build` fails. 
* Open command prompt in `Administrator mode`
* `npm cache clean`
*  Empty your `\Users\Unsername\AppData\Local\Temp\` folder

**this will process following tasks:**
* clean _build folder
* compile SASS files, minify and uncss compiled css
* copy and optimize images
* minify and copy all HTML files into $templateCache
* build index.html
* minify and copy all JS files
* copy fonts
* show build folder size

## 4. Start webserver without watch task
```bash
gulp server
```

## 5. Start webserver from build folder
```bash
gulp server-build
```
