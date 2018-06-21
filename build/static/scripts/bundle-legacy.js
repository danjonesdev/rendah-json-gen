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

var jsonGen = {
  sectionsContainer: document.querySelector('[data-sections-container]'),
  selectSection: document.querySelector('[data-section-select]'),
  addSection: document.querySelector('[data-add-section]'),
  generate: document.querySelector('[data-generate]'),
  generatedtextArea: document.querySelector('[data-generated]'),

  init: function init() {
    this.render();
  },
  appendSection: function appendSection() {
    var selectSection = jsonGen.selectSection.options[jsonGen.selectSection.selectedIndex].value;

    var section = void 0;
    switch (selectSection) {
      case 'heading':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <input data-input="text" type="text" value="">\n          </section>\n        ';
        break;
      case 'paragraph':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <textarea class="w-100" data-input="text" rows="4" cols="80" placeholder="1 section per paragraph; Line breaks do not take effect"></textarea>\n          </section>\n        ';
        break;
      case 'question':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <input data-input="text" type="text" value="">\n          </section>\n        ';
        break;
      case 'answer':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <textarea data-input="text" rows="4" cols="80" placeholder="1 section per paragraph; Line breaks do not take effect"></textarea>\n          </section>\n        ';
        break;
      case 'bulletList':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n          <p class="section__title">' + selectSection + '<span class="pl1  fw5">(10 max)</span></p>\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <label class="section__label">Text</label>\n            <input data-input="text" type="text" value="" placeholder="Here is the list:">\n            <label class="section__label">List</label>\n            <input class="db" data-input="list" type="text" value="" placeholder="1">\n            <input class="db" data-input="list" type="text" value="" placeholder="2">\n            <input class="db" data-input="list" type="text" value="" placeholder="3">\n            <input class="db" data-input="list" type="text" value="" placeholder="4">\n            <input class="db" data-input="list" type="text" value="" placeholder="5">\n            <input class="db" data-input="list" type="text" value="" placeholder="6">\n            <input class="db" data-input="list" type="text" value="" placeholder="7">\n            <input class="db" data-input="list" type="text" value="" placeholder="8">\n            <input class="db" data-input="list" type="text" value="" placeholder="9">\n            <input class="db" data-input="list" type="text" value="" placeholder="10">\n          </section>\n        ';
        break;
      case 'numberedList':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n          <p class="section__title">' + selectSection + '<span class="pl1  fw5">(10 max)</span></p>\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <label class="section__label">Text</label>\n            <input data-input="text" type="text" value="" placeholder="Here is the list:">\n            <label class="section__label">List</label>\n            <input class="db" data-input="list" type="text" value="" placeholder="1">\n            <input class="db" data-input="list" type="text" value="" placeholder="2">\n            <input class="db" data-input="list" type="text" value="" placeholder="3">\n            <input class="db" data-input="list" type="text" value="" placeholder="4">\n            <input class="db" data-input="list" type="text" value="" placeholder="5">\n            <input class="db" data-input="list" type="text" value="" placeholder="6">\n            <input class="db" data-input="list" type="text" value="" placeholder="7">\n            <input class="db" data-input="list" type="text" value="" placeholder="8">\n            <input class="db" data-input="list" type="text" value="" placeholder="9">\n            <input class="db" data-input="list" type="text" value="" placeholder="10">\n          </section>\n        ';
        break;
      case 'soundcloud':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <label class="section__label">Get relevant Type & ID from Soundcloud embed code</label>\n            <label class="section__label">Track embed example: <span class="ph1  bg-light-grey">tracks/442028544</span></label>\n            <label class="section__label">Playlist embed example: <span class="ph1  bg-light-grey">playlists/442028544</span></label>\n            <label class="section__label">Profile embed example: <span class="ph1  bg-light-grey">users/442028544</span></label>\n\n            <input data-input="url" type="text" value="">\n          </section>\n        ';
        break;
      case 'spotify':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <label class="section__label">URI</label>\n\n            <input data-input="uri" type="text" value="">\n          </section>\n        ';
        break;
      case 'youtube':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <label class="section__label">Youtube embed example: <span class="ph1  bg-light-grey">k8jUprWj-Zo</span></label>\n            <input data-input="url" type="text" value="">\n          </section>\n        ';
        break;
      case 'link':
        section = '\n          <section data-section="' + selectSection + '" class="section">\n            <span class="section__remove" data-remove="' + selectSection + '">&#10006;</span>\n            <p class="section__title">' + selectSection + '</p>\n            <select data-input="linkType">\n              <option value="Soundcloud">Soundcloud</option>\n              <option value="Youtube">Youtube</option>\n              <option value="Twitter">Twitter</option>\n              <option value="Facebook">Facebook</option>\n              <option value="Instagram">Instagram</option>\n              <option value="Website">Website</option>\n            </select>\n            <br />\n            <label class="section__label">text</label>\n            <input data-input="text" type="text" value="" placeholder="XXX on Soundcloud">\n            <br />\n            <label class="section__label">URL</label>\n            <input data-input="url" type="url" value=""  placeholder="https://soundcloud.com/xxx">\n          </section>\n        ';
        break;
      default:
    }

    jsonGen.sectionsContainer.insertAdjacentHTML('beforeend', section);
    window.scrollTo(0, document.body.scrollHeight);
    var removeElems = document.querySelectorAll('[data-remove]');

    // removes section

    var _loop = function _loop(i) {
      removeElems[i].addEventListener('click', function () {
        return jsonGen.removeSection(removeElems[i]);
      }, false);
    };

    for (var i = 0; i < removeElems.length; i += 1) {
      _loop(i);
    }
  },
  removeSection: function removeSection(elem) {
    var elemVal = elem.getAttribute('data-remove');
    var target = document.querySelector('[data-section="' + elemVal + '"]');
    console.log(target);
    target.parentNode.removeChild(target);
  },
  cleanUtil: function cleanUtil(val) {
    // replace double spaces, tabs, newlines
    // replace double quotes with single
    return val.replace(/\s\s+/g, ' ').replace(/"/g, "'");
  },
  generateJSON: function generateJSON() {
    var dataSections = document.querySelectorAll('[data-section]');
    var json = '{';
    var bodyOpened = false;

    var openBody = function openBody() {
      if (!bodyOpened) {
        bodyOpened = true;
        json += '"body": [';
      }
    };

    for (var i = 0; i < dataSections.length; i += 1) {
      var thisSection = dataSections[i];
      var type = thisSection.getAttribute('data-section');
      var list = void 0;
      var comma = ',';

      var blockComma = ',';
      if (i + 1 === dataSections.length) {
        blockComma = '';
      }

      switch (type) {
        case 'url':
          json += '"' + type + '": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"';
          break;
        case 'title':
          json += '"' + type + '": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"';
          break;
        case 'description':
          json += '"' + type + '": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"';
          break;
        case 'created':
          json += '\n            "' + type + '": {\n              "$date": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"\n            }';
          break;
        case 'img':
          json += '"' + type + '": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"';
          break;
        case 'author':
          var authorSection = thisSection.querySelector('[data-input="select"]').options[thisSection.querySelector('[data-input="select"]').selectedIndex].value;
          json += '"' + type + '": "' + jsonGen.cleanUtil(authorSection) + '"';
          break;
        case 'category':
          var categorySection = thisSection.querySelector('[data-input="select"]').options[thisSection.querySelector('[data-input="select"]').selectedIndex].value;
          json += '"' + type + '": "' + jsonGen.cleanUtil(categorySection) + '"';
          break;
        case 'heading':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"\n            }\n          }';
          break;
        case 'paragraph':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"\n            }\n          }';
          break;
        case 'question':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"\n            }\n          }';
          break;
        case 'answer':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '"\n            }\n          }';
          break;
        case 'bulletList':
          openBody();
          list = '';
          for (var ii = 0; ii < thisSection.querySelectorAll('[data-input="list"]').length; ii += 1) {
            if (thisSection.querySelectorAll('[data-input="list"]')[ii].value) {
              if (ii + 1 === thisSection.querySelectorAll('[data-input="list"]').length) {
                comma = '';
              }
              list += '"' + jsonGen.cleanUtil(thisSection.querySelectorAll('[data-input="list"]')[ii].value) + '"' + comma;
            }
          }
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '",\n              "list": [\n                ' + list + '\n              ]\n            }\n          }';
          break;
        case 'numberedList':
          openBody();
          list = '';
          for (var _ii = 0; _ii < thisSection.querySelectorAll('[data-input="list"]').length; _ii += 1) {
            if (thisSection.querySelectorAll('[data-input="list"]')[_ii].value) {
              if (_ii + 1 === thisSection.querySelectorAll('[data-input="list"]').length) {
                comma = '';
              }
              list += '"' + jsonGen.cleanUtil(thisSection.querySelectorAll('[data-input="list"]')[_ii].value) + '"' + comma;
            }
          }

          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '",\n              "list": [\n                ' + list + '\n              ]\n            }\n          }';
          break;
        case 'soundcloud':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "url": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value) + '"\n            }\n          }';
          break;
        case 'spotify':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "uri": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="uri"]').value) + '"\n            }\n          }';
          break;
        case 'youtube':
          openBody();
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "url": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value) + '"\n            }\n          }';
          break;
        case 'link':
          var linkSection = jsonGen.cleanUtil(thisSection.querySelector('[data-input="linkType"]').options[thisSection.querySelector('[data-input="linkType"]').selectedIndex].value);
          json += '\n          {\n            "section": {\n              "type": "' + type + '",\n              "linkType": "' + linkSection + '",\n              "text": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="text"]').value) + '",\n              "url": "' + jsonGen.cleanUtil(thisSection.querySelector('[data-input="url"]').value) + '"\n            }\n          }';
          break;
        default:
      }
      json += '' + blockComma;
    }
    if (bodyOpened) {
      json += ']';
    }
    json += '}';

    console.log(json);
    jsonGen.generatedtextArea.value = json;
  },
  render: function render() {
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The module `Example` is specific to the Front documentation,
 * others can be added or removed if required
 */


var scripts_App = function () {
  function App() {
    _classCallCheck(this, App);

    this.gaId = 'UA-123456-78';
    this.hostname = 'domain.com';
    this.modules = [modules_jsonGen];

    document.documentElement.className = 'js';

    // init all necessary modules
    this.modules.forEach(function (module) {
      module.init();
    });

    // uncomment to load ga
    // this.loadAnalytics();
  }

  _createClass(App, [{
    key: 'loadAnalytics',
    value: function loadAnalytics() {
      if (!this.gaId) {
        throw new Error('App missing gaId');
      }

      /* eslint-disable */
      if (window.location.hostname === this.hostname || window.location.hostname === 'www.' + this.hostname) {
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
  }]);

  return App;
}();

window.addEventListener('load', function () {
  return new scripts_App();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle-legacy.js.map