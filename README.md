# rendah-json-gen

You'll need the latest versions of the following installed on your system:

* [Node.js](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)

Once your system is setup with the above, navigate to the cloned repo and install project dependencies:

```javascript
npm install
```

## Project Tasks

The following Gulp task launches a local server via BrowserStack that will watch for any changes to your assets and automatically compile as well as refreshing your browser:

```javascript
gulp watch
```

You can compile any templates, js and css and copy static assets by running the build script:

```javascript
npm run build
gulp build
```

```javascript
gulp clean
```

Make sure to then run the ```gulp build``` task to rebuild all the required assets.
