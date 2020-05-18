module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/datas/countries.js":
/*!**********************************!*\
  !*** ./pages/datas/countries.js ***!
  \**********************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
const countries = [{
  label: "Afghanistan",
  value: "Afghanistan"
}, {
  label: "Albania",
  value: "Albania"
}, {
  label: "Algeria",
  value: "Algeria"
}, {
  label: "American Samoa",
  value: "American Samoa"
}, {
  label: "AndorrA",
  value: "AndorrA"
}, {
  label: "Angola",
  value: "Angola"
}, {
  label: "Anguilla",
  value: "Anguilla"
}, {
  label: "Antarctica",
  value: "Antarctica"
}, {
  label: "Antigua and Barbuda",
  value: "Antigua and Barbuda"
}, {
  label: "Argentina",
  value: "Argentina"
}, {
  label: "Armenia",
  value: "Armenia"
}, {
  label: "Aruba",
  value: "Aruba"
}, {
  label: "Australia",
  value: "Australia"
}, {
  label: "Austria",
  value: "Austria"
}, {
  label: "Azerbaijan",
  value: "Azerbaijan"
}, {
  label: "Bahamas",
  value: "Bahamas"
}, {
  label: "Bahrain",
  value: "Bahrain"
}, {
  label: "Bangladesh",
  value: "Bangladesh"
}, {
  label: "Barbados",
  value: "Barbados"
}, {
  label: "Belarus",
  value: "Belarus"
}, {
  label: "Belgium",
  value: "Belgium"
}, {
  label: "Belize",
  value: "Belize"
}, {
  label: "Benin",
  value: "Benin"
}, {
  label: "Bermuda",
  value: "Bermuda"
}, {
  label: "Bhutan",
  value: "Bhutan"
}, {
  label: "Bolivia",
  value: "Bolivia"
}, {
  label: "Bosnia and Herzegovina",
  value: "Bosnia and Herzegovina"
}, {
  label: "Botswana",
  value: "Botswana"
}, {
  label: "Bouvet Island",
  value: "Bouvet Island"
}, {
  label: "Brazil",
  value: "Brazil"
}, {
  label: "British Indian Ocean Territory",
  value: "British Indian Ocean Territory"
}, {
  label: "Brunei Darussalam",
  value: "Brunei Darussalam"
}, {
  label: "Bulgaria",
  value: "Bulgaria"
}, {
  label: "Burkina Faso",
  value: "Burkina Faso"
}, {
  label: "Burundi",
  value: "Burundi"
}, {
  label: "Cambodia",
  value: "Cambodia"
}, {
  label: "Cameroon",
  value: "Cameroon"
}, {
  label: "Canada",
  value: "Canada"
}, {
  label: "Cape Verde",
  value: "Cape Verde"
}, {
  label: "Cayman Islands",
  value: "Cayman Islands"
}, {
  label: "Central African Republic",
  value: "Central African Republic"
}, {
  label: "Chad",
  value: "Chad"
}, {
  label: "Chile",
  value: "Chile"
}, {
  label: "China",
  value: "China"
}, {
  label: "Christmas Island",
  value: "Christmas Island"
}, {
  label: "Cocos (Keeling) Islands",
  value: "Cocos (Keeling) Islands"
}, {
  label: "Colombia",
  value: "Colombia"
}, {
  label: "Comoros",
  value: "Comoros"
}, {
  label: "Congo",
  value: "Congo"
}, {
  label: "Congo, The Democratic Republic of the",
  value: "Congo, The Democratic Republic of the"
}, {
  label: "Cook Islands",
  value: "Cook Islands"
}, {
  label: "Costa Rica",
  value: "Costa Rica"
}, {
  label: "Cote D'Ivoire",
  value: "Cote D'Ivoire"
}, {
  label: "Croatia",
  value: "Croatia"
}, {
  label: "Cuba",
  value: "Cuba"
}, {
  label: "Cyprus",
  value: "Cyprus"
}, {
  label: "Czech Republic",
  value: "Czech Republic"
}, {
  label: "Denmark",
  value: "Denmark"
}, {
  label: "Djibouti",
  value: "Djibouti"
}, {
  label: "Dominica",
  value: "Dominica"
}, {
  label: "Dominican Republic",
  value: "Dominican Republic"
}, {
  label: "Ecuador",
  value: "Ecuador"
}, {
  label: "Egypt",
  value: "Egypt"
}, {
  label: "El Salvador",
  value: "El Salvador"
}, {
  label: "Equatorial Guinea",
  value: "Equatorial Guinea"
}, {
  label: "Eritrea",
  value: "Eritrea"
}, {
  label: "Estonia",
  value: "Estonia"
}, {
  label: "Ethiopia",
  value: "Ethiopia"
}, {
  label: "Faroe Islands",
  value: "Faroe Islands"
}, {
  label: "Fiji",
  value: "Fiji"
}, {
  label: "Finland",
  value: "Finland"
}, {
  label: "France",
  value: "France"
}, {
  label: "French Guiana",
  value: "French Guiana"
}, {
  label: "French Polynesia",
  value: "French Polynesia"
}, {
  label: "French Southern Territories",
  value: "French Southern Territories"
}, {
  label: "Gabon",
  value: "Gabon"
}, {
  label: "Gambia",
  value: "Gambia"
}, {
  label: "Georgia",
  value: "Georgia"
}, {
  label: "Germany",
  value: "Germany"
}, {
  label: "Ghana",
  value: "Ghana"
}, {
  label: "Gibraltar",
  value: "Gibraltar"
}, {
  label: "Greece",
  value: "Greece"
}, {
  label: "Greenland",
  value: "Greenland"
}, {
  label: "Grenada",
  value: "Grenada"
}, {
  label: "Guadeloupe",
  value: "Guadeloupe"
}, {
  label: "Guam",
  value: "Guam"
}, {
  label: "Guatemala",
  value: "Guatemala"
}, {
  label: "Guernsey",
  value: "Guernsey"
}, {
  label: "Guinea",
  value: "Guinea"
}, {
  label: "Guinea-Bissau",
  value: "Guinea-Bissau"
}, {
  label: "Guyana",
  value: "Guyana"
}, {
  label: "Haiti",
  value: "Haiti"
}, {
  label: "Heard Island and Mcdonald Islands",
  value: "Heard Island and Mcdonald Islands"
}, {
  label: "Honduras",
  value: "Honduras"
}, {
  label: "Hong Kong",
  value: "Hong Kong"
}, {
  label: "Hungary",
  value: "Hungary"
}, {
  label: "Iceland",
  value: "Iceland"
}, {
  label: "India",
  value: "India"
}, {
  label: "Indonesia",
  value: "Indonesia"
}, {
  label: "Iran, Islamic Republic Of",
  value: "Iran, Islamic Republic Of"
}, {
  label: "Iraq",
  value: "Iraq"
}, {
  label: "Ireland",
  value: "Ireland"
}, {
  label: "Isle of Man",
  value: "Isle of Man"
}, {
  label: "Israel",
  value: "Israel"
}, {
  label: "Italy",
  value: "Italy"
}, {
  label: "Jamaica",
  value: "Jamaica"
}, {
  label: "Japan",
  value: "Japan"
}, {
  label: "Jersey",
  value: "Jersey"
}, {
  label: "Jordan",
  value: "Jordan"
}, {
  label: "Kazakhstan",
  value: "Kazakhstan"
}, {
  label: "Kenya",
  value: "Kenya"
}, {
  label: "Kiribati",
  value: "Kiribati"
}, {
  label: "Korea, Democratic People's Republic of",
  value: "Korea, Democratic People's Republic of"
}, {
  label: "Korea, Republic of",
  value: "Korea, Republic of"
}, {
  label: "Kuwait",
  value: "Kuwait"
}, {
  label: "Kyrgyzstan",
  value: "Kyrgyzstan"
}, {
  label: "Lao People's Democratic Republic",
  value: "Lao People's Democratic Republic"
}, {
  label: "Latvia",
  value: "Latvia"
}, {
  label: "Lebanon",
  value: "Lebanon"
}, {
  label: "Lesotho",
  value: "Lesotho"
}, {
  label: "Liberia",
  value: "Liberia"
}, {
  label: "Libyan Arab Jamahiriya",
  value: "Libyan Arab Jamahiriya"
}, {
  label: "Liechtenstein",
  value: "Liechtenstein"
}, {
  label: "Lithuania",
  value: "Lithuania"
}, {
  label: "Luxembourg",
  value: "Luxembourg"
}, {
  label: "Macao",
  value: "Macao"
}, {
  label: "Macedonia",
  value: "Macedonia"
}, {
  label: "Madagascar",
  value: "Madagascar"
}, {
  label: "Malawi",
  value: "Malawi"
}, {
  label: "Malaysia",
  value: "Malaysia"
}, {
  label: "Maldives",
  value: "Maldives"
}, {
  label: "Mali",
  value: "Mali"
}, {
  label: "Malta",
  value: "Malta"
}, {
  label: "Marshall Islands",
  value: "Marshall Islands"
}, {
  label: "Martinique",
  value: "Martinique"
}, {
  label: "Mauritania",
  value: "Mauritania"
}, {
  label: "Mauritius",
  value: "Mauritius"
}, {
  label: "Mayotte",
  value: "Mayotte"
}, {
  label: "Mexico",
  value: "Mexico"
}, {
  label: "Moldova",
  value: "Moldova"
}, {
  label: "Monaco",
  value: "Monaco"
}, {
  label: "Mongolia",
  value: "Mongolia"
}, {
  label: "Monteneg",
  value: "Monteneg"
}, {
  label: "Montserr",
  value: "Montserr"
}, {
  label: "Morocco",
  value: "Morocco"
}, {
  label: "Mozambique",
  value: "Mozambique"
}, {
  label: "Myanmar",
  value: "Myanmar"
}, {
  label: "Namibia",
  value: "Namibia"
}, {
  label: "Nauru",
  value: "Nauru"
}, {
  label: "Nepal",
  value: "Nepal"
}, {
  label: "Netherlands",
  value: "Netherlands"
}, {
  label: "New Caledonia",
  value: "New Caledonia"
}, {
  label: "New Zealand",
  value: "New Zealand"
}, {
  label: "Nicaragua",
  value: "Nicaragua"
}, {
  label: "Niger",
  value: "Niger"
}, {
  label: "Nigeria",
  value: "Nigeria"
}, {
  label: "Niue",
  value: "Niue"
}, {
  label: "Norfolk Island",
  value: "Norfolk Island"
}, {
  label: "Norway",
  value: "Norway"
}, {
  label: "Oman",
  value: "Oman"
}, {
  label: "Pakistan",
  value: "Pakistan"
}, {
  label: "Palau",
  value: "Palau"
}, {
  label: "Panama",
  value: "Panama"
}, {
  label: "Papua New Guinea",
  value: "Papua New Guinea"
}, {
  label: "Paraguay",
  value: "Paraguay"
}, {
  label: "Peru",
  value: "Peru"
}, {
  label: "Philippines",
  value: "Philippines"
}, {
  label: "Pitcairn",
  value: "Pitcairn"
}, {
  label: "Poland",
  value: "Poland"
}, {
  label: "Portugal",
  value: "Portugal"
}, {
  label: "Puerto Rico",
  value: "Puerto Rico"
}, {
  label: "Qatar",
  value: "Qatar"
}, {
  label: "Reunion",
  value: "Reunion"
}, {
  label: "Romania",
  value: "Romania"
}, {
  label: "Russia",
  value: "Russia"
}, {
  label: "RWANDA",
  value: "RWANDA"
}, {
  label: "Saint Helena",
  value: "Saint Helena"
}, {
  label: "Saint Kitts and Nevis",
  value: "Saint Kitts and Nevis"
}, {
  label: "Saint Lucia",
  value: "Saint Lucia"
}, {
  label: "Saint Pierre and Miquelon",
  value: "Saint Pierre and Miquelon"
}, {
  label: "Saint Vincent and the Grenadines",
  value: "Saint Vincent and the Grenadines"
}, {
  label: "Samoa",
  value: "Samoa"
}, {
  label: "San Marino",
  value: "San Marino"
}, {
  label: "Sao Tome and Principe",
  value: "Sao Tome and Principe"
}, {
  label: "Saudi Arabia",
  value: "Saudi Arabia"
}, {
  label: "Senegal",
  value: "Senegal"
}, {
  label: "Serbia",
  value: "Serbia"
}, {
  label: "Seychelles",
  value: "Seychelles"
}, {
  label: "Sierra Leone",
  value: "Sierra Leone"
}, {
  label: "Singapore",
  value: "Singapore"
}, {
  label: "Slovakia",
  value: "Slovakia"
}, {
  label: "Slovenia",
  value: "Slovenia"
}, {
  label: "Solomon Islands",
  value: "Solomon Islands"
}, {
  label: "Somalia",
  value: "Somalia"
}, {
  label: "South Africa",
  value: "South Africa"
}, {
  label: "Spain",
  value: "Spain"
}, {
  label: "Sri Lanka",
  value: "Sri Lanka"
}, {
  label: "Sudan",
  value: "Sudan"
}, {
  label: "Suriname",
  value: "Suriname"
}, {
  label: "Swaziland",
  value: "Swaziland"
}, {
  label: "Sweden",
  value: "Sweden"
}, {
  label: "Switzerland",
  value: "Switzerland"
}, {
  label: "Syrian",
  value: "Syrian"
}, {
  label: "Taiwan",
  value: "Taiwan"
}, {
  label: "Tajikistan",
  value: "Tajikistan"
}, {
  label: "Tanzania",
  value: "Tanzania"
}, {
  label: "Thailand",
  value: "Thailand"
}, {
  label: "Togo",
  value: "Togo"
}, {
  label: "Tokelau",
  value: "Tokelau"
}, {
  label: "Tonga",
  value: "Tonga"
}, {
  label: "Trinidad and Tobago",
  value: "Trinidad and Tobago"
}, {
  label: "Tunisia",
  value: "Tunisia"
}, {
  label: "Turkey",
  value: "Turkey"
}, {
  label: "Turkmenistan",
  value: "Turkmenistan"
}, {
  label: "Turks and Caicos Islands",
  value: "Turks and Caicos Islands"
}, {
  label: "Tuvalu",
  value: "Tuvalu"
}, {
  label: "Uganda",
  value: "Uganda"
}, {
  label: "Ukraine",
  value: "Ukraine"
}, {
  label: "United Arab Emirates",
  value: "United Arab Emirates"
}, {
  label: "United Kingdom",
  value: "United Kingdom"
}, {
  label: "United States",
  value: "United States"
}, {
  label: "Uruguay",
  value: "Uruguay"
}, {
  label: "Uzbekistan",
  value: "Uzbekistan"
}, {
  label: "Vanuatu",
  value: "Vanuatu"
}, {
  label: "Venezuela",
  value: "Venezuela"
}, {
  label: "Viet Nam",
  value: "Viet Nam"
}, {
  label: "Virgin Islands",
  value: "Virgin Islands"
}, {
  label: "Wallis and Futuna",
  value: "Wallis and Futuna"
}, {
  label: "Western Sahara",
  value: "Western Sahara"
}, {
  label: "Yemen",
  value: "Yemen"
}, {
  label: "Zambia",
  value: "Zambia"
}, {
  label: "Zimbab",
  value: "Zimbab"
}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_javascript_utilities_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/javascript-utilities/decorators */ "@shopify/javascript-utilities/decorators");
/* harmony import */ var _shopify_javascript_utilities_decorators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_javascript_utilities_decorators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/free-shipping-bar.module.css */ "./pages/styles/free-shipping-bar.module.css");
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datas_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datas/countries */ "./pages/datas/countries.js");
/* harmony import */ var country_currency_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! country-currency-data */ "country-currency-data");
/* harmony import */ var country_currency_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(country_currency_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _server_templateFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server/templateFunctions */ "./pages/server/templateFunctions.js");
/* harmony import */ var _server_backgroundFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server/backgroundFunctions */ "./pages/server/backgroundFunctions.js");
/* harmony import */ var _server_fontFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server/fontFunctions */ "./pages/server/fontFunctions.js");
/* harmony import */ var _server_barFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./server/barFunctions */ "./pages/server/barFunctions.js");
/* harmony import */ var _server_shopFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server/shopFunctions */ "./pages/server/shopFunctions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var datetime = __webpack_require__(/*! node-datetime */ "node-datetime");

class FreeShippingBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", event => {
      this.setState({
        bg_color_js: event.target.value
      });
    });

    _defineProperty(this, "onChange_sch_start", event => {
      this.setState({
        sch_start: event.target.value
      });
    });

    _defineProperty(this, "onChange_sch_end", event => {
      this.setState({
        sch_end: event.target.value
      });
    });

    _defineProperty(this, "handleContentToggle", () => {
      this.setState({
        content_active: !this.state.content_active
      });
    });

    _defineProperty(this, "handleCurrencyToggle", () => {
      this.setState({
        cur_active: !this.state.cur_active
      });
    });

    _defineProperty(this, "handleStyleToggle", () => {
      this.setState({
        style_active: !this.state.style_active
      });
    });

    _defineProperty(this, "handleTargetingToggle", () => {
      this.setState({
        targeting_active: !this.state.targeting_active
      });
    });

    _defineProperty(this, "handleCustomToggle", () => {
      this.setState({
        custome_code_active: !this.state.custome_code_active
      });
    });

    _defineProperty(this, "rgbaStringtoHsb", value => {
      const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
      let rgbaData = {
        red: rgbValues[0],
        green: rgbValues[1],
        blue: rgbValues[2]
      };
      let bg_color_t = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])(rgbaData);
      bg_color_t.alpha = rgbValues[3];
      return bg_color_t;
    });

    _defineProperty(this, "handleColorChange_bg", bg_color => {
      this.setState({
        bg_color
      });
    });

    _defineProperty(this, "handleRgbChange_bg", value => {
      const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
      let rgbaData = {
        red: rgbValues[0],
        green: rgbValues[1],
        blue: rgbValues[2]
      };
      let bg_color_t = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])(rgbaData);
      bg_color_t.alpha = rgbValues[3];
      this.setState({
        bg_color: bg_color_t
      });
    });

    _defineProperty(this, "handlePopoverClose_bg", () => {
      this.setState({
        bg_popoverActive: false
      });
    });

    _defineProperty(this, "handlePopoverOpen_bg", () => {
      this.setState({
        bg_popoverActive: true
      });
    });

    _defineProperty(this, "handleColorChange_text", text_color => {
      this.setState({
        text_color
      });
    });

    _defineProperty(this, "handleRgbChange_text", value => {
      const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
      const text_color = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
        red: rgbValues[0],
        green: rgbValues[1],
        blue: rgbValues[2]
      });
      this.setState({
        text_color
      });
    });

    _defineProperty(this, "handlePopoverClose_text", () => {
      this.setState({
        text_popoverActive: false
      });
    });

    _defineProperty(this, "handlePopoverOpen_text", () => {
      this.setState({
        text_popoverActive: true
      });
    });

    _defineProperty(this, "handleColorChange_special", special_color => {
      this.setState({
        special_color
      });
    });

    _defineProperty(this, "handleRgbChange_special", value => {
      const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
      const special_color = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
        red: rgbValues[0],
        green: rgbValues[1],
        blue: rgbValues[2]
      });
      this.setState({
        special_color
      });
    });

    _defineProperty(this, "handlePopoverClose_special", () => {
      this.setState({
        special_popoverActive: false
      });
    });

    _defineProperty(this, "handlePopoverOpen_special", () => {
      this.setState({
        special_popoverActive: true
      });
    });

    _defineProperty(this, "init", () => {
      this.setState({
        showForm: false
      });
      this.setState({
        bar_id: 0
      });
      this.setState({
        template_id: 0
      });
      this.setState({
        background_id: 0
      });
      Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["getBarList"])().then(datas => {
        this.setState({
          bars: [...datas.bar]
        });
        this.setState({
          templates: [...datas.templates]
        });
        this.setState({
          fonts: [...datas.fonts]
        });
        this.setState({
          backgrounds: [...datas.backgrounds]
        });
      }); // getBarList().then(datas => {
      //     this.setState({bars: [...datas]}, () => 
      //     {
      //     }
      //   )
      // })
      // getTemplateList().then(datas => {
      //   this.setState({templates: [...datas]}, 
      //     () => {
      //     }
      //   )
      // })
      // getFontList().then(datas => {
      //   this.setState({fonts: [...datas]}, 
      //     () => {
      //     }
      //   )
      // })
      // getBackgroundList().then(datas => {
      //   this.setState({backgrounds: [...datas]}, 
      //     () => {
      //     }
      //   )
      // })
    });

    _defineProperty(this, "onPause", data => {
      let pause_data = {
        id: data.id
      };
      Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["pauseBar"])(pause_data).then(rdata => {
        if (rdata.status == "success") {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Successfully Paused", {
            icon: "success"
          });
          this.init();
        } else {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", {
            icon: "warning"
          });
        }
      });
    });

    _defineProperty(this, "onActivate", data => {
      let activate_data = {
        id: data.id,
        shop_id: data.shop_id
      };
      Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["activateBar"])(activate_data).then(rdata => {
        if (rdata.status == "success") {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Successfully Activated", {
            icon: "success"
          });
          this.init();
        } else {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", {
            icon: "warning"
          });
        }
      });
    });

    _defineProperty(this, "onDuplicate", id => {
      Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["duplicateBar"])(id).then(data => {
        if (data.status == "success") {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Successfully Duplicated", {
            icon: "success"
          });
          this.init();
        } else {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", {
            icon: "warning"
          });
        }
      });
    });

    _defineProperty(this, "onDelete", id => {
      sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover bar!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["deleteBar"])(id).then(data => {
            if (data.status == "success") {
              sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Successfully Deleted", {
                icon: "success"
              });
              this.init();
            } else {
              sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", {
                icon: "warning"
              });
            }
          });
        } else {
          return;
        }
      });
    });

    _defineProperty(this, "handleCancel", e => {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      this.setState({
        showForm: false
      });
      return false;
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      let submit_data = {
        shop_id: this.state.shop_id,
        bar_id: this.state.bar_id,
        template_id: this.state.template_id,
        background_id: this.state.background_id,
        img: this.state.img,
        name: this.state.name,
        goal: this.state.goal,
        goal_sec: this.state.is_sec_goal == 1 ? this.state.goal_sec : 0,
        init_msg_start: this.state.init_msg_start,
        init_msg_end: this.state.init_msg_end,
        is_sec_goal: this.state.is_sec_goal,
        progress_msg_sec_start: this.state.progress_msg_sec_start,
        progress_msg_sec_end: this.state.progress_msg_sec_end,
        progress_msg_start: this.state.progress_msg_start,
        progress_msg_end: this.state.progress_msg_end,
        goal_msg: this.state.goal_msg,
        link_opt: this.state.link_opt,
        link_url: this.state.link_url,
        is_link_new: this.state.is_link_new,
        is_close_btn: this.state.is_close_btn,
        position: Array.isArray(this.state.position) ? this.state.position[0] : this.state.position,
        currency: this.state.currency,
        cur_symbol: this.state.cur_symbol,
        is_auto_cur: this.state.is_auto_cur,
        bg_color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.bg_color)),
        text_color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        special_color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color)),
        bg_color_opacity: this.state.bg_color_opacity,
        font_size: this.state.font_size,
        font_family: this.state.font_family,
        padding: this.state.padding,
        disp_after: this.state.disp_after,
        delay_before: this.state.delay_before,
        time_fade: this.state.time_fade,
        display_page: Array.isArray(this.state.display_page) ? this.state.display_page[0] : this.state.display_page,
        exclude_page: Array.isArray(this.state.exclude_page) ? this.state.exclude_page[0] : this.state.exclude_page,
        dev_target: Array.isArray(this.state.dev_target) ? this.state.dev_target[0] : this.state.dev_target,
        schedule: Array.isArray(this.state.schedule) ? this.state.schedule[0] : this.state.schedule,
        custom_code: this.state.custom_code,
        display_url: this.state.display_url,
        display_keyword: this.state.display_keyword,
        exclude_keyword: this.state.exclude_keyword,
        exclude_url: this.state.exclude_url,
        sch_start: this.state.sch_start,
        sch_end: this.state.sch_end
      };
      Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["addBar"])(submit_data).then(data => {
        if (data.status == 'success') {
          this.init();
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: data.err_msg,
            icon: "success"
          });
        } else {
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: data.err_msg,
            icon: "warning"
          });
        }
      });
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    _defineProperty(this, "onCreate", () => {
      this.setState({
        showForm: true
      });
      this.setState({
        template_id: 0
      });
    });

    _defineProperty(this, "onEdit", bar => {
      this.setState({
        showForm: true,
        shop_id: bar.shop_id,
        bar_id: bar.id,
        template_id: bar.template_id,
        background_id: bar.background_id,
        img: bar.img,
        name: bar.name,
        goal: String(bar.goal),
        goal_sec: String(bar.goal_sec),
        init_msg_start: bar.init_msg_start,
        init_msg_end: bar.init_msg_end,
        is_sec_goal: bar.is_sec_goal,
        progress_msg_sec_start: bar.progress_msg_sec_start,
        progress_msg_sec_end: bar.progress_msg_sec_end,
        progress_msg_start: bar.progress_msg_start,
        progress_msg_end: bar.progress_msg_end,
        goal_msg: bar.goal_msg,
        link_opt: bar.link_opt,
        link_url: bar.link_url,
        is_link_new: bar.is_link_new,
        is_close_btn: bar.is_close_btn,
        position: bar.position,
        currency: bar.currency,
        cur_symbol: bar.cur_symbol,
        is_auto_cur: bar.is_auto_cur,
        bg_color: this.rgbaStringtoHsb(bar.bg_color),
        text_color: this.rgbaStringtoHsb(bar.text_color),
        special_color: this.rgbaStringtoHsb(bar.special_color),
        bg_color_opacity: bar.bg_color_opacity,
        font_size: String(bar.font_size),
        font_family: bar.font_family,
        padding: String(bar.padding),
        disp_after: String(bar.disp_after),
        delay_before: String(bar.delay_before),
        time_fade: String(bar.time_fade),
        display_page: bar.display_page,
        exclude_page: bar.exclude_page,
        dev_target: bar.dev_target,
        schedule: bar.schedule,
        custom_code: bar.custom_code,
        display_keyword: bar.display_keyword,
        display_url: bar.display_url,
        exclude_keyword: bar.exclude_keyword,
        exclude_url: bar.exclude_url,
        sch_start: bar.sch_start,
        sch_end: bar.sch_end
      });
    });

    _defineProperty(this, "onTemplate", template => {
      this.setState({
        template_id: template.id
      });

      if (template.type == 0) {
        this.setState({
          bg_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(template.bg_color, 1))),
          text_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(template.text_color, 1))),
          special_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(template.special_color, 1))),
          font_size: String(template.font_size),
          font_family: template.font_family
        });
      } else {
        this.setState({
          img: template.img,
          bg_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(template.bg_color, 0))),
          text_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(template.text_color, 1))),
          special_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(template.special_color, 1))),
          font_size: String(template.font_size),
          font_family: template.font_family
        });
      }
    });

    _defineProperty(this, "onBackgroundSetting", background => {
      this.setState({
        background_id: background.id
      });
      console.log(this.state.bg_color);
      var bg_color_t = this.state.bg_color;
      bg_color_t.alpha = "0";
      this.setState({
        bg_color: bg_color_t
      });
      this.setState({
        img: background.img,
        text_color: this.rgbaStringtoHsb(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(this.hexToRgba(background.text_color, 1)))
      });
    });

    _defineProperty(this, "onSecGoal", () => {
      this.setState({
        is_sec_goal: this.state.is_sec_goal == 1 ? 0 : 1
      });
    });

    _defineProperty(this, "onCurrency", value => {
      let symbolbyCdoe = country_currency_data__WEBPACK_IMPORTED_MODULE_6___default.a.filter(item => item.code == value);
      this.setState({
        currency: value
      });
      this.setState({
        cur_symbol: symbolbyCdoe[0].symbol
      });
    });

    _defineProperty(this, "onAutoCurrency", value => {
      if (this.state.is_auto_cur == 'off') {
        Object(_server_shopFunctions__WEBPACK_IMPORTED_MODULE_12__["getShopInfo"])().then(data => {
          var cur_symbol_item = country_currency_data__WEBPACK_IMPORTED_MODULE_6___default.a.filter(item => item.code == data);
          this.setState({
            currency: data,
            cur_symbol: cur_symbol_item[0].symbol
          });
        });
      }

      this.setState({
        is_auto_cur: this.state.is_auto_cur == 'on' ? 'off' : 'on'
      });
    });

    _defineProperty(this, "onFont", font => {
      this.setState({
        font_family: font.name
      });
    });

    let cur_data = [];
    var today_datetime_create = datetime.create();
    var today_dateTime = today_datetime_create.format('Y-m-dTH:M');
    var today_datetime_create_end = datetime.create();
    today_datetime_create_end.offsetInDays(3);
    var today_dateTime_end = today_datetime_create_end.format('Y-m-dTH:M');
    country_currency_data__WEBPACK_IMPORTED_MODULE_6___default.a.map((citem, index) => {
      cur_data.push({
        label: citem.country + ' - ' + citem.code,
        value: citem.code
      });
    });
    this.state = {
      img: '',
      shop_id: 0,
      bar_id: 0,
      template_id: 0,
      background_id: 0,
      bg_color_js: 'eeeeee',
      bars: [],
      fonts: [],
      templates: [],
      backgrounds: [],
      country_options: _datas_countries__WEBPACK_IMPORTED_MODULE_5__["countries"],
      position_options: [{
        label: 'Top bar pushes down the rest of the page',
        value: 'top_push_v1'
      }, {
        label: 'Top bar pushes down the rest of the page (always visible while scrolling)',
        value: 'top_push_sticky_v1'
      }, {
        label: 'Top bar overlaps top of the page',
        value: 'top_cover_nonsticky'
      }, {
        label: ' Top bar overlaps top of the page (always visible while scrolling)',
        value: 'top_cover'
      }, {
        label: 'Bottom bar overlaps bottom of the page (always visible while scrolling)',
        value: 'bottom_cover'
      } // {label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme.', value: 'inserted'},
      ],
      currencies: cur_data,
      name: 'My first free shipping bar',
      goal: '100',
      goal_sec: '150',
      init_msg_start: 'Free shipping for orders over',
      init_msg_end: '',
      goal_msg: "Congratulations! You've got free shipping",
      is_sec_goal: 0,
      progress_msg_start: 'Only',
      progress_msg_end: ' away from free shipping',
      progress_msg_sec_start: 'You got free shipping, Only ',
      progress_msg_sec_end: ' away from 2-day free shipping',
      link_opt: 'off',
      link_url: 'https://apps.shopify.com/partners/me',
      is_link_new: 0,
      is_close_btn: 'no',
      position: 'top_push_sticky_v1',
      currency: 'USD',
      cur_symbol: '$',
      is_auto_cur: 'off',
      bg_color: {
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.8
      },
      bg_popoverActive: false,
      text_popoverActive: false,
      special_popoverActive: false,
      text_color: {
        hue: 300,
        brightness: 1,
        saturation: 0.7
      },
      special_color: {
        hue: 300,
        brightness: 1,
        saturation: 0.7
      },
      bg_color_opacity: '1',
      font_size: '16',
      font_family: 'Helvetica',
      padding: '12',
      disp_after: '0',
      delay_before: '0',
      time_fade: '3.5',
      display_options: [{
        label: 'All pages',
        value: 'all'
      }, {
        label: 'Homepage only',
        value: 'home'
      }, {
        label: "Only on Page with URL (Copy and Paste the URL below)",
        value: 'url'
      }, {
        label: 'All pages',
        value: 'keyword'
      }],
      display_page: 'all',
      exclude_options: [{
        label: 'Do NOT exclude any page',
        value: 'no'
      }, {
        label: 'Homepage',
        value: 'home'
      }, {
        label: "Only exclude Page with URL (Copy and Paste the URL below)",
        value: 'url'
      }, {
        label: 'Only exclude Pages that contain the keyword in their URLs',
        value: 'keyword'
      }],
      exclude_page: 'no',
      dev_target_options: [{
        label: 'Display on both desktop and mobile browsers. On mobile browsers font size will be capped to achieve optimum display',
        value: 'desktop'
      }, {
        label: 'Display only on desktop browsers',
        value: 'desktp'
      }, {
        label: 'HomepageDisplay only on mobile browsers',
        value: 'mobile'
      }],
      dev_target: 'all',
      schedule_options: [{
        label: 'Always Display',
        value: 'no'
      }, {
        label: 'Only display within the giving period of time',
        value: 'yes'
      }],
      schedule: 'no',
      custom_code: '',
      showForm: false,
      content_active: true,
      style_active: true,
      targeting_active: true,
      custome_code_active: true,
      cur_active: true,
      display_url: '',
      display_keyword: '',
      exclude_keyword: '',
      exclude_url: '',
      sch_start: today_dateTime,
      sch_end: today_dateTime_end
    };
    this.onChange = this.onChange.bind(this);
    this.onChange_sch_start = this.onChange_sch_start.bind(this);
    this.onChange_sch_end = this.onChange_sch_end.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleColorChange_bg = this.handleColorChange_bg.bind(this);
    this.handleRgbChange_bg = this.handleRgbChange_bg.bind(this);
    Object(_server_barFunctions__WEBPACK_IMPORTED_MODULE_11__["getBarList"])().then(datas => {
      this.setState({
        bars: [...datas.bar]
      });
      this.setState({
        templates: [...datas.templates]
      });
      this.setState({
        fonts: [...datas.fonts]
      });
      this.setState({
        backgrounds: [...datas.backgrounds]
      });
    }); // getTemplateList().then(datas => {
    //   this.setState({templates: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
    // getFontList().then(datas => {
    //   this.setState({fonts: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
    // getBackgroundList().then(datas => {
    //   this.setState({backgrounds: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
  }

  //----bg_color----------
  hexToRgba(hex, alpha) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16),
      alpha: alpha
    } : {
      red: 0,
      green: 0,
      blue: 0,
      alpha: alpha
    };
  }

  render() {
    const {
      name,
      img,
      goal,
      goal_sec,
      init_msg_start,
      init_msg_end,
      progress_msg_start,
      progress_msg_end,
      progress_msg_sec_start,
      progress_msg_sec_end,
      goal_msg,
      link_opt,
      link_url,
      is_link_new,
      is_close_btn,
      position,
      position_options,
      currencies,
      currency,
      cur_symbol,
      is_auto_cur,
      bg_color,
      bg_popoverActive,
      text_popoverActive,
      special_popoverActive,
      text_color,
      special_color,
      bg_color_opacity,
      font_size,
      font_family,
      padding,
      disp_after,
      delay_before,
      time_fade,
      display_page,
      exclude_page,
      dev_target,
      display_options,
      exclude_options,
      dev_target_options,
      schedule_options,
      schedule,
      custom_code,
      bg_color_js,
      showForm,
      content_active,
      style_active,
      custome_code_active,
      targeting_active,
      cur_active,
      template_id,
      is_sec_goal,
      display_url,
      display_keyword,
      exclude_url,
      exclude_keyword,
      sch_end,
      sch_start
    } = this.state;
    const bg_rgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(bg_color));
    const text_rgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(text_color));
    const special_rgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(special_color));
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
      oneHalf: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Free Shipping Bar (FSB) Dashboard")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      onClick: this.onCreate
    }, "Create New Bar"))), __jsx("div", {
      className: "Polaris-DataTable"
    }, __jsx("div", {
      className: "Polaris-DataTable__ScrollContainer"
    }, __jsx("table", {
      id: "bars",
      className: "Polaris-DataTable__Table"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
    }, "Name"), __jsx("th", {
      className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
    }, "Geo Target"), __jsx("th", {
      className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
    }, "Excluded Countries"), __jsx("th", {
      className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
    }, "Actions"))), __jsx("tbody", null, this.state.bars.map((bar, index) => {
      const {
        id,
        name,
        countries,
        exclude_countries,
        is_active
      } = bar;
      return __jsx("tr", {
        className: "Polaris-DataTable__TableRow",
        key: bar.id
      }, __jsx("td", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        status: is_active == 1 ? "success" : "attention"
      }, is_active == 1 ? "Active" : "Pending")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, bar.name))), __jsx("td", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
      }, countries || 'All Countries'), __jsx("td", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
      }, exclude_countries || 'N/A'), __jsx("td", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "slim",
        onClick: this.onEdit.bind(this, bar),
        primary: true
      }, "Edit"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "slim",
        onClick: this.onDuplicate.bind(this, bar.id)
      }, "Duplicate"), bar.is_active == 1 ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "slim",
        onClick: this.onPause.bind(this, {
          id: bar.id
        })
      }, "Pause") : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "slim",
        onClick: this.onActivate.bind(this, {
          id: bar.id,
          shop_id: bar.shop_id
        })
      }, "Activate"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "slim",
        onClick: this.onDelete.bind(this, bar.id),
        destructive: true
      }, "Delete"))));
    })))))))), __jsx("div", {
      style: {
        display: showForm ? "block" : "none"
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit.bind(this)
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
      oneThird: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Basic Template",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, this.state.templates.map((template, index) => {
      if (template.type == 0) {
        return __jsx("div", {
          key: index,
          className: "fsb_tp_container"
        }, __jsx("div", {
          className: "fsbStyles.fsb_tb_content",
          style: {
            backgroundColor: template.bg_color,
            color: template.text_color,
            textAlign: "center",
            fontSize: template.font_size,
            fontWeight: "normal",
            lineheight: "20px",
            padding: "12px",
            fontFamily: template.font_family
          },
          onClick: this.onTemplate.bind(this, template)
        }, template.name));
      }
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
      oneThird: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Prenium Template",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, this.state.templates.map((template, index) => {
      if (template.type == 1) {
        return __jsx("div", {
          key: index,
          className: "fsb_tp_container"
        }, __jsx("div", {
          className: "fsbStyles.fsb_tb_content",
          style: {
            background: 'url(' + template.img + ')',
            color: template.text_color,
            textAlign: "center",
            fontSize: template.font_size,
            fontWeight: "normal",
            lineheight: "20px",
            padding: "12px",
            fontFamily: template.font_family
          },
          onClick: this.onTemplate.bind(this, template)
        }, template.name));
      }
    }))))), __jsx("div", {
      style: {
        display: template_id > 0 ? "block" : "none"
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Preview",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      style: {
        backgroundImage: 'url(' + this.state.img + ')'
      }
    }, __jsx("div", {
      id: "fsb_main_bar",
      className: "fsb_tb_content",
      style: {
        position: "relative",
        opacity: this.state.bg_color_opacity,
        backgroundColor: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.bg_color)),
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        textAlign: "center",
        fontSize: this.state.font_size + 'px',
        fontWeight: "normal",
        lineheight: "20px",
        padding: this.state.padding + 'px',
        fontFamily: this.state.font_family
      }
    }, this.state.init_msg_start, __jsx("span", {
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color))
      }
    }, " ", this.state.cur_symbol), __jsx("span", {
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color))
      }
    }, this.state.goal, " "), this.state.init_msg_end, this.state.is_close_btn == 'yes' ? __jsx("div", null, __jsx("a", {
      id: "fsb_close",
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#002B38",
        fontFamily: "Helvertical, Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        textDecoration: "none"
      }
    }, "X")) : ''))), __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      style: {
        backgroundImage: 'url(' + this.state.img + ')'
      }
    }, __jsx("div", {
      id: "fsb_main_bar",
      className: "fsb_tb_content",
      style: {
        position: "relative",
        opacity: this.state.bg_color_opacity,
        backgroundColor: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.bg_color)),
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        textAlign: "center",
        fontSize: this.state.font_size + 'px',
        fontWeight: "normal",
        lineheight: "20px",
        padding: this.state.padding + 'px',
        fontFamily: this.state.font_family
      }
    }, this.state.progress_msg_start, __jsx("span", {
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color))
      }
    }, " ", this.state.cur_symbol), __jsx("span", {
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color))
      }
    }, this.state.goal - 1, " "), this.state.progress_msg_end, this.state.is_close_btn == 'yes' ? __jsx("div", null, __jsx("a", {
      id: "fsb_close",
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#002B38",
        fontFamily: "Helvertical, Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        textDecoration: "none"
      }
    }, "X")) : ''))), __jsx("div", {
      className: "fsb_tp_container",
      style: {
        display: is_sec_goal == 1 ? 'block' : 'none'
      }
    }, __jsx("div", {
      style: {
        backgroundImage: 'url(' + this.state.img + ')'
      }
    }, __jsx("div", {
      id: "fsb_main_bar",
      className: "fsb_tb_content",
      style: {
        position: "relative",
        opacity: this.state.bg_color_opacity,
        backgroundColor: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.bg_color)),
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        textAlign: "center",
        fontSize: this.state.font_size + 'px',
        fontWeight: "normal",
        lineheight: "20px",
        padding: this.state.padding + 'px',
        fontFamily: this.state.font_family
      }
    }, this.state.progress_msg_sec_start, __jsx("span", {
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color))
      }
    }, " ", this.state.cur_symbol), __jsx("span", {
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.special_color))
      }
    }, this.state.goal_sec - 1, " "), this.state.progress_msg_sec_end, this.state.is_close_btn == 'yes' ? __jsx("div", null, __jsx("a", {
      id: "fsb_close",
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#002B38",
        fontFamily: "Helvertical, Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        textDecoration: "none"
      }
    }, "X")) : ''))), __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      style: {
        backgroundImage: 'url(' + this.state.img + ')'
      }
    }, __jsx("div", {
      id: "fsb_main_bar",
      className: "fsb_tb_content",
      style: {
        position: "relative",
        opacity: this.state.bg_color_opacity,
        backgroundColor: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.bg_color)),
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        textAlign: "center",
        fontSize: this.state.font_size + 'px',
        fontWeight: "normal",
        lineheight: "20px",
        padding: this.state.padding + 'px',
        fontFamily: this.state.font_family
      }
    }, this.state.goal_msg, this.state.is_close_btn == 'yes' ? __jsx("div", null, __jsx("a", {
      id: "fsb_close",
      style: {
        color: Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(this.state.text_color)),
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#002B38",
        fontFamily: "Helvertical, Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        textDecoration: "none"
      }
    }, "X")) : ''))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Content Configuration")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleContentToggle,
      ariaExpanded: content_active,
      ariaControls: "content-config"
    }, "Toggle"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Collapsible"], {
      open: content_active,
      id: "content-config",
      transition: {
        duration: '150ms',
        timingFunction: 'ease'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: name,
      onChange: this.handleChange('name'),
      label: "Name: ",
      type: "text",
      helpText: "For your own internal reference - only you can see it"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: goal,
      onChange: this.handleChange('goal'),
      label: "Free Shipping Goal: ",
      type: "number",
      helpText: "If no minimum order value is required, please set goal to 0"
    }), __jsx("div", {
      style: {
        display: is_sec_goal == 1 ? 'none' : 'block'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      onClick: this.onSecGoal.bind(this)
    }, "Add Secondary Goal")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx("div", {
      style: {
        display: is_sec_goal == 0 ? 'none' : 'block'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: goal_sec,
      onChange: this.handleChange('goal_sec'),
      label: "Free Shipping Secondary Goal: ",
      type: "number",
      helpText: "Secondary goal needs to be greater than the 1st free shipping goal"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      onClick: this.onSecGoal.bind(this)
    }, "Remove Secondary Goal")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: init_msg_start,
      onChange: this.handleChange('init_msg_start'),
      label: "Initial Message: ",
      type: "text",
      helpText: "Display when cart is empty"
    }), __jsx("div", {
      className: "fsb_msg_price"
    }, "$", this.state.goal), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: init_msg_end,
      onChange: this.handleChange('init_msg_end'),
      label: " ",
      type: "text"
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: progress_msg_start,
      onChange: this.handleChange('progress_msg_start'),
      label: "Progress Message: ",
      type: "text",
      helpText: "Displays when cart value is less than the goal"
    }), __jsx("div", {
      className: "fsb_msg_price"
    }, "$", this.state.goal - 1), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: progress_msg_end,
      onChange: this.handleChange('progress_msg_end'),
      label: " ",
      type: "text"
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx("div", {
      style: {
        display: is_sec_goal == 0 ? 'none' : 'block'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: progress_msg_sec_start,
      onChange: this.handleChange('progress_msg__sec_start'),
      label: "Progress Message for Secondary Goal:",
      type: "text",
      helpText: "Displays when cart value is higher than the 1st goal, but less than the secondary goal"
    }), __jsx("div", {
      className: "fsb_msg_price"
    }, "$", this.state.goal_sec - 1), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: progress_msg_sec_end,
      onChange: this.handleChange('progress_msg_sec_end'),
      label: " ",
      type: "text"
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: goal_msg,
      onChange: this.handleChange('goal_msg'),
      label: "Goal Achieved Message:: ",
      type: "text",
      helpText: "Displays when cart value is greater than goal"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Add Link to the Bar (optional):",
      options: [{
        label: 'ON',
        value: 'on'
      }, {
        label: 'OFF',
        value: 'off'
      }],
      onChange: this.handleChange('link_opt'),
      value: link_opt,
      helpText: "The bar will be clickable after adding a link"
    }), this.state.link_opt == 'on' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: link_url,
      onChange: this.handleChange('link_url'),
      label: "Link URL:",
      type: "text",
      helpText: "This address will be visited after clicking the bar"
    }) : '', this.state.link_opt == 'on' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      label: "Open the link in a NEW tab when clicked",
      checked: is_link_new,
      onChange: this.handleChange('is_link_new')
    }) : '', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Include Close Button:",
      options: [{
        label: 'YES',
        value: 'yes'
      }, {
        label: 'NO',
        value: 'no'
      }],
      onChange: this.handleChange('is_close_btn'),
      value: is_close_btn,
      helpText: "Places an \"x\" button on the bar so that users can close it manually"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Select a Display Position:",
      choices: position_options,
      selected: position,
      onChange: this.handleChange('position')
    })))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Currency Configuration")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleCurrencyToggle,
      ariaExpanded: cur_active,
      ariaControls: "cur-setting"
    }, "Toggle"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Collapsible"], {
      open: cur_active,
      id: "cur-setting",
      transition: {
        duration: '150ms',
        timingFunction: 'ease'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Currency:",
      options: currencies,
      onChange: this.onCurrency.bind(this),
      value: currency,
      helpText: "Places an \"x\" button on the bar so that users can close it manually"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: cur_symbol,
      onChange: this.handleChange('cur_symbol'),
      label: "Currency Symbol::",
      type: "text"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Auto Currency Conversion::",
      options: [{
        label: 'OFF',
        value: 'off'
      }, {
        label: 'ON',
        value: 'on'
      }],
      onChange: this.onAutoCurrency.bind(this),
      value: is_auto_cur,
      helpText: "NOTE: If native Shopify multi-currencies is configured on your store, this Currency Configuration will be disabled. You can enable this if your website supports auto-currency detection. FSB auto-converts the goal value to the visitors' local currency"
    })))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Style Configuration")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleStyleToggle,
      ariaExpanded: style_active,
      ariaControls: "style-config"
    }, "Toggle"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Collapsible"], {
      open: style_active,
      id: "style-config",
      transition: {
        duration: '150ms',
        timingFunction: 'ease'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: bg_popoverActive,
      activator: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.handlePopoverOpen_bg
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        alignment: "center",
        spacing: "tight"
      }, __jsx("div", {
        style: {
          height: "2rem",
          width: "2rem",
          borderRadius: "0.3rem",
          background: bg_rgbaColor
        }
      }), __jsx("span", null, "Background Color"))),
      onClose: this.handlePopoverClose_bg
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleColorChange_bg.bind(this),
      color: bg_color,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: bg_rgbaColor,
      onChange: this.handleRgbChange_bg.bind(this)
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: text_popoverActive,
      activator: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.handlePopoverOpen_text
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        alignment: "center",
        spacing: "tight"
      }, __jsx("div", {
        style: {
          height: "2rem",
          width: "2rem",
          borderRadius: "0.3rem",
          background: text_rgbaColor
        }
      }), __jsx("span", null, "Text Color"))),
      onClose: this.handlePopoverClose_text
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleColorChange_text,
      color: text_color,
      allowAlpha: false
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: text_rgbaColor,
      onChange: this.handleRgbChange_text
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: special_popoverActive,
      activator: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.handlePopoverOpen_special
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        alignment: "center",
        spacing: "tight"
      }, __jsx("div", {
        style: {
          height: "2rem",
          width: "2rem",
          borderRadius: "0.3rem",
          background: special_rgbaColor
        }
      }), __jsx("span", null, "Special Color"))),
      onClose: this.handlePopoverClose_special
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleColorChange_special,
      color: special_color,
      allowAlpha: false
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: special_rgbaColor,
      onChange: this.handleRgbChange_special
    })))), "Background Images:", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, this.state.backgrounds.map((background, index) => {
      return __jsx("div", {
        key: index,
        style: {
          cursor: "pointer",
          margin: "10px 0",
          padding: "10px 50px",
          textAlign: "center",
          fontSize: background.font_size,
          color: background.text_color,
          fontFamily: background.font_family,
          background: 'url(' + background.img + ')'
        },
        onClick: this.onBackgroundSetting.bind(this, background)
      }, background.name);
    })))), "Fonts:", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, this.state.fonts.map((font, index) => {
      if (font.name == this.state.font_family) {
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          primary: true,
          key: index,
          calssName: "fsb_font_btn",
          onClick: this.onFont.bind(this, font)
        }, __jsx("font", {
          style: {
            fontFamily: font.name
          }
        }, font.name));
      } else {
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          style: {
            fontFamily: font.name
          },
          key: index,
          calssName: "fsb_font_btn",
          onClick: this.onFont.bind(this, font)
        }, __jsx("font", {
          style: {
            fontFamily: font.name
          }
        }, font.name));
      }
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: font_size,
      onChange: this.handleChange('font_size'),
      label: "Font Size:",
      type: "number",
      helperText: "Bar height is determined by Font Size and Bar Padding",
      prefix: "PX"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: padding,
      onChange: this.handleChange('padding'),
      label: "Bar Padding:",
      type: "number",
      helperText: "Space between the text and the upper/lower borders",
      prefix: "PX"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: disp_after,
      onChange: this.handleChange('disp_after'),
      label: "Disappear After:",
      type: "text",
      helperText: "Bar will not disappear if set to 0.",
      prefix: "Seconds"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: delay_before,
      onChange: this.handleChange('delay_before'),
      label: "Delay Before Repeating:",
      type: "number",
      helperText: "Wait this many seconds to show Free Shipping Bar again (unless cart value changes)",
      prefix: "Seconds"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: time_fade,
      onChange: this.handleChange('time_fade'),
      label: "Time to Fade In/Out:",
      type: "number",
      helperText: "Bar will not fade if set to 0",
      prefix: "Seconds"
    })))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Targeting Configuration")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleTargetingToggle,
      ariaExpanded: targeting_active,
      ariaControls: "target-config"
    }, "Toggle"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Collapsible"], {
      open: targeting_active,
      id: "target-config",
      transition: {
        duration: '150ms',
        timingFunction: 'ease'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Display on Page:",
      choices: display_options,
      selected: display_page,
      onChange: this.handleChange('display_page')
    }), this.state.display_page == 'url' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: display_url,
      onChange: this.handleChange('display_url'),
      label: "Display URL: ",
      type: "text",
      helpText: "Input the link address above (you can copy and paste the page URL directly into the field)"
    }) : '', this.state.display_page == 'keyword' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: display_keyword,
      onChange: this.handleChange('display_keyword'),
      label: "Display Keyword: ",
      type: "text",
      helpText: "Input the Keywords above. Use commas to separate if there are multiple keywords. The bar displays if any keyword is matched"
    }) : '', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Exclude Page:",
      choices: exclude_options,
      selected: exclude_page,
      onChange: this.handleChange('exclude_page')
    }), this.state.exclude_page == 'url' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: exclude_url,
      onChange: this.handleChange('exclude_url'),
      label: "Exclude URL: ",
      type: "text",
      helpText: "Input the link address above (you can copy and paste the page URL directly into the field)"
    }) : '', this.state.exclude_page == 'keyword' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: exclude_keyword,
      onChange: this.handleChange('exclude_keyword'),
      label: "Exclude Keyword: ",
      type: "text",
      helpText: "Input the Keywords above. Use commas to separate if there are multiple keywords. The bar does not display if any keyword is matched."
    }) : '', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Device Target:",
      choices: dev_target_options,
      selected: dev_target,
      onChange: this.handleChange('dev_target')
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Display Schedule:",
      choices: schedule_options,
      selected: schedule,
      onChange: this.handleChange('schedule')
    }), __jsx("div", {
      style: {
        display: this.state.schedule == 'yes' ? 'block' : 'none'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx("input", {
      type: "datetime-local",
      className: "datetimepicker",
      value: sch_start,
      onChange: this.onChange_sch_start.bind(this)
    }), "-", __jsx("input", {
      type: "datetime-local",
      className: "datetimepicker",
      value: sch_end,
      onChange: this.onChange_sch_end.bind(this)
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Caption"], null, "Define the Start Time and End Time of the display period, minimum duration is 24 hours"))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Custom Code Configuration")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleCustomToggle,
      ariaExpanded: custome_code_active,
      ariaControls: "custom-config"
    }, "Toggle"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Collapsible"], {
      open: custome_code_active,
      id: "custom-config",
      transition: {
        duration: '150ms',
        timingFunction: 'ease'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Custom Code:",
      value: custom_code,
      onChange: this.handleChange('custom_code'),
      multiline: true
    }), __jsx("p", null, "Horizontal Zoom: Good for displaying a pattern based background image"), __jsx("p", null, "Vertical Scroll: A Background image scrolled vertically. Good for showing a product image."))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      distribution: "trailing"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleCancel.bind(this)
    }, "Cancel"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Save")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FreeShippingBar);

/***/ }),

/***/ "./pages/server/backgroundFunctions.js":
/*!*********************************************!*\
  !*** ./pages/server/backgroundFunctions.js ***!
  \*********************************************/
/*! exports provided: getBackgroundList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundList", function() { return getBackgroundList; });
const axios = __webpack_require__(/*! axios */ "axios");

const getBackgroundList = () => {
  return axios.post('/fsb/api/fsb_backgrounds', {}, {
    headers: {
      'Content-Type': 'application-json'
    }
  }).then(res => {
    return res.data;
  });
};

/***/ }),

/***/ "./pages/server/barFunctions.js":
/*!**************************************!*\
  !*** ./pages/server/barFunctions.js ***!
  \**************************************/
/*! exports provided: getBarList, addBar, duplicateBar, deleteBar, activateBar, pauseBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarList", function() { return getBarList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBar", function() { return addBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateBar", function() { return duplicateBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBar", function() { return deleteBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateBar", function() { return activateBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseBar", function() { return pauseBar; });
const axios = __webpack_require__(/*! axios */ "axios");

const getBarList = () => {
  return axios.post(`/fsb/api/fsb_bardatas`, {
    headers: {
      'Content-Type': 'application-json'
    }
  }).then(res => {
    return res.data;
  });
};
const addBar = bar => {
  return axios.post(`/fsb/api/fsb_addbar`, {
    bar
  }).then(res => {
    return res.data;
  });
};
const duplicateBar = id => {
  return axios.post(`/fsb/api/fsb_duplicatebar`, {
    id
  }).then(res => {
    return res.data;
  });
};
const deleteBar = id => {
  return axios.post(`/fsb/api/fsb_deletebar`, {
    id
  }).then(res => {
    return res.data;
  });
};
const activateBar = data => {
  return axios.post(`/fsb/api/fsb_activate`, {
    data
  }).then(res => {
    return res.data;
  });
};
const pauseBar = data => {
  return axios.post(`/fsb/api/fsb_pause`, {
    data
  }).then(res => {
    return res.data;
  });
};

/***/ }),

/***/ "./pages/server/fontFunctions.js":
/*!***************************************!*\
  !*** ./pages/server/fontFunctions.js ***!
  \***************************************/
/*! exports provided: getFontList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontList", function() { return getFontList; });
const axios = __webpack_require__(/*! axios */ "axios");

const getFontList = () => {
  return axios.post(`/fsb/api/fsb_fonts`, {
    headers: {
      'Content-Type': 'application-json'
    }
  }).then(res => {
    return res.data;
  });
};

/***/ }),

/***/ "./pages/server/shopFunctions.js":
/*!***************************************!*\
  !*** ./pages/server/shopFunctions.js ***!
  \***************************************/
/*! exports provided: getShopInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopInfo", function() { return getShopInfo; });
const axios = __webpack_require__(/*! axios */ "axios");

const getShopInfo = () => {
  let url = "/fsb/api/get_shop_info";
  return axios.post(url, {
    headers: {
      'Content-Type': 'application-json'
    }
  }).then(res => {
    return res.data;
  });
};

/***/ }),

/***/ "./pages/server/templateFunctions.js":
/*!*******************************************!*\
  !*** ./pages/server/templateFunctions.js ***!
  \*******************************************/
/*! exports provided: getTemplateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateList", function() { return getTemplateList; });
const axios = __webpack_require__(/*! axios */ "axios");

const getTemplateList = () => {
  return axios.post(`/fsb/api/fsb_templates`, {
    headers: {
      'Content-Type': 'application-json'
    }
  }).then(res => {
    return res.data;
  });
};

/***/ }),

/***/ "./pages/styles/free-shipping-bar.module.css":
/*!***************************************************!*\
  !*** ./pages/styles/free-shipping-bar.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WORSPACE\shopify\work\shopifyapp-shipping-bar\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/javascript-utilities/decorators":
/*!***********************************************************!*\
  !*** external "@shopify/javascript-utilities/decorators" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/javascript-utilities/decorators");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "country-currency-data":
/*!****************************************!*\
  !*** external "country-currency-data" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("country-currency-data");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "node-datetime":
/*!********************************!*\
  !*** external "node-datetime" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-datetime");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map