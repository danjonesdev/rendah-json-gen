# [Front](https://front.mosquito.digital)

Frontend build system for internal use.

## Getting Started

You'll need the latest versions of the following installed on your system:

* [Node.js](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)

Once your system is setup with the above, navigate to the cloned repo and install project dependencies:

```javascript
npm install
```

In ```package.json``` there is a list of base paths for source, build and distribution directories. By default it is setup for a static web build but you can change the paths as needed, for example to reflect a WordPress theme directory ```./public/wp-content/themes/mosquito/static```

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

The former should be used when building for production. It sets the Node environment to 'production' via ```NODE_ENV=production``` and minifies the compiled output. It also purges the current build folder and copies any assets in the static folder e.g. images, fonts etc. The included ```cross-env``` package ensures the environment variable can be set on Windows.

Alternatively the latter can be used with or without the flag ```--production```

As the build folder contents will become outdated with updates it's a good idea to purge everything periodically so you're working from a clean slate. To do this run the following task to delete all the contents listed in the ```copy``` array const set in ```gulpfile.babel.js``` (which can be added to if needed).

```javascript
gulp clean
```

Make sure to then run the ```gulp build``` task to rebuild all the required assets.

## Linting

Before compilation JavaScript is linted by ESLint using ```eslint-config-airbnb-base```. Any linting errors must be fixed before the bundle will compile successfully.

CSS is also linted via stylelint in the same manner as above by running the following lint script:

```javascript
npm run lint
```

* [ESLint](https://eslint.org/)
  * [Rules](https://eslint.org/docs/rules/)
* [stylelint](https://stylelint.io/)
  * [Rules](https://stylelint.io/user-guide/rules/)

## Testing

[Mocha](https://mochajs.org/) testing framework and the [Chai](http://chaijs.com/) assertion library are included in the boilerplate.

There are a number of example tests covering the generic library functions ```src/scripts/functions/*.js```

```javascript
npm run test
```

* [Ultimate Unit Testing Cheatsheet](https://gist.github.com/yoavniran/1e3b0162e1545055429e)

## Docs

The documentation source for [front.mosquito.digital](https://front.mosquito.digital/) is included at ```src/docs``` and the following tasks are used for generating. Unless you are contributing to the docs they can be ignored as they do not run by default.

```javascript
npm run build-docs
npm run watch-docs
```
