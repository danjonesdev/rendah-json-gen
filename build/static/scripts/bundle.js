/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/static/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/static/scripts/index.js":
/*!*************************************************!*\
  !*** ./src/static/scripts/index.js + 1 modules ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/static/scripts/modules/jsonGen.js
/* eslint-disable no-case-declarations */

const jsonGen = {
  sectionsContainer: document.querySelector('[data-sections-container]'),
  selectSection: document.querySelector('[data-section-select]'),
  addSection: document.querySelector('[data-add-section]'),
  generate: document.querySelector('[data-generate]'),
  generatedtextArea: document.querySelector('[data-generated]'),

  init() {
    this.render();
  },

  appendSection() {
    const selectSection = jsonGen.selectSection.options[jsonGen.selectSection.selectedIndex].value;

    let section;
    switch (selectSection) {
      case 'heading':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <input data-input="text" type="text" value="">
          </section>
        `;
        break;
      case 'paragraph':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <textarea class="w-100" data-input="text" rows="4" cols="80" placeholder="1 section per paragraph; Line breaks do not take effect"></textarea>
          </section>
        `;
        break;
      case 'question':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <input data-input="text" type="text" value="">
          </section>
        `;
        break;
      case 'answer':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <textarea data-input="text" rows="4" cols="80" placeholder="1 section per paragraph; Line breaks do not take effect"></textarea>
          </section>
        `;
        break;
      case 'bulletList':
        section = `
          <section data-section="${selectSection}" class="section">
          <p class="section__title">${selectSection}<span class="pl1  fw5">(10 max)</span></p>
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <label class="section__label">Text</label>
            <input data-input="text" type="text" value="" placeholder="Here is the list:">
            <label class="section__label">List</label>
            <input class="db" data-input="list" type="text" value="" placeholder="1">
            <input class="db" data-input="list" type="text" value="" placeholder="2">
            <input class="db" data-input="list" type="text" value="" placeholder="3">
            <input class="db" data-input="list" type="text" value="" placeholder="4">
            <input class="db" data-input="list" type="text" value="" placeholder="5">
            <input class="db" data-input="list" type="text" value="" placeholder="6">
            <input class="db" data-input="list" type="text" value="" placeholder="7">
            <input class="db" data-input="list" type="text" value="" placeholder="8">
            <input class="db" data-input="list" type="text" value="" placeholder="9">
            <input class="db" data-input="list" type="text" value="" placeholder="10">
          </section>
        `;
        break;
      case 'numberedList':
        section = `
          <section data-section="${selectSection}" class="section">
          <p class="section__title">${selectSection}<span class="pl1  fw5">(10 max)</span></p>
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <label class="section__label">Text</label>
            <input data-input="text" type="text" value="" placeholder="Here is the list:">
            <label class="section__label">List</label>
            <input class="db" data-input="list" type="text" value="" placeholder="1">
            <input class="db" data-input="list" type="text" value="" placeholder="2">
            <input class="db" data-input="list" type="text" value="" placeholder="3">
            <input class="db" data-input="list" type="text" value="" placeholder="4">
            <input class="db" data-input="list" type="text" value="" placeholder="5">
            <input class="db" data-input="list" type="text" value="" placeholder="6">
            <input class="db" data-input="list" type="text" value="" placeholder="7">
            <input class="db" data-input="list" type="text" value="" placeholder="8">
            <input class="db" data-input="list" type="text" value="" placeholder="9">
            <input class="db" data-input="list" type="text" value="" placeholder="10">
          </section>
        `;
        break;
      case 'soundcloud':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <label class="section__label">Get relevant Type & ID from Soundcloud embed code</label>
            <label class="section__label">Track embed example: <span class="ph1  bg-light-grey">tracks/442028544</span></label>
            <label class="section__label">Playlist embed example: <span class="ph1  bg-light-grey">playlists/442028544</span></label>
            <label class="section__label">Profile embed example: <span class="ph1  bg-light-grey">users/442028544</span></label>

            <input data-input="url" type="text" value="">
          </section>
        `;
        break;
      case 'spotify':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <label class="section__label">URI</label>

            <input data-input="uri" type="text" value="">
          </section>
        `;
        break;
      case 'youtube':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <label class="section__label">Youtube embed example: <span class="ph1  bg-light-grey">k8jUprWj-Zo</span></label>
            <input data-input="url" type="text" value="">
          </section>
        `;
        break;
      case 'FacebookVideo':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <label class="section__label">FacebookVideo embed</label>
            <input data-input="url" type="text" value="">
          </section>
        `;
        break;
      case 'link':
        section = `
          <section data-section="${selectSection}" class="section">
            <span class="section__remove" data-remove="${selectSection}">&#10006;</span>
            <p class="section__title">${selectSection}</p>
            <select data-input="linkType">
              <option value="Soundcloud">Soundcloud</option>
              <option value="Youtube">Youtube</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Website">Website</option>
            </select>
            <br />
            <label class="section__label">text</label>
            <input data-input="text" type="text" value="" placeholder="XXX on Soundcloud">
            <br />
            <label class="section__label">URL</label>
            <input data-input="url" type="url" value=""  placeholder="https://soundcloud.com/xxx">
          </section>
        `;
        break;
      default:
    }

    jsonGen.sectionsContainer.insertAdjacentHTML('beforeend', section);
    window.scrollTo(0, document.body.scrollHeight);
    const removeElems = document.querySelectorAll('[data-remove]');

    // removes section
    for (let i = 0; i < removeElems.length; i += 1) {
      removeElems[i].addEventListener('click', () => jsonGen.removeSection(removeElems[i]), false);
    }
  },

  removeSection(elem) {
    const elemVal = elem.getAttribute('data-remove');
    const target = document.querySelector(`[data-section="${elemVal}"]`);
    console.log(target);
    target.parentNode.removeChild(target);
  },

  cleanUtil(val) {
    // replace double spaces, tabs, newlines
    // replace double quotes with single
    return val.replace(/\s\s+/g, ' ').replace(/"/g, "'");
  },

  generateJSON() {
    const dataSections = document.querySelectorAll('[data-section]');
    let json = '{';
    let bodyOpened = false;

    const openBody = () => {
      if (!bodyOpened) {
        bodyOpened = true;
        json += '"body": [';
      }
    };

    for (let i = 0; i < dataSections.length; i += 1) {
      const thisSection = dataSections[i];
      const type = thisSection.getAttribute('data-section');
      let list;
      let comma = ',';

      let blockComma = ',';
      if (i + 1 === dataSections.length) {
        blockComma = '';
      }

      switch (type) {
        case 'url':
          json += `"${type}": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"`;
          break;
        case 'title':
          json += `"${type}": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"`;
          break;
        case 'description':
          json += `"${type}": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"`;
          break;
        case 'created':
          json += `
            "${type}": {
              "$date": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"
            }`;
          break;
        case 'img':
          json += `"${type}": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"`;
          break;
        case 'author':
          const authorSection = thisSection.querySelector('[data-input="select"]').options[thisSection.querySelector('[data-input="select"]').selectedIndex].value;
          json += `"${type}": "${jsonGen.cleanUtil(authorSection)}"`;
          break;
        case 'category':
          const categorySection = thisSection.querySelector('[data-input="select"]').options[thisSection.querySelector('[data-input="select"]').selectedIndex].value;
          json += `"${type}": "${jsonGen.cleanUtil(categorySection)}"`;
          break;
        case 'heading':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"
            }
          }`;
          break;
        case 'paragraph':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"
            }
          }`;
          break;
        case 'question':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"
            }
          }`;
          break;
        case 'answer':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}"
            }
          }`;
          break;
        case 'bulletList':
          openBody();
          list = '';
          for (let ii = 0; ii < thisSection.querySelectorAll('[data-input="list"]').length; ii += 1) {
            if (thisSection.querySelectorAll('[data-input="list"]')[ii].value) {
              if (ii + 1 === thisSection.querySelectorAll('[data-input="list"]').length) {
                comma = '';
              }
              list += `"${jsonGen.cleanUtil(thisSection.querySelectorAll('[data-input="list"]')[ii].value)}"${comma}`;
            }
          }
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}",
              "list": [
                ${list}
              ]
            }
          }`;
          break;
        case 'numberedList':
          openBody();
          list = '';
          for (let ii = 0; ii < thisSection.querySelectorAll('[data-input="list"]').length; ii += 1) {
            if (thisSection.querySelectorAll('[data-input="list"]')[ii].value) {
              if (ii + 1 === thisSection.querySelectorAll('[data-input="list"]').length) {
                comma = '';
              }
              list += `"${jsonGen.cleanUtil(thisSection.querySelectorAll('[data-input="list"]')[ii].value)}"${comma}`;
            }
          }

          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}",
              "list": [
                ${list}
              ]
            }
          }`;
          break;
        case 'soundcloud':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "url": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value)}"
            }
          }`;
          break;
        case 'spotify':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "uri": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="uri"]').value)}"
            }
          }`;
          break;
        case 'youtube':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "url": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value)}"
            }
          }`;
          break;
        case 'FacebookVideo':
          openBody();
          json += `
          {
            "section": {
              "type": "${type}",
              "url": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value)}"
            }
          }`;
          break;
        case 'link':
          const linkSection = jsonGen.cleanUtil(thisSection.querySelector('[data-input="linkType"]').options[thisSection.querySelector('[data-input="linkType"]').selectedIndex].value);
          json += `
          {
            "section": {
              "type": "${type}",
              "linkType": "${linkSection}",
              "text": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value)}",
              "url": "${jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value)}"
            }
          }`;
          break;
        default:
      }
      json += `${blockComma}`;
    }
    if (bodyOpened) {
      json += ']';
    }
    json += '}';

    console.log(json);
    jsonGen.generatedtextArea.value = json;
  },

  render() {
    // if (!thijsonGens.grid) {
    //   return;
    // }

    // appends section
    jsonGen.addSection.addEventListener('click', jsonGen.appendSection, false);

    // generates json
    jsonGen.generate.addEventListener('click', jsonGen.generateJSON, false);
  }
};

/* harmony default export */ var modules_jsonGen = (jsonGen);
// CONCATENATED MODULE: ./src/static/scripts/index.js
/**
 * The module `Example` is specific to the Front documentation,
 * others can be added or removed if required
 */


class scripts_App {
  constructor() {
    this.gaId = 'UA-123456-78';
    this.hostname = 'domain.com';
    this.modules = [modules_jsonGen];

    document.documentElement.className = 'js';

    // init all necessary modules
    this.modules.forEach(module => {
      module.init();
    });

    // uncomment to load ga
    // this.loadAnalytics();
  }

  loadAnalytics() {
    if (!this.gaId) {
      throw new Error('App missing gaId');
    }

    /* eslint-disable */
    if (window.location.hostname === this.hostname || window.location.hostname === `www.${this.hostname}`) {
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', this.gaId, 'auto');
      ga('send', 'pageview');
    }
    /* eslint-enable */
  }
}

window.addEventListener('load', () => new scripts_App());

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map