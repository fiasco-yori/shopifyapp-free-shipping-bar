webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/free-shipping-bar.module.css */ "./pages/styles/free-shipping-bar.module.css");
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var FreeShippingBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FreeShippingBar, _React$Component);

  var _super = _createSuper(FreeShippingBar);

  function FreeShippingBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FreeShippingBar);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSubmit", function () {
      _this.setState({
        name: _this.state.name,
        goal: _this.state.goal
      });

      console.log('submission', _this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, field, value));
      };
    });

    _this.state = {
      isColorPickerOpen: false,
      textValue: "",
      bars: [{
        id: 1,
        name: 'My first shipping bar 1',
        active: 0
      }, {
        id: 2,
        name: 'My first shipping bar 2',
        active: 1
      }],
      templates: [{
        id: 1,
        name: 'My first shipping template 1',
        img: 'template1.png'
      }, {
        id: 2,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 3,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 4,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 5,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 6,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }],
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
      }, {
        label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme.',
        value: 'inserted'
      }],
      currencies: [{
        label: 'United states - USD',
        value: '$'
      }, {
        label: 'United states - USD',
        value: '$'
      }, {
        label: 'United states - USD',
        value: '$'
      }],
      name: 'My first free shipping bar',
      goal: '100',
      goal_two: '150',
      init_msg_start: 'Free shipping for orders over',
      init_msg_end: '',
      goal_msg: "Congratulations! You've got free shipping",
      progress_msg_start: 'Only',
      progress_msg_end: ' away from free shipping',
      link_opt: 0,
      link_url: 'https://apps.shopify.com/partners/me',
      is_link_new: 0,
      is_close_btn: 0,
      position: 'top_push_sticky_v1',
      currency: '$',
      cur_symbol: '$',
      is_auto_cur: 0,
      bg_color: '#312e59'
    };
    _this.state.textValue = _this.props.color;
    _this.toggleColorPicker = _this.toggleColorPicker.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleTextChange = _this.handleTextChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FreeShippingBar, [{
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

      if (hex) {
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
      }

      var returnResult = {
        red: 0,
        green: 0,
        blue: 0
      };
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      if (result) {
        returnResult = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("returnResult"), {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16)
        });
      }

      return returnResult; // return result ? {
      //     red: parseInt(result[1], 16),
      //     green: parseInt(result[2], 16),
      //     blue: parseInt(result[3], 16)
      // } : null;
    }
  }, {
    key: "toggleColorPicker",
    value: function toggleColorPicker() {
      this.setState({
        isColorPickerOpen: !this.state.isColorPickerOpen
      });
    }
  }, {
    key: "formatHexToHsb",
    value: function formatHexToHsb(hex) {
      return Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["rgbToHsb"])(this.hexToRgb(hex));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.color !== this.props.color) {
        this.setState({
          textValue: nextProps.color
        });
      }
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(value) {
      this.setState({
        textValue: value
      });

      try {
        var color = this.hexToRgb(value);

        if (color) {
          this.props.onChange(value);
        }
      } catch (err) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _ref,
          _ref2,
          _ref3,
          _ref4,
          _ref5,
          _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          goal = _this$state.goal,
          goal_two = _this$state.goal_two,
          init_msg_start = _this$state.init_msg_start,
          init_msg_end = _this$state.init_msg_end,
          progress_msg_start = _this$state.progress_msg_start,
          progress_msg_end = _this$state.progress_msg_end,
          goal_msg = _this$state.goal_msg,
          link_opt = _this$state.link_opt,
          link_url = _this$state.link_url,
          is_link_new = _this$state.is_link_new,
          is_close_btn = _this$state.is_close_btn,
          position = _this$state.position,
          position_options = _this$state.position_options,
          currencies = _this$state.currencies,
          currency = _this$state.currency,
          cur_symbol = _this$state.cur_symbol,
          is_auto_cur = _this$state.is_auto_cur,
          bg_color = _this$state.bg_color;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, {
        oneHalf: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
        fill: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Heading"], null, "Free Shipping Bar (FSB) Dashboard")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true
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
      }, "Actions"))), __jsx("tbody", null, this.renderDashboardTableData()))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleSubmit
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, {
        oneThird: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        title: "Basic Template",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsbStyles.fsb_tb_content",
        style: (_ref = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "fontFamily", "Helvetica"), _ref)
      }, "Bold and Clear")), __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsb_tb_content",
        style: (_ref2 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "fontFamily", "Helvetica"), _ref2)
      }, "Bold and Clear"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, {
        oneThird: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        title: "Prenium Template",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsbStyles.fsb_tb_content",
        style: (_ref3 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref3, "fontFamily", "Helvetica"), _ref3)
      }, "Bold and Clear")), __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsb_tb_content",
        style: (_ref4 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref4, "fontFamily", "Helvetica"), _ref4)
      }, "Bold and Clear")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        title: "Preview",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsb_tb_content",
        style: (_ref5 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref5, "fontFamily", "Helvetica"), _ref5)
      }, "My first shipping bar1")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        title: "Content Configuration",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: name,
        onChange: this.handleChange('name'),
        label: "Name: ",
        type: "text",
        helpText: "For your own internal reference - only you can see it"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: goal,
        onChange: this.handleChange('goal'),
        label: "Free Shipping Goal: ",
        type: "number",
        helpText: "If no minimum order value is required, please set goal to 0"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true
      }, "Add Secondary Goal")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: goal_two,
        onChange: this.handleChange('goal_two'),
        label: "Free Shipping Secondary Goal: ",
        type: "number",
        helpText: "Secondary goal needs to be greater than the 1st free shipping goal"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true
      }, "Remove Secondary Goal")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: init_msg_start,
        onChange: this.handleChange('init_msg_start'),
        label: "Initial Message: ",
        type: "text",
        helpText: "Display when cart is empty"
      }), __jsx("div", {
        className: "fsb_msg_price"
      }, "$100"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: init_msg_end,
        onChange: this.handleChange('init_msg_end'),
        label: " ",
        type: "text"
      })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: progress_msg_start,
        onChange: this.handleChange('progress_msg_start'),
        label: "Progress Message: ",
        type: "text",
        helpText: "Displays when cart value is less than the goal"
      }), __jsx("div", {
        className: "fsb_msg_price"
      }, "$99"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: progress_msg_end,
        onChange: this.handleChange('progress_msg_end'),
        label: " ",
        type: "text"
      })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: goal_msg,
        onChange: this.handleChange('goal_msg'),
        label: "Goal Achieved Message:: ",
        type: "text",
        helpText: "Displays when cart value is greater than goal"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        label: "Add Link to the Bar (optional):",
        options: [{
          label: 'ON',
          value: 1
        }, {
          label: 'OFF',
          value: 0
        }],
        onChange: this.handleChange('link_opt'),
        value: link_opt,
        helpText: "The bar will be clickable after adding a link"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: link_url,
        onChange: this.handleChange('link_url'),
        label: "Link URL:",
        type: "text",
        helpText: "This address will be visited after clicking the bar"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], {
        label: "Open the link in a NEW tab when clicked",
        checked: is_link_new,
        onChange: this.handleChange('is_link_new')
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        label: "Include Close Button:",
        options: [{
          label: 'YES',
          value: 1
        }, {
          label: 'NO',
          value: 0
        }],
        onChange: this.handleChange('is_close_btn'),
        value: is_close_btn,
        helpText: "Places an \"x\" button on the bar so that users can close it manually"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ChoiceList"], {
        title: "Select a Display Position:",
        choices: position_options,
        selected: position,
        onChange: this.handleChange('position')
      }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        title: "Currency Configuration",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        label: "Currency:",
        options: currencies,
        onChange: this.handleChange('currency'),
        value: currency,
        helpText: "Places an \"x\" button on the bar so that users can close it manually"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
        value: cur_symbol,
        onChange: this.handleChange('cur_symbol'),
        label: "Currency Symbol::",
        type: "text"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        label: "Auto Currency Conversion::",
        options: [{
          label: 'OFF',
          value: 0
        }, {
          label: 'ON',
          value: 1
        }],
        onChange: this.handleChange('is_auto_cur'),
        value: is_auto_cur,
        helpText: "NOTE: If native Shopify multi-currencies is configured on your store, this Currency Configuration will be disabled. You can enable this if your website supports auto-currency detection. FSB auto-converts the goal value to the visitors' local currency"
      }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        title: "Style Configuration",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Popover"], {
        active: this.state.isColorPickerOpen,
        onClose: this.toggleColorPicker,
        activator: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          label: this.props.label,
          onChange: this.handleTextChange,
          value: this.state.textValue,
          connectedRight: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: this.toggleColorPicker
          }, __jsx("div", {
            className: "color-preview",
            style: {
              backgroundColor: this.props.color,
              width: '20px',
              height: '20px'
            }
          }))
        })
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ColorPicker"], {
        onChange: function onChange(color) {
          return _this2.props.onChange(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["hsbToHex"])(color));
        },
        color: this.formatHexToHsb(this.props.color)
      })))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        distribution: "trailing"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true,
        submit: true
      }, "Save"))));
    }
  }, {
    key: "renderDashboardTableData",
    value: function renderDashboardTableData() {
      return this.state.bars.map(function (bar, index) {
        var id = bar.id,
            name = bar.name;
        return __jsx("tr", {
          className: "Polaris-DataTable__TableRow",
          key: id
        }, __jsx("td", {
          className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          status: "success"
        }, "Active"), name)), __jsx("td", {
          className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          primary: true
        }, "Edit"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], null, "Duplicate"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], null, "Activate"))));
      });
    }
  }]);

  return FreeShippingBar;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(FreeShippingBar, "propTypes", {
  color: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (FreeShippingBar);

/***/ })

})
//# sourceMappingURL=index.js.aeac92720c24675c0ba2.hot-update.js.map