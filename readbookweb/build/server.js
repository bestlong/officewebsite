require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _extends2 = __webpack_require__(3);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _set = __webpack_require__(4);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(6);
  
  var _path = __webpack_require__(7);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(8);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(9);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _expressRequestLanguage = __webpack_require__(10);
  
  var _expressRequestLanguage2 = _interopRequireDefault(_expressRequestLanguage);
  
  var _bodyParser = __webpack_require__(11);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(12);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(13);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(14);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(16);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(17);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(18);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _reactIntl = __webpack_require__(19);
  
  __webpack_require__(20);
  
  var _App = __webpack_require__(24);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Html = __webpack_require__(37);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(39);
  
  var _ErrorPage2 = __webpack_require__(41);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(49);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(52);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(63);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(83);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(203);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _configureStore = __webpack_require__(204);
  
  var _configureStore2 = _interopRequireDefault(_configureStore);
  
  var _runtime = __webpack_require__(214);
  
  var _intl = __webpack_require__(102);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line import/no-unresolved
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use((0, _expressRequestLanguage2.default)({
    languages: _config.locales,
    queryName: 'lang',
    cookie: {
      name: 'lang',
      options: {
        path: '/',
        maxAge: 3650 * 24 * 3600 * 1000 },
      url: '/lang/{language}'
    }
  }));
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());
  
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: true,
      rootValue: { request: req },
      pretty: ("development") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
      var store, locale, css, context, route, data, html;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
  
              global.navigator = global.navigator || {};
              global.navigator.userAgent = req.headers['user-agent'] || 'all';
  
              _context.prev = 2;
              store = (0, _configureStore2.default)({
                user: req.user || null
              }, {
                cookie: req.headers.cookie
              });
  
  
              store.dispatch((0, _runtime.setRuntimeVariable)({
                name: 'initialNow',
                value: Date.now()
              }));
  
              store.dispatch((0, _runtime.setRuntimeVariable)({
                name: 'availableLocales',
                value: _config.locales
              }));
  
              locale = req.language;
              _context.next = 9;
              return store.dispatch((0, _intl.setLocale)({
                locale: locale
              }));
  
            case 9:
              css = new _set2.default();
  
              // Global (context) variables that can be easily accessed from any React component
              // https://facebook.github.io/react/docs/context.html
  
              context = {
                // Enables critical path CSS rendering
                // https://github.com/kriasoft/isomorphic-style-loader
                insertCss: function insertCss() {
                  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                    styles[_key] = arguments[_key];
                  }
  
                  // eslint-disable-next-line no-underscore-dangle
                  styles.forEach(function (style) {
                    return css.add(style._getCss());
                  });
                },
                // Initialize a new Redux store
                // http://redux.js.org/docs/basics/UsageWithReact.html
                store: store
              };
              _context.next = 13;
              return _universalRouter2.default.resolve(_routes2.default, (0, _extends3.default)({}, context, {
                path: req.path,
                query: req.query
              }));
  
            case 13:
              route = _context.sent;
  
              if (!route.redirect) {
                _context.next = 17;
                break;
              }
  
              res.redirect(route.status || 302, route.redirect);
              return _context.abrupt('return');
  
            case 17:
              data = (0, _extends3.default)({}, route);
  
              data.children = _server2.default.renderToString(_react2.default.createElement(
                _App2.default,
                { context: context },
                route.component
              ));
              data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
              data.script = _assets2.default.main.js;
              data.state = context.store.getState();
              data.lang = locale;
              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
              res.status(route.status || 200);
              res.send('<!doctype html>' + html);
              _context.next = 31;
              break;
  
            case 28:
              _context.prev = 28;
              _context.t0 = _context['catch'](2);
  
              next(_context.t0);
  
            case 31:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 28]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var locale = req.language;
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
        , lang: locale
      },
      _server2.default.renderToString(_react2.default.createElement(
        _reactIntl.IntlProvider,
        {
          locale: locale
        },
        _react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err })
      ))
    ));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express-request-language");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("react-intl");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _intlLocalesSupported = __webpack_require__(21);
  
  var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!(0, _intlLocalesSupported2.default)(_config.locales)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and replace the constructors with need with the polyfill's.
      var IntlPolyfill = __webpack_require__(23); // eslint-disable-line global-require
  
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = __webpack_require__(23); // eslint-disable-line global-require
  }

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("intl-locales-supported");

/***/ },
/* 22 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  // default locale is the first one
  var locales = exports.locales = ['en-US', 'cs-CZ'];
  
  //export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'mysql:polo:1314@localhost:8889/polodb';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("intl");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _reactTapEventPlugin = __webpack_require__(30);
  
  var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
  
  var _MuiThemeProvider = __webpack_require__(31);
  
  var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
  
  var _getMuiTheme = __webpack_require__(32);
  
  var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
  
  var _lightBaseTheme = __webpack_require__(33);
  
  var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
  
  var _grayBlue = __webpack_require__(34);
  
  var _grayBlue2 = _interopRequireDefault(_grayBlue);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
  (0, _reactTapEventPlugin2.default)(); /**
                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                         *
                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                         *
                                         * This source code is licensed under the MIT license found in the
                                         * LICENSE.txt file in the root directory of this source tree.
                                         */
  
  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired,
    // Integrate Redux
    // http://redux.js.org/docs/basics/UsageWithReact.html
    store: _react.PropTypes.shape({
      subscribe: _react.PropTypes.func.isRequired,
      dispatch: _react.PropTypes.func.isRequired,
      getState: _react.PropTypes.func.isRequired
    }).isRequired
  };
  var muiTheme = (0, _getMuiTheme2.default)({
    palette: {
      textColor: 'cyan500'
    },
    appBar: {
      height: 50
    }
  });
  
  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(<App context={context}><HomePage /></App>, container);
   */
  
  var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        var store = this.props.context && this.props.context.store;
        if (store) {
          this.unsubscribe = store.subscribe(function () {
            var state = store.getState();
            var newIntl = state.intl;
            if (_this2.intl !== newIntl) {
              _this2.intl = newIntl;
              console.log('Intl changed'); // eslint-disable-line no-console
              _this2.forceUpdate();
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        var store = this.props.context && this.props.context.store;
        var state = store && store.getState();
        this.intl = state && state.intl || {};
        var _intl = this.intl,
            initialNow = _intl.initialNow,
            locale = _intl.locale,
            messages = _intl.messages;
  
        var localeMessages = messages && messages[locale] || {};
        return _react2.default.createElement(
          _MuiThemeProvider2.default,
          { muiTheme: (0, _getMuiTheme2.default)(_grayBlue2.default) },
          _react2.default.createElement(
            _reactIntl.IntlProvider,
            {
              initialNow: initialNow,
              locale: locale,
              messages: localeMessages,
              defaultLocale: 'en-US'
            },
            _react2.default.Children.only(this.props.children)
          )
        );
      }
    }]);
    return App;
  }(_react2.default.Component);
  
  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
  exports.default = App;

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("react-tap-event-plugin");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/baseThemes/lightBaseTheme");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _colors = __webpack_require__(35);
  
  var _colorManipulator = __webpack_require__(36);
  
  exports.default = {
      spacing: {
          iconSize: 24,
          desktopGutter: 24,
          desktopGutterMore: 32,
          desktopGutterLess: 16,
          desktopGutterMini: 8,
          desktopKeylineIncrement: 64,
          desktopDropDownMenuItemHeight: 32,
          desktopDropDownMenuFontSize: 15,
          desktopLeftNavMenuItemHeight: 48,
          desktopSubheaderHeight: 48,
          desktopToolbarHeight: 56
      },
      fontFamily: 'Roboto, sans-serif',
      palette: {
          primary1Color: _colors.blue500,
          primary2Color: _colors.blue700,
          primary3Color: _colors.lightBlack,
          accent1Color: _colors.purpleA200,
          accent2Color: _colors.blueGrey100,
          accent3Color: _colors.blueGrey500,
          textColor: _colors.darkBlack,
          alternateTextColor: _colors.white,
          canvasColor: _colors.white,
          borderColor: _colors.grey300,
          disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
          pickerHeaderColor: _colors.blue500
      },
      avatar: {
          borderColor: null
      }
  };

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/colors");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("material-ui/utils/colorManipulator");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _serializeJavascript = __webpack_require__(38);
  
  var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        state = _ref.state,
        lang = _ref.lang,
        children = _ref.children;
  
    return _react2.default.createElement(
      'html',
      { className: 'no-js', lang: lang },
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style } })
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children } }),
        state && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: {
            __html: 'window.APP_STATE=' + (0, _serializeJavascript2.default)(state, { isJSON: true })
          }
        }),
        script && _react2.default.createElement('script', { src: script }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: {
            __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')')
          }
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true })
      )
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string,
    script: _react.PropTypes.string,
    state: _react.PropTypes.object,
    lang: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("serialize-javascript");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(41);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref) {
    var error = _ref.error;
  
    if (true) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          error.name
        ),
        _react2.default.createElement(
          'p',
          null,
          error.message
        ),
        _react2.default.createElement(
          'pre',
          null,
          error.stack
        )
      );
    }
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Error'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Sorry, a critical error occurred on this page.'
      )
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.propTypes = {
    error: _react.PropTypes.object.isRequired
  };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(42);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 43 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(45);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(46);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(47);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(48);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(50);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(51);
  
  var _models = __webpack_require__(52);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */
  
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }
  
                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });
  
              case 3:
                userLogin = _context.sent;
  
                if (!userLogin) {
                  _context.next = 8;
                  break;
                }
  
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;
  
              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 10:
                user = _context.sent;
  
                done(null, {
                  id: user.id,
                  email: user.email
                });
  
              case 12:
                _context.next = 32;
                break;
  
              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });
  
              case 16:
                users = _context.sent;
  
                if (!users.length) {
                  _context.next = 21;
                  break;
                }
  
                done(null, users[0]);
                _context.next = 32;
                break;
  
              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });
  
              case 23:
                _user = _context.sent;
  
                if (!_user) {
                  _context.next = 28;
                  break;
                }
  
                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;
  
              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailConfirmed: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 30:
                _user = _context.sent;
  
                done(null, {
                  id: _user.id,
                  email: _user.email
                });
  
              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));
  
      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();
  
    fooBar().catch(done);
  }));
  
  exports.default = _passport2.default;

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.YoutubeData = exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(53);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(55);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(56);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(57);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(58);
  
  var _UserProfile2 = _interopRequireDefault(_UserProfile);
  
  var _Events = __webpack_require__(59);
  
  var _Events2 = _interopRequireDefault(_Events);
  
  var _BookStudys = __webpack_require__(60);
  
  var _BookStudys2 = _interopRequireDefault(_BookStudys);
  
  var _YoutubeData = __webpack_require__(61);
  
  var _YoutubeData2 = _interopRequireDefault(_YoutubeData);
  
  var _Group = __webpack_require__(62);
  
  var _Group2 = _interopRequireDefault(_Group);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }
  
  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
  exports.UserProfile = _UserProfile2.default;
  exports.YoutubeData = _YoutubeData2.default;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //console.log(databaseUrl);
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });
  
  exports.default = sequelize;

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var User = _sequelize4.default.define('User', {
  
    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },
  
    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },
  
    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }
  
  }, {
  
    indexes: [{ fields: ['email'] }]
  
  });
  
  exports.default = User;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserLogin = _sequelize4.default.define('UserLogin', {
  
    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },
  
    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }
  
  });
  
  exports.default = UserLogin;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserClaim = _sequelize4.default.define('UserClaim', {
  
    type: {
      type: _sequelize2.default.STRING
    },
  
    value: {
      type: _sequelize2.default.INTEGER
    }
  
  });
  
  exports.default = UserClaim;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserProfile = _sequelize4.default.define('UserProfile', {
  
    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },
  
    displayName: {
      type: _sequelize2.default.STRING(100)
    },
  
    picture: {
      type: _sequelize2.default.STRING(255)
    },
  
    gender: {
      type: _sequelize2.default.STRING(50)
    },
  
    location: {
      type: _sequelize2.default.STRING(100)
    },
  
    website: {
      type: _sequelize2.default.STRING(255)
    }
  
  });
  
  exports.default = UserProfile;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //這邊已經有綁Model了 所以照理說 Events應該就是一個ORM
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Events = _sequelize4.default.define('Events', {
      id: {
          type: _sequelize2.default.UUID,
          defaultValue: _sequelize2.default.UUIDV1,
          primaryKey: true
      },
      title: {
          type: _sequelize2.default.STRING(255)
      },
      description: {
          type: _sequelize2.default.TEXT()
      },
      speaker: {
          type: _sequelize2.default.STRING(255)
      },
      startTime: {
          type: _sequelize2.default.STRING(255)
      },
      endTime: {
          type: _sequelize2.default.STRING(255)
      },
      parentGroupName: {
          type: _sequelize2.default.STRING(255)
      },
      parentGroupId: {
          type: _sequelize2.default.STRING(255)
      },
      privacy: {
          type: _sequelize2.default.STRING(255)
      },
      owner: {
          type: _sequelize2.default.STRING(255)
      },
      place: {
          type: _sequelize2.default.STRING(255)
      }
  
  });
  //console.log("Events",Events);
  //console.log("EventsTest");
  exports.default = Events;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //這邊已經有綁Model了 所以照理說 Events應該就是一個ORM
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var BookStudys = _sequelize4.default.define('BookStudys', {
      id: {
          type: _sequelize2.default.UUID,
          defaultValue: _sequelize2.default.UUIDV1,
          primaryKey: true
      },
      title: {
          type: _sequelize2.default.STRING(255)
      },
      picture: {
          type: _sequelize2.default.STRING(255)
      },
      memo: {
          type: _sequelize2.default.TEXT()
      },
      specialmemo: {
          type: _sequelize2.default.STRING(255)
      },
      publishedDate: {
          type: _sequelize2.default.STRING(255)
      }
  
  });
  //console.log("Events",Events);
  console.log("EventsTest");
  exports.default = BookStudys;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var YoutubeData = _sequelize4.default.define('YoutubeData', {
  
      id: {
          type: _sequelize2.default.UUID,
          defaultValue: _sequelize2.default.UUIDV1,
          primaryKey: true
      },
  
      videoId: {
          type: _sequelize2.default.STRING(255)
      },
  
      title: {
          type: _sequelize2.default.STRING(255)
  
      },
  
      description: {
          type: _sequelize2.default.STRING(255)
  
      },
      tags: {
          type: _sequelize2.default.STRING(255)
  
      }
  }, {
  
      indexes: [{ fields: ['videoId'] }]
  
  });
  
  exports.default = YoutubeData;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(53);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //這邊已經有綁Model了 所以照理說 Events應該就是一個ORM
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Group = _sequelize4.default.define('Group', {
      id: {
          type: _sequelize2.default.UUID,
          defaultValue: _sequelize2.default.UUIDV1,
          primaryKey: true
      },
      title: {
          type: _sequelize2.default.STRING(255)
      },
      description: {
          type: _sequelize2.default.TEXT()
      },
      cover: {
          type: _sequelize2.default.STRING(255)
      },
      groupId: {
          type: _sequelize2.default.STRING(255)
      },
      email: {
          type: _sequelize2.default.STRING(255)
      }
  
  });
  //console.log("Group",Group);
  //console.log("GroupTest");
  exports.default = Group;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var _me = __webpack_require__(65);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(67);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(73);
  
  var _news2 = _interopRequireDefault(_news);
  
  var _intl = __webpack_require__(77);
  
  var _intl2 = _interopRequireDefault(_intl);
  
  var _events = __webpack_require__(79);
  
  var _events2 = _interopRequireDefault(_events);
  
  var _youtube = __webpack_require__(81);
  
  var _youtube2 = _interopRequireDefault(_youtube);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        content: _content2.default,
        news: _news2.default,
        intl: _intl2.default,
        events2: _events2.default,
        Youtube: _youtube2.default
      }
    })
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = schema;

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(66);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(48);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(45);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var resolveExtension = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, extension) {
      var fileNameBase, ext, fileName;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
              ext = extension;
  
              if (!ext.startsWith('.')) {
                ext = '.' + extension;
              }
  
              fileName = fileNameBase + ext;
              _context.next = 6;
              return fileExists(fileName);
  
            case 6:
              if (_context.sent) {
                _context.next = 9;
                break;
              }
  
              fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
              fileName = fileNameBase + ext;
  
            case 9:
              _context.next = 11;
              return fileExists(fileName);
  
            case 11:
              if (_context.sent) {
                _context.next = 13;
                break;
              }
  
              return _context.abrupt('return', { success: false });
  
            case 13:
              return _context.abrupt('return', { success: true, fileName: fileName });
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function resolveExtension(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var resolveFileName = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path) {
      var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensions = ['.md', '.html'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 4;
              _iterator = (0, _getIterator3.default)(extensions);
  
            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 16;
                break;
              }
  
              extension = _step.value;
              _context2.next = 10;
              return resolveExtension(path, extension);
  
            case 10:
              maybeFileName = _context2.sent;
  
              if (!maybeFileName.success) {
                _context2.next = 13;
                break;
              }
  
              return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });
  
            case 13:
              _iteratorNormalCompletion = true;
              _context2.next = 6;
              break;
  
            case 16:
              _context2.next = 22;
              break;
  
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
  
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
  
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
  
            case 25:
              _context2.prev = 25;
  
              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }
  
              throw _iteratorError;
  
            case 28:
              return _context2.finish(25);
  
            case 29:
              return _context2.finish(22);
  
            case 30:
              return _context2.abrupt('return', { success: false, fileName: null, extension: null });
  
            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));
  
    return function resolveFileName(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  
  var _fs = __webpack_require__(68);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(7);
  
  var _bluebird = __webpack_require__(69);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(70);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(71);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(64);
  
  var _ContentType = __webpack_require__(72);
  
  var _ContentType2 = _interopRequireDefault(_ContentType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var md = new _markdownIt2.default();
  
  // A folder with Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseContent = function parseContent(path, fileContent, extension) {
    var fmContent = (0, _frontMatter2.default)(fileContent);
    var htmlContent = void 0;
    switch (extension) {
      case '.md':
        htmlContent = md.render(fmContent.body);
        break;
      case '.html':
        htmlContent = fmContent.body;
        break;
      default:
        return null;
    }
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var content = {
    type: _ContentType2.default,
    args: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref3, _ref4) {
      var _this = this;
  
      var request = _ref3.request;
      var path = _ref4.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ref5, success, fileName, extension, source;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return resolveFileName(path);
  
              case 2:
                _ref5 = _context3.sent;
                success = _ref5.success;
                fileName = _ref5.fileName;
                extension = _ref5.extension;
  
                if (success) {
                  _context3.next = 8;
                  break;
                }
  
                return _context3.abrupt('return', null);
  
              case 8:
                _context3.next = 10;
                return readFile(fileName, { encoding: 'utf8' });
  
              case 10:
                source = _context3.sent;
                return _context3.abrupt('return', parseContent(path, source, extension));
  
              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }))();
    }
  };
  
  exports.default = content;

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("markdown-it");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var ContentType = new _graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = ContentType;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(76);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default), //宣告type類型為GraphQLList
    resolve: function resolve() {
      //抓取網路資料
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(69);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(75);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _fs = __webpack_require__(68);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(7);
  
  var _bluebird = __webpack_require__(69);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _graphql = __webpack_require__(64);
  
  var _IntlMessageType = __webpack_require__(78);
  
  var _IntlMessageType2 = _interopRequireDefault(_IntlMessageType);
  
  var _config = __webpack_require__(22);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // A folder with messages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './messages');
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  
  var intl = {
    type: new _graphql.GraphQLList(_IntlMessageType2.default),
    args: {
      locale: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref, _ref2) {
      var _this = this;
  
      var request = _ref.request;
      var locale = _ref2.locale;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var localeData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_config.locales.includes(locale)) {
                  _context.next = 2;
                  break;
                }
  
                throw new Error('Locale \'' + locale + '\' not supported');
  
              case 2:
                localeData = void 0;
                _context.prev = 3;
                _context.next = 6;
                return readFile((0, _path.join)(CONTENT_DIR, locale + '.json'));
  
              case 6:
                localeData = _context.sent;
                _context.next = 13;
                break;
  
              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);
  
                if (!(_context.t0.code === 'ENOENT')) {
                  _context.next = 13;
                  break;
                }
  
                throw new Error('Locale \'' + locale + '\' not found');
  
              case 13:
                return _context.abrupt('return', JSON.parse(localeData));
  
              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[3, 9]]);
      }))();
    }
  };
  
  exports.default = intl;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var IntlMessageType = new _graphql.GraphQLObjectType({
    name: 'IntlMessage',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      defaultMessage: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      message: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString },
      files: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = IntlMessageType;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _graphql = __webpack_require__(64);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _EventsType = __webpack_require__(80);
  
  var _EventsType2 = _interopRequireDefault(_EventsType);
  
  var _Events = __webpack_require__(59);
  
  var _Events2 = _interopRequireDefault(_Events);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // <---這邊是 Models 避免名稱一樣用as轉到event2 
  //     ^ 會不會是這邊錯了 變成 {} 了看一下
  
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var datas = [];
  var events2 = {
      type: new _graphql.GraphQLList(_EventsType2.default),
      resolve: function resolve() {
          var _this = this;
  
          return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
              var datas;
              return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              _context.next = 2;
                              return _Events2.default.findAll();
  
                          case 2:
                              datas = _context.sent;
                              //這邊一定要用async
                              console.log(datas);
                              return _context.abrupt('return', datas);
  
                          case 5:
                          case 'end':
                              return _context.stop();
                      }
                  }
              }, _callee, _this);
          }))();
      }
  };
  
  exports.default = events2;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var EventsType = new _graphql.GraphQLObjectType({
      name: 'Events',
      fields: {
          title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
          startTime: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
          description: { type: _graphql.GraphQLString },
          speaker: { type: _graphql.GraphQLString }
      }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = EventsType;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _graphql = __webpack_require__(64);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _YoutubeType = __webpack_require__(82);
  
  var _YoutubeType2 = _interopRequireDefault(_YoutubeType);
  
  var _YoutubeData = __webpack_require__(61);
  
  var _YoutubeData2 = _interopRequireDefault(_YoutubeData);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // <---這邊是 Models 避免名稱一樣用as轉到event2 
  //     ^ 會不會是這邊錯了 變成 {} 了看一下
  
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var datas = [];
  var Youtube = {
      type: new _graphql.GraphQLList(_YoutubeType2.default),
      resolve: function resolve() {
          var _this = this;
  
          return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
              var datas;
              return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              _context.next = 2;
                              return _YoutubeData2.default.findAll();
  
                          case 2:
                              datas = _context.sent;
                              //這邊一定要用async
                              console.log(datas);
                              return _context.abrupt('return', datas);
  
                          case 5:
                          case 'end':
                              return _context.stop();
                      }
                  }
              }, _callee, _this);
          }))();
      }
  };
  
  exports.default = Youtube;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _graphql = __webpack_require__(64);
  
  var YoutubeType = new _graphql.GraphQLObjectType({
      name: 'Youtube',
      fields: {
          id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
          title: { type: _graphql.GraphQLString },
          videoId: { type: _graphql.GraphQLString },
          description: { type: _graphql.GraphQLString },
          tags: { type: _graphql.GraphQLString }
      }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = YoutubeType;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable global-require */
  
  // The top-level (parent) route
  exports.default = {
  
    path: '/',
  
    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(84).default, __webpack_require__(153).default, __webpack_require__(158).default, __webpack_require__(162).default, __webpack_require__(166).default, __webpack_require__(170).default, __webpack_require__(174).default, __webpack_require__(178).default, __webpack_require__(182).default, __webpack_require__(186).default, __webpack_require__(191).default,
  
    // place new routes before...
    __webpack_require__(195).default, __webpack_require__(199).default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = void 0;
  
                // Execute each child route until one of them return the result
                // TODO: move this logic to the `next` function
  
              case 1:
                _context.next = 3;
                return next();
  
              case 3:
                route = _context.sent;
  
              case 4:
                if (!route) {
                  _context.next = 1;
                  break;
                }
  
              case 5:
  
                // Provide default values for title, description etc.
                route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
                route.description = route.description || '';
  
                return _context.abrupt('return', route);
  
              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _MatchWork = __webpack_require__(85);
  
  var _MatchWork2 = _interopRequireDefault(_MatchWork);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'MatchWork';
  
  exports.default = {
  
      path: '/matchwork',
  
      action: function action() {
          return {
              title: title,
              component: _react2.default.createElement(_MatchWork2.default, { title: title })
          };
      }
  };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _MatchWork = __webpack_require__(151);
  
  var _MatchWork2 = _interopRequireDefault(_MatchWork);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function MatchWork(_ref) {
      var path = _ref.path,
          title = _ref.title,
          content = _ref.content;
  
      return _react2.default.createElement(
          _Layout2.default,
          null,
          _react2.default.createElement(
              'div',
              { className: _MatchWork2.default.root },
              _react2.default.createElement(
                  'div',
                  { className: _MatchWork2.default.container },
                  title && path !== '/' && _react2.default.createElement(
                      'h1',
                      null,
                      title
                  ),
                  _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content } })
              )
          )
      );
  }
  
  MatchWork.propTypes = {
      // path: PropTypes.string.isRequired,
      // content: PropTypes.string.isRequired,
      // title: PropTypes.string,
  };
  
  exports.default = (0, _withStyles2.default)(_MatchWork2.default)(MatchWork);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(87);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Header = __webpack_require__(89);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(116);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(119);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _reactRedux = __webpack_require__(101);
  
  var _Menu = __webpack_require__(122);
  
  var _Menu2 = _interopRequireDefault(_Menu);
  
  var _MenuEvent = __webpack_require__(134);
  
  var _MenuEvent2 = _interopRequireDefault(_MenuEvent);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //function Layout({ children }) {
  var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);
  
    function Layout(props) {
      (0, _classCallCheck3.default)(this, Layout);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
  
      _this.props = props;
      // console.log(this.props);
      return _this;
    }
  
    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        var children = this.props.children;
  
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          this.props.common.openMenuEvent && _react2.default.createElement(_MenuEvent2.default, null),
          !this.props.common.openMenuEvent && _react2.default.createElement(_Menu2.default, null),
          _react2.default.Children.only(children),
          _react2.default.createElement(_Footer2.default, null)
        );
      }
    }]);
    return Layout;
  }(_react.Component); /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };
  
  var mapState = function mapState(state) {
    return {
  
      common: state.common
  
    };
  };
  var mapDispatch = {};
  
  exports.default = (0, _reactRedux.connect)(mapState)((0, _withStyles2.default)(_Layout2.default)(Layout));

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(88);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em;\n  /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375;\n  /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\nspan[type=button] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important;\n    /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n  span[type=button] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;GAIG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;gFACgF;;AAEhF;;;;GAIG;;AAEH;;;;;;;;;;;UAWU,OAAO;EACf,eAAe;CAChB;;AAED;;GAEG;;AAEH;;;;EAIE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;;EAEE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAIE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAwB;UAAxB,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,cAAc,CAAC,OAAO;EACtB,UAAU,CAAC,OAAO;CACnB;;AAED;;GAEG;;AAEH;EACE,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,cAAc;CACf;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AD1ZD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;AFdD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,2DAAqC;EACrC,mBAAmB;EACnB,WAAW;CACZ;;AAED;EACE,eAAe;CAChB;;AAGD;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAGD;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAGD;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAGD;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAGD;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;EACE,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAGD;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAGD;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB;IACvB,+DAA+D;IAC/D,oCAA4B;YAA5B,4BAA4B;IAC5B,6BAA6B;GAC9B;EACD;;IAEE,2BAA2B;GAC5B;EACD;IACE,6BAA6B;GAC9B;EACD;IACE,8BAA8B;GAC/B;EACD;IACE,yBAAiB;OAAjB,sBAAiB;YAAjB,iBAAiB;GAClB;EACD;;;KAGG;EACH;;IAEE,YAAY;GACb;EACD;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;EACD;;;KAGG;EACH;IACE,4BAA4B;GAC7B;EACD;;IAEE,yBAAyB;GAC1B;EACD;IACE,2BAA2B;GAC5B;EACD;;;IAGE,WAAW;IACX,UAAU;GACX;EACD;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em;\n  /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375;\n  /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\nspan[type=button] {\n  appearance: none;\n}\n\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important;\n    /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n  span[type=button] {\n    appearance: none;\n  }\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}","/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _extends2 = __webpack_require__(3);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(90);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Link = __webpack_require__(92);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(96);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _LanguageSwitcher = __webpack_require__(100);
  
  var _LanguageSwitcher2 = _interopRequireDefault(_LanguageSwitcher);
  
  var _logoSmall = __webpack_require__(104);
  
  var _logoSmall2 = _interopRequireDefault(_logoSmall);
  
  var _AppBar = __webpack_require__(105);
  
  var _AppBar2 = _interopRequireDefault(_AppBar);
  
  var _reactRedux = __webpack_require__(101);
  
  var _test = __webpack_require__(106);
  
  var _common = __webpack_require__(107);
  
  var _IconButton = __webpack_require__(108);
  
  var _IconButton2 = _interopRequireDefault(_IconButton);
  
  var _IconMenu = __webpack_require__(109);
  
  var _IconMenu2 = _interopRequireDefault(_IconMenu);
  
  var _MenuItem = __webpack_require__(110);
  
  var _MenuItem2 = _interopRequireDefault(_MenuItem);
  
  var _toc = __webpack_require__(111);
  
  var _toc2 = _interopRequireDefault(_toc);
  
  var _chromeReaderMode = __webpack_require__(112);
  
  var _chromeReaderMode2 = _interopRequireDefault(_chromeReaderMode);
  
  var _dateRange = __webpack_require__(113);
  
  var _dateRange2 = _interopRequireDefault(_dateRange);
  
  var _assignmentInd = __webpack_require__(114);
  
  var _assignmentInd2 = _interopRequireDefault(_assignmentInd);
  
  var _redux = __webpack_require__(115);
  
  var _history = __webpack_require__(94);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Header = function (_Component) {
      (0, _inherits3.default)(Header, _Component);
  
      function Header(props) {
          (0, _classCallCheck3.default)(this, Header);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  
          _this.OpenMenu = function () {
              var setLeftmenu = _this.props.setLeftmenu;
  
  
              setLeftmenu({
  
                  openMenu: !_this.props.common.openstate,
                  openMenuEvent: false
  
              });
          };
  
          _this.OpenMenuEvent = function () {
              _history2.default.push('/events/');
          };
  
          _this.OpenMenuYoutube = function () {
              _history2.default.push('/youtube/');
          };
  
          _this.OpenMenuSpeaker = function () {
              _history2.default.push('/speaker/');
          };
  
          _this.props = props;
          //console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(Header, [{
          key: 'render',
          value: function render() {
              var _props = this.props,
                  common = _props.common,
                  test = _props.test;
              var OpenMenu = this.OpenMenu,
                  OpenMenuEvent = this.OpenMenuEvent,
                  OpenMenuYoutube = this.OpenMenuYoutube,
                  OpenMenuSpeaker = this.OpenMenuSpeaker;
  
  
              var MenuList = function MenuList(props) {
                  return _react2.default.createElement(
                      _IconMenu2.default,
                      (0, _extends3.default)({}, props, {
                          iconButtonElement: _react2.default.createElement(
                              _IconButton2.default,
                              null,
                              _react2.default.createElement(_toc2.default, { color: '#fff' }),
                              '  '
                          ),
                          targetOrigin: { horizontal: 'left', vertical: 'top' },
                          anchorOrigin: { horizontal: 'right', vertical: 'top' }
                      }),
                      _react2.default.createElement(_MenuItem2.default, { primaryText: '\u63A2\u7D22\u8B80\u66F8\u6703\u4E3B\u984C', leftIcon: _react2.default.createElement(_chromeReaderMode2.default, null), onTouchTap: OpenMenu }),
                      _react2.default.createElement(_MenuItem2.default, { primaryText: '\u89C0\u770B\u6D3B\u52D5\u65E5\u671F', leftIcon: _react2.default.createElement(_dateRange2.default, null), onTouchTap: OpenMenuEvent }),
                      _react2.default.createElement(_MenuItem2.default, { primaryText: '\u7CBE\u5F69\u904E\u5F80\u5F71\u7247', leftIcon: _react2.default.createElement(_assignmentInd2.default, null), onTouchTap: OpenMenuYoutube }),
                      _react2.default.createElement(_MenuItem2.default, { primaryText: '\u4E3B\u8B1B\u4ECB\u7D39', leftIcon: _react2.default.createElement(_assignmentInd2.default, null), onTouchTap: OpenMenuSpeaker })
                  );
              };
              return _react2.default.createElement(
                  'div',
                  { style: {
                          marginBottom: '2vh', width: '100%'
                      } },
                  _react2.default.createElement(_AppBar2.default, { iconElementLeft: _react2.default.createElement(MenuList, null), title: '\u7DDA\u4E0A\u8B80\u66F8\u6703' }),
                  common.openstate
              );
          }
          //這邊要很注意作用域的關系
  
      }, {
          key: 'handleChange',
          value: function handleChange() {
              var setTest = this.props.setTest;
  
              setTest({
                  name: 'polo'
              });
          }
      }]);
      return Header;
  }(_react.Component); /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  var mapState = function mapState(state) {
      return {
          test: state.test,
          common: state.common
  
      };
  };
  var mapDispatch = {
      setTest: _test.setTest,
      setLeftmenu: _common.setLeftmenu
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactIntl.injectIntl)((0, _withStyles2.default)(_Header2.default)(Header)));

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(91);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Header.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Header_root_3Gi {\n  background: #000;\n  color: #fff;\n}\n\n.Header_container_1rG {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header_brand_19l {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em;\n  /* ~28px */\n}\n\n.Header_brandTxt_2mi {\n  margin-left: 10px;\n}\n\n.Header_nav_1zC {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header_banner_2Lc {\n  text-align: center;\n}\n\n.Header_bannerTitle_2Qz {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header_bannerDesc_3mm {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}", "", {"version":3,"sources":["/./components/Header/Header.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADfD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;EACE,0BAAiD;EACjD,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;CACZ;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n:root {\n  --brand-color: #61dafb;\n}\n\n.root {\n  background: #000;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em;\n  /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Header_root_3Gi",
  	"container": "Header_container_1rG",
  	"brand": "Header_brand_19l",
  	"brandTxt": "Header_brandTxt_2mi",
  	"nav": "Header_nav_1zC",
  	"banner": "Header_banner_2Lc",
  	"bannerTitle": "Header_bannerTitle_2Qz",
  	"bannerDesc": "Header_bannerDesc_3mm"
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(3);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(93);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(94);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
        _history2.default.push(_this.props.to);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);
  
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick }),
          children
        );
      }
    }]);
    return Link;
  }(_react.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ },
/* 93 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(95);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (false) && (0, _createBrowserHistory2.default)();

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _classnames = __webpack_require__(97);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Navigation = __webpack_require__(98);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(92);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var messages = (0, _reactIntl.defineMessages)({
    about: {
      'id': 'navigation.about',
      'defaultMessage': 'About'
    },
    contact: {
      'id': 'navigation.contact',
      'defaultMessage': 'Contact'
    },
    login: {
      'id': 'navigation.login',
      'defaultMessage': 'Log in'
    },
    or: {
      'id': 'navigation.separator.or',
      'defaultMessage': 'or'
    },
    signup: {
      'id': 'navigation.signup',
      'defaultMessage': 'Sign up'
    }
  });
  
  function Navigation(_ref) {
    var className = _ref.className;
  
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_Navigation2.default.root, className), role: 'navigation' },
      _react2.default.createElement(
        _Link2.default,
        { className: _Navigation2.default.link, to: '/about' },
        _react2.default.createElement(_reactIntl.FormattedMessage, messages.about)
      ),
      _react2.default.createElement(
        _Link2.default,
        { className: _Navigation2.default.link, to: '/contact' },
        _react2.default.createElement(_reactIntl.FormattedMessage, messages.contact)
      ),
      _react2.default.createElement(
        'span',
        { className: _Navigation2.default.spacer },
        ' | '
      ),
      _react2.default.createElement(
        _Link2.default,
        { className: _Navigation2.default.link, to: '/login' },
        _react2.default.createElement(_reactIntl.FormattedMessage, messages.login)
      ),
      _react2.default.createElement(
        'span',
        { className: _Navigation2.default.spacer },
        _react2.default.createElement(_reactIntl.FormattedMessage, messages.or)
      ),
      _react2.default.createElement(
        _Link2.default,
        { className: (0, _classnames2.default)(_Navigation2.default.link, _Navigation2.default.highlight), to: '/register' },
        _react2.default.createElement(_reactIntl.FormattedMessage, messages.signup)
      )
    );
  }
  
  Navigation.propTypes = {
    className: _react.PropTypes.string
  };
  
  exports.default = (0, _withStyles2.default)(_Navigation2.default)(Navigation);

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(99);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation_root_Kev {\n  margin: 0;\n}\n\n.Navigation_link_1-r {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation_link_1-r,\n.Navigation_link_1-r:active,\n.Navigation_link_1-r:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation_link_1-r:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation_highlight_g6k {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation_highlight_g6k:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation_spacer_2KA {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/./components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;CACX;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  margin: 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Navigation_root_Kev",
  	"link": "Navigation_link_1-r",
  	"highlight": "Navigation_highlight_g6k",
  	"spacer": "Navigation_spacer_2KA"
  };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(101);
  
  var _intl = __webpack_require__(102);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function LanguageSwitcher(_ref) {
    var currentLocale = _ref.currentLocale,
        availableLocales = _ref.availableLocales,
        setLocale = _ref.setLocale;
  
    var isSelected = function isSelected(locale) {
      return locale === currentLocale;
    };
    var localeDict = {
      'en-US': 'English',
      'cs-CZ': 'Česky'
    };
    var localeName = function localeName(locale) {
      return localeDict[locale] || locale;
    };
    return _react2.default.createElement(
      'div',
      null,
      availableLocales.map(function (locale) {
        return _react2.default.createElement(
          'span',
          { key: locale },
          isSelected(locale) ? _react2.default.createElement(
            'span',
            null,
            localeName(locale)
          ) : _react2.default.createElement(
            'a',
            {
              href: '?lang=' + locale,
              onClick: function onClick(e) {
                setLocale({ locale: locale });
                e.preventDefault();
              }
            },
            localeName(locale)
          ),
          ' '
        );
      })
    );
  } /* eslint-disable no-shadow */
  
  LanguageSwitcher.propTypes = {
    currentLocale: _react.PropTypes.string.isRequired,
    availableLocales: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
    setLocale: _react.PropTypes.func.isRequired
  };
  
  var mapState = function mapState(state) {
    return {
      availableLocales: state.runtime.availableLocales,
      currentLocale: state.intl.locale
    };
  };
  
  var mapDispatch = {
    setLocale: _intl.setLocale
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(LanguageSwitcher);

/***/ },
/* 101 */
/***/ function(module, exports) {

  module.exports = require("react-redux");

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  exports.setLocale = setLocale;
  
  var _constants = __webpack_require__(103);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var query = '\n  query ($locale:String!) {\n    intl (locale:$locale) {\n      id\n      message\n    }\n  }\n'; /* eslint-disable import/prefer-default-export */
  
  function setLocale(_ref) {
    var _this = this;
  
    var locale = _ref.locale;
  
    return function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState, _ref3) {
        var graphqlRequest = _ref3.graphqlRequest;
  
        var _ref4, data, messages, maxAge;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _constants.SET_LOCALE_START,
                  payload: {
                    locale: locale
                  }
                });
  
                _context.prev = 1;
                _context.next = 4;
                return graphqlRequest(query, { locale: locale });
  
              case 4:
                _ref4 = _context.sent;
                data = _ref4.data;
                messages = data.intl.reduce(function (msgs, msg) {
                  msgs[msg.id] = msg.message; // eslint-disable-line no-param-reassign
                  return msgs;
                }, {});
  
                dispatch({
                  type: _constants.SET_LOCALE_SUCCESS,
                  payload: {
                    locale: locale,
                    messages: messages
                  }
                });
  
                // remember locale for every new request
                if (false) {
                  maxAge = 3650 * 24 * 3600; // 10 years in seconds
  
                  document.cookie = 'lang=' + locale + ';path=/;max-age=' + maxAge;
                }
                _context.next = 15;
                break;
  
              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);
  
                dispatch({
                  type: _constants.SET_LOCALE_ERROR,
                  payload: {
                    locale: locale,
                    error: _context.t0
                  }
                });
                return _context.abrupt('return', false);
  
              case 15:
                return _context.abrupt('return', true);
  
              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 11]]);
      }));
  
      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

/***/ },
/* 103 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint-disable import/prefer-default-export */
  
  var SET_RUNTIME_VARIABLE = exports.SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
  var SET_LOCALE_START = exports.SET_LOCALE_START = 'SET_LOCALE_START';
  var SET_LOCALE_SUCCESS = exports.SET_LOCALE_SUCCESS = 'SET_LOCALE_SUCCESS';
  var SET_LOCALE_ERROR = exports.SET_LOCALE_ERROR = 'SET_LOCALE_ERROR';
  var SET_LEFTMENU = exports.SET_LEFTMENU = 'SET_LEFTMENU';
  var INSERT_TABLE = exports.INSERT_TABLE = 'INSERT_TABLE';
  var SHOW_TABLE = exports.SHOW_TABLE = 'SHOW_TABLE';
  var SEND_ONEDATA = exports.SEND_ONEDATA = 'SEND_ONEDATA';

/***/ },
/* 104 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACrRJREFUeNqcWAlQlFcSnosBhmFmBAaVG0RAEBQVUUh2jRKjiKJGEfFE8YisGkw066rrmd2o5bWaaIyaQuMRo/EAiRG8SojxwAMFEQWEkUMYkBlmmHtmu//9f+rtXzhFQlXXPN7r192vX/fX/X4+x/4fF4gHxAcSADnQvwJ6jksThxhz6TU+zU/u4RH8dv/43TCKMUhIkyP9y2cZx+Z3ZPGTh/nThpFKGOFOBAlp5Xyaj+1Vht+Z4O/KMNu7DBPYMZoxDJU4i739xe/96+BIB1epXFtf+7p4x9p7quoKLayZgUxAFuKw1PVJA0NcBn+2JcbFy8/H1K5qLvzHwmuauhoNbRwaZaWpS8+8y5NC+rSiPhPSfOM2f3NY4OwSzjBYLea3bRWlh36dl3hc39JkJBTwnNw9hR8dyZshC4nI4PEFPZg9Zp227Pb6pRkvzx+rhX87gPRARuJQdq+SuUZHmkSjD+duAk9Flh/fn1mweNJ2LpdbiB6UBvSdEzZ94QhQ+Kz58V30mnP47L/1HbX/7D5xb9/xHU0N1yt+PPTV1cwp2/lCx0J59LCpntGx3qVHdl+ljbHSHrd1x2Nc2lsYHyJZnzC3iZce33n7/En2heQhh0nXx67dNThk6ryNPAcHSVn23i04Fz5n6VqryaSu+OnI+jtbsorJ0JiY82C+rG/EnPPjBsS2VZa30l7T0V6zsePILkyEpMwP4PJ4opbShw/p0xlpMoHikivzxy0ztLUqIuYu34iEY5zDNTr2GH4zePUhygpJyQgkEof7rgB/l2GUcc4ePakY0b6pa6dPxQQtrgve3C/Uvzjz/UUun++I9PzHQxdwjk4cLs1L7etobkQZHGcPTxlhFPePZGUnSJp1HdSEk8xdyuKnsi8wMcU/Iv3TJR3NDdU4GZnxWWbbizJFdd5pDWEcpctR5ib53yHr9SwctOsxNspT+NV4v7ANFx1lPXrDjwtJrj4BkrhNX6+2mk3G/PlJ+5BwjHO4xuIXOcncUAZHWXJPQwC2oKtr5XWB2gw4Ur/VOafUoKxd7BOIUOEKJIPrlQeNnx764eFLWUKJzKfl6YPf+89fEYWEY5zDNeRBXtwDJBF7B/RDWbX5Fzro5HJkVYZOe9i1jTmFC22EBLBLOqWgfJfAWSTVKZsUzp69Ah1EYo/ulhaMLVOHRqlraqyG2PKF0FCdSQjLAohRwZoaCONOSyQJwoiFSxRYIVFyRKGpC/qGz14629UvKAEwCE/M6XhT97JdUV1lUL1V+Y1Mmqypr31y64t5Bw1tLUZNvQKFc8Revi6OMnfh+1uPLBR7+UXWXsv92VHaQ+rqGxgk6ukdjDwWo6GtvbaqoOzo3qPPT333ggBbBnDNfFZtE/mOTPIceyx/U9C4aeuEUpl/e01lUX1RQUGP0MiYF2ezT9/4NC0/In35MGd5T+9bK9O3wVqzvqXZaDUarEgwNkHZ0amrKyoCk1ISTJr2lkupfzkFRurlA2OHVOWc3A8HbZcEBI/0Gzl+Zmhqhr/61csHwG8is55PFFrR8PV7Bw/+/MtsBxfXUOWT4oNXP5m85eGeDYU1V87VAKK/J5L3loC3GsJnZabX3bpy9uHeTQ/wSoOSUv1j1+xIDJ40K8pqNmveVjxVq2tedsijYmy9Y0ckqaqe3wtJmTcSMMycOyV+D1SQm4pruWfcw6PbwMBJAWM+ngSyH72++UszAUdUYHoHjJ0ydM4znXLmo7fPgifOGgtz0UCDEOCBRo0+fCl7brnBlHKzqhR4Wpzc5HNhPjV62fptc5/pTekVJhsSjqOXb9iOa3Clc4C3GffgXpSBsmiZKDsadaFO1I02oC1oUyc8DMxcm8Ll8lxv/zNzJRTZRhq19XTJ0BXvWJPDsdksLr19wxVXc87oW5sxLmxhMxanArB24huOw9IWTcM1iD0d8P6Me2CvtXjXulxGHi3bhLpQJ+pGGxj46ExPoavE12LQ11VePNFM9EpWJktayh6pda1NL9C4h3s3/8bUNiG0Qew0JOZsFC/swb0AJSpGHlEROKgTdYMNPky28xgDdMo3pQAJ/tA/hbDQn8pav4RkL5FHr36AMPyhq7ePZjBH19xYzTZM19TAzPEoXtgDe8NQRhetOQd1om6woYyJLx7T6EHanwVsqQSQ3Dl8w76BdLZSHQb+Ri74PBnA0QCB/ZtXfEKyrG84lihO8c51P9CYxPRcquLd64+hUuQB3gm4B/o3Q9SiVcmkTNSBulAn6kYb6BBCmygmdyC/kKnp8TOKlXcgiC0pNypz+s1ckobBCnGTjEE84dzdm5DyWRCohqSfin7FAEeC8jMfWqDdSDhm5pEHeXEP7gUZSpSFMlE26kBdoPMu6kYbaFtEXKIkUJABqC5KPHkjHU67gCdwkEJ3Wgqg+gqEJwF07Hz09ZdlCQfOjfX9YNzE2xuXris/8W0l09SS9RcayCDwxhYA2HMAO5cHZq4Jh2xd0fzoTi6AbQB0uRFwAyoo+N/lTR/xPVSHDrKr5RL3TT46RNKgUI+Yv2+b4B4RPQbioz/GCQjSQxzUAIi+cQ8fGG9QtdaVnzx4wmY2WyFLNVQX4iYXcwUCHhiW5ih184GkKXRyl/eEmukPB3XCROhQNj6F/u7yva9WXQCMayEMMjBlqat3oJC+XglNrqlFit0AjkLoOp9AS+0PWecpcBF7QD/vZK9IQlzpzVqN0tiuaoJqUAPdcKTNajWcivfNIuqkmjbMSDxqLAI6Ky2sVwuPKejQKTiBF/q8KS46/cvMUSfIKxtzND+t97ARsxQ38k7XFlwsx0m/hAlhviMSUxp+v3Hs8uwP/49/7PFr03sOipsGMk1GdZueqI962ihGv43HwiymdTYwG+CFJMPOFAp4BX06FU3qgkUTj2sbX5d4xyeMh67BZtJqbDjGufyMpB/Y/PDse46yoB6LCB3M9ZlJbOOxHp82AgApIz0iB1NdJ7Q8DTRiM0GqgxTXQWBvA3BUx23clxm/+ZtMHFNzRoOOza9vVaIMjnzAUAn76gj9dnv+TgO5PD715oOs0RKIbaGFmiCIW0sObj/gIJZ4IOEY51gPYWoPyNBRlUEs4bPRv7s9P7PBqm1QoBKOxC/Ig04Q8jFigRbIa8Anq5dY9DqKD8fQ/rx+emRXC6s75tEyOLRMK9lJdPeV1FknS77dVg3Z1SYfEBtHwgqkvhCCeVLMqq3/sVnM2qK1i1cUrlmUBWPNkJX/3oNryEO2zh5RQ4ejLJBZxbrCbnmMTASzSdtu0NYrzgMozgBlNVCIK9z6DQj2iBryMYBxCAR63lV4nQNeUc8pVeWz9FEHzq3sFfP+F2n3myYrS+6faX32+KV7/0Eh4LGp7a9fHQeZTLC/8zrtfbtwYL7YyIL7uY3JvrLVWd4rkfkgYlS9vVt/+9qh68tSi4iM6vwY88Gek3FecaMyhNIescweKPh5+YuSV8PhlGTr09W3C66ddyX5SYnqcqEI+8mCwz0V1/Nq4d3YQgS4mfW1h+kg8N3p7vPXj/wA4ZvgCmuJHs9A7LX9EcPYb0zyicUhIMXUlceIL4l8IqHITwx2r5LfnecXK+7I7xFGAo/MREBbWIaTfORB3gkX3THMShhFKjN1cWobq7SZCTLZA9Q/YxjbaxbWr81OZlu74LV2R+F/BRgA2E9xgXp3xzgAAAAASUVORK5CYII="

/***/ },
/* 105 */
/***/ function(module, exports) {

  module.exports = require("material-ui/AppBar");

/***/ },
/* 106 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.setTest = setTest;
  function setTest(_ref) {
      var name = _ref.name;
  
      return {
          type: 'SET_TEST',
          payload: {
              name: name
          }
      };
  }

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.setLeftmenu = setLeftmenu;
  
  var _constants = __webpack_require__(103);
  
  function setLeftmenu(_ref) {
      var openMenu = _ref.openMenu,
          openMenuEvent = _ref.openMenuEvent;
  
      return {
          type: _constants.SET_LEFTMENU,
          payload: {
              openMenu: openMenu,
              openMenuEvent: openMenuEvent
          }
      };
  }

/***/ },
/* 108 */
/***/ function(module, exports) {

  module.exports = require("material-ui/IconButton");

/***/ },
/* 109 */
/***/ function(module, exports) {

  module.exports = require("material-ui/IconMenu");

/***/ },
/* 110 */
/***/ function(module, exports) {

  module.exports = require("material-ui/MenuItem");

/***/ },
/* 111 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/toc");

/***/ },
/* 112 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/chrome-reader-mode");

/***/ },
/* 113 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/date-range");

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/assignment-ind");

/***/ },
/* 115 */
/***/ function(module, exports) {

  module.exports = require("redux");

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Feedback = __webpack_require__(117);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Feedback() {
    return _react2.default.createElement(
      'div',
      { className: _Feedback2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Feedback2.default.container },
        _react2.default.createElement(
          'a',
          {
            className: _Feedback2.default.link,
            href: 'https://gitter.im/kriasoft/react-starter-kit'
          },
          'Ask a question'
        ),
        _react2.default.createElement(
          'span',
          { className: _Feedback2.default.spacer },
          '|'
        ),
        _react2.default.createElement(
          'a',
          {
            className: _Feedback2.default.link,
            href: 'https://github.com/kriasoft/react-starter-kit/issues/new'
          },
          'Report an issue'
        )
      )
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Feedback2.default)(Feedback);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(118);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Feedback_root_2NP {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.Feedback_container_2Ay {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.Feedback_link_17M,\n.Feedback_link_17M:active,\n.Feedback_link_17M:hover,\n.Feedback_link_17M:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.Feedback_link_17M:hover {\n  text-decoration: underline;\n}\n\n.Feedback_spacer_2n9 {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n", "", {"version":3,"sources":["/./components/Feedback/Feedback.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADlBD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;EACpC,mBAAmB;EACnB,iBAAiB,CAAC,WAAW;CAC9B;;AAED;;;;EAIE,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,oBAAoB;EACpB,mBAAmB;CACpB","file":"Feedback.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: var(--max-content-width);\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.link,\n.link:active,\n.link:hover,\n.link:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.link:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Feedback_root_2NP",
  	"container": "Feedback_container_2Ay",
  	"link": "Feedback_link_17M",
  	"spacer": "Feedback_spacer_2n9"
  };

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(120);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(92);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Footer() {
    return _react2.default.createElement(
      'div',
      { className: _Footer2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Footer2.default.container },
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.text },
          '\xA9 \u7DDA\u4E0A\u8B80\u66F8\u6703'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '\xB7'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/' },
          '\u9996\u9801'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '\xB7'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/admin' },
          '\u767B\u5165\u8B80\u66F8\u6703'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '\xB7'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/privacy' },
          '\u96B1\u79C1\u6B0A\u653F\u7B56'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '\xB7'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/support' },
          '\u8D0A\u52A9\u8B80\u66F8\u6703'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '\xB7'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/matchwork' },
          '\u7DDA\u4E0A\u5A92\u5408'
        )
      )
    );
  }
  
  exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(121);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Footer_root_3Ji {\n  background: #333;\n  color: #fff;\n}\n\n.Footer_container_n1b {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer_text_2mr {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer_textMuted_9iT {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer_spacer_3HO {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer_text_2mr,\n.Footer_link_1sU {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer_link_1sU,\n.Footer_link_1sU:active,\n.Footer_link_1sU:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer_link_1sU:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/Footer/Footer.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EAEE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.textMuted {\n  composes: text;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Footer_root_3Ji",
  	"container": "Footer_container_n1b",
  	"text": "Footer_text_2mr",
  	"textMuted": "Footer_textMuted_9iT Footer_text_2mr",
  	"spacer": "Footer_spacer_3HO",
  	"link": "Footer_link_1sU"
  };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Menu = __webpack_require__(123);
  
  var _Menu2 = _interopRequireDefault(_Menu);
  
  var _common = __webpack_require__(107);
  
  var _reactRedux = __webpack_require__(101);
  
  var _Drawer = __webpack_require__(125);
  
  var _Drawer2 = _interopRequireDefault(_Drawer);
  
  var _store = __webpack_require__(126);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _search = __webpack_require__(127);
  
  var _search2 = _interopRequireDefault(_search);
  
  var _Card = __webpack_require__(128);
  
  var _Avatar = __webpack_require__(129);
  
  var _Avatar2 = _interopRequireDefault(_Avatar);
  
  var _RaisedButton = __webpack_require__(130);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _MenuItem = __webpack_require__(110);
  
  var _MenuItem2 = _interopRequireDefault(_MenuItem);
  
  var _Divider = __webpack_require__(131);
  
  var _Divider2 = _interopRequireDefault(_Divider);
  
  var _history = __webpack_require__(94);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Link = __webpack_require__(92);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _MenuData = __webpack_require__(132);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import MenuData from './MenuData';
  var styles = {
      button: {
          margin: 12
      },
      exampleImageInput: {
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: '100%',
          opacity: 0
      },
      avatar: {
          margin: 5
      }
  };
  //import MenuData from '../MenuData';
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Menu = function (_Component) {
      (0, _inherits3.default)(Menu, _Component);
  
      function Menu(props) {
          (0, _classCallCheck3.default)(this, Menu);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));
  
          _this.OpenAbout = function (result) {
              // console.log(this.props);
              var setLeftmenu = _this.props.setLeftmenu;
  
              setLeftmenu({
                  openMenu: !_this.props.common.openMenu,
                  openMenuEvent: false
              });
          };
  
          _this.ClickBookTopic = function (index) {
              //console.log(result);
  
              _this.setState({
                  IsOpenData: !_this.state.IsOpenData,
                  IsOpenInfo: true
              });
  
              var setLeftmenu = _this.props.setLeftmenu;
              //console.log(this.props);
  
  
              setLeftmenu({
                  openMenu: !_this.props.common.openMenu
              });
              console.log(index);
              _history2.default.push('/readbook/' + index);
              //狀態更改後要轉址
  
              //
  
              //   console.log('this.state');
          };
  
          _this.ClickCloseInfo = function () {
              // this.setState({
              //     IsOpenInfo: false
              // })
              // console.log(this.state.IsOpenInfo);
              //  console.log('ooo');
              var setLeftmenu = _this.props.setLeftmenu;
  
              setLeftmenu({
                  openMenu: _this.props.common.openMenu ? false : true
              });
              // console.log(this.props.common.openMenu);
          };
  
          _this.state = {
              IsOpenData: false,
              IsOpenInfo: false,
              AssignData: {
                  "id": 1,
                  "title": "線上讀書會",
                  "subtitle": "歡迎來到線上讀書會",
                  "連結網址": "https://www.facebook.com/groups/906048196159262/",
                  "介紹": "可以學到 react reactnatvice redux ....",
                  "icon": "images/icons/reactjs.png",
                  "mainphoto": "images/interior-of-library.jpg"
              },
              items: ['hello', 'world', 'click', 'me']
          };
          _this.props = props;
          //console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(Menu, [{
          key: 'render',
          value: function render() {
              var _this2 = this;
  
              var ClickBookTopic = this.ClickBookTopic;
  
              var items = this.state.items.map(function (item, i) {
                  return _react2.default.createElement(
                      'div',
                      { key: i, onClick: function onClick() {
                              return _this2.handleRemove(i);
                          } },
                      item
                  );
              });
              var common = this.props.common;
              // console.log(common);
  
              return _react2.default.createElement(
                  'div',
                  { className: _Menu2.default.root },
                  _react2.default.createElement(
                      'div',
                      { className: _Menu2.default.container },
                      _react2.default.createElement(
                          _Drawer2.default,
                          { open: common.openMenu, width: 350 },
                          _MenuData.programdata.map(function (result, index) {
                              // result.bookname =(result.bookname)?result.bookname:"未設定";
                              return _react2.default.createElement(
                                  _MenuItem2.default,
                                  { key: index, onTouchTap: function onTouchTap() {
                                          return ClickBookTopic(index);
                                      } },
                                  _react2.default.createElement(_Avatar2.default, {
                                      src: "/" + result.icon,
                                      size: 30,
                                      style: styles.avatar
  
                                  }),
                                  result.title
                              );
                          }),
                          _react2.default.createElement(_RaisedButton2.default, {
                              label: '\u95DC\u9589',
                              labelPosition: 'before',
                              primary: true,
                              icon: _react2.default.createElement(_search2.default, null),
                              style: styles.button,
  
                              onTouchTap: this.OpenAbout
                          })
                      )
                  )
              );
          }
      }]);
      return Menu;
  }(_react.Component);
  
  var mapState = function mapState(state) {
      return {
          common: state.common
      };
  };
  var mapDispatch = {
      setLeftmenu: _common.setLeftmenu
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactIntl.injectIntl)((0, _withStyles2.default)(_Menu2.default)(Menu)));

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(124);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Menu.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Menu.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Menu_root_2Jd {}\n\n.Menu_container_2wE {\n    margin: 0 auto;\n    padding: 20px 0;\n    max-width: 1000px;\n}\n\n.Menu_link_11S {\n    text-decoration: none;\n    color: #080808\n}\n\n.Menu_brand_1Dh {\n    color: rgb(146, 229, 252);\n    text-decoration: none;\n    font-size: 1.75em;\n    /* ~28px */\n}\n\n.Menu_brandTxt_3hK {\n    margin-left: 10px;\n}\n\n.Menu_nav_2YJ {\n    float: right;\n    margin-top: 6px;\n}\n\n.Menu_banner_3LH {\n    text-align: center;\n}\n\n.Menu_bannerTitle_2pr {\n    margin: 0;\n    padding: 10px;\n    font-weight: normal;\n    font-size: 4em;\n    line-height: 1em;\n}\n\n.Menu_bannerDesc_3dD {\n    padding: 0;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 1.25em;\n    margin: 0;\n}\n\n.example-enter {\n    opacity: 0.01;\n}\n\n.example-enter.example-enter-active {\n    opacity: 1;\n    -webkit-transition: opacity 500ms ease-in;\n    -o-transition: opacity 500ms ease-in;\n    transition: opacity 500ms ease-in;\n}\n\n.example-leave {\n    opacity: 1;\n}\n\n.example-leave.example-leave-active {\n    opacity: 0.01;\n    -webkit-transition: opacity 300ms ease-in;\n    -o-transition: opacity 300ms ease-in;\n    transition: opacity 300ms ease-in;\n}", "", {"version":3,"sources":["/./components/Menu/Menu.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADfD,iBAAQ;;AAER;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAoC;CACvC;;AAED;IACI,sBAAsB;IACtB,cAAc;CACjB;;AAED;IACI,0BAAiD;IACjD,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;CACd;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,UAAU;IACV,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,iBAAiB;CACpB;;AAED;IACI,WAAW;IACX,gCAAgC;IAChC,kBAAkB;IAClB,UAAU;CACb;;AAED;IACI,cAAc;CACjB;;AAED;IACI,WAAW;IACX,0CAAkC;IAAlC,qCAAkC;IAAlC,kCAAkC;CACrC;;AAED;IACI,WAAW;CACd;;AAED;IACI,cAAc;IACd,0CAAkC;IAAlC,qCAAkC;IAAlC,kCAAkC;CACrC","file":"Menu.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n:root {\n    --brand-color: #61dafb;\n}\n\n.root {}\n\n.container {\n    margin: 0 auto;\n    padding: 20px 0;\n    max-width: var(--max-content-width);\n}\n\n.link {\n    text-decoration: none;\n    color: #080808\n}\n\n.brand {\n    color: color(var(--brand-color) lightness(+10%));\n    text-decoration: none;\n    font-size: 1.75em;\n    /* ~28px */\n}\n\n.brandTxt {\n    margin-left: 10px;\n}\n\n.nav {\n    float: right;\n    margin-top: 6px;\n}\n\n.banner {\n    text-align: center;\n}\n\n.bannerTitle {\n    margin: 0;\n    padding: 10px;\n    font-weight: normal;\n    font-size: 4em;\n    line-height: 1em;\n}\n\n.bannerDesc {\n    padding: 0;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 1.25em;\n    margin: 0;\n}\n\n:global(.example-enter) {\n    opacity: 0.01;\n}\n\n:global(.example-enter.example-enter-active) {\n    opacity: 1;\n    transition: opacity 500ms ease-in;\n}\n\n:global(.example-leave) {\n    opacity: 1;\n}\n\n:global(.example-leave.example-leave-active) {\n    opacity: 0.01;\n    transition: opacity 300ms ease-in;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Menu_root_2Jd",
  	"container": "Menu_container_2wE",
  	"link": "Menu_link_11S",
  	"brand": "Menu_brand_1Dh",
  	"brandTxt": "Menu_brandTxt_3hK",
  	"nav": "Menu_nav_2YJ",
  	"banner": "Menu_banner_3LH",
  	"bannerTitle": "Menu_bannerTitle_2pr",
  	"bannerDesc": "Menu_bannerDesc_3dD"
  };

/***/ },
/* 125 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Drawer");

/***/ },
/* 126 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/store");

/***/ },
/* 127 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/search");

/***/ },
/* 128 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Card");

/***/ },
/* 129 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Avatar");

/***/ },
/* 130 */
/***/ function(module, exports) {

  module.exports = require("material-ui/RaisedButton");

/***/ },
/* 131 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Divider");

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.languagedata = exports.otherdata = exports.programdata = undefined;
  
  var _defineProperty2 = __webpack_require__(133);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _ref;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var programdata = exports.programdata = [{
      "id": 1,
      "title": "線上 react 讀書會",
      "bookname": "react",
      "subtitle": "Reactjs 為目前主流框架之一,好維護強調 Learn Once Use Everywhere",
      "weblink": "https://www.facebook.com/groups/906048196159262/",
      "memo": "react 讀書會 攻略項目 目前包含 react ,reactnatvice ,redux ,webpack ,add-ons ,未來會攻略 ReactVr  ....",
      "icon": "images/icons/reactjs.png",
      "mainphoto": "images/mainphoto/a1.jpg",
      "github": "https://github.com/onlinereadbook/bookreactjs/tree/master/%E8%AE%80%E6%9B%B8%E6%9C%83%E9%81%8E%E5%BE%80%E5%BD%B1%E7%89%87%E5%8F%8A%E8%A8%8E%E8%AB%96%E5%8D%80"
  }, {
      "id": 2,
      "title": "線上 nodejs 讀書會",
      "bookname": "nodejs",
      "subtitle": "nodejs在這幾年很火紅,目前已經支援最新的es6,es7語法,模組套件非常多,也常用於Iot開發語言",
      "weblink": "https://www.facebook.com/groups/207139586323090/",
      "memo": "目前nodejs攻略 有 後端開發express,strongloop或是 Iot物聯網使用也有 雲端 node-red ",
      "icon": "images/icons/nodejs.png",
      "mainphoto": "images/mainphoto/a2.jpg"
  
  },, {
      "id": 3,
      "title": "線上 docker 讀書會",
      "bookname": "docker",
      "subtitle": "docker是虛擬化技術很重要的一個技術,也常用在CI/CD 或是 devops中",
      "weblink": "https://www.facebook.com/groups/750311598438135/",
      "memo": "docker 可以很快速的建立一個環境,並可以資料與系統分離 ",
      "icon": "images/icons/docker.png",
      "mainphoto": "images/mainphoto/a3.jpg"
  
  }, (_ref = {
      "id": 4,
      "title": "線上 swift 讀書會",
      "icon": "images/icons/swift.png",
  
      "weblink": "https://www.facebook.com/groups/238948643131478/"
  }, (0, _defineProperty3.default)(_ref, "icon", "images/icons/swift.png"), (0, _defineProperty3.default)(_ref, "memo", ""), _ref), {
      "id": 5,
      "title": "線上 laravel 讀書會",
      "weblink": "https://www.facebook.com/groups/956973084383781/",
      "icon": "images/icons/laravel.png",
  
      "memo": ""
  }, {
      "id": 6,
      "title": "線上 unity 讀書會",
      "icon": "images/icons/unity.png",
  
      "weblink": "https://www.facebook.com/groups/1606498833013546/",
      "memo": ""
  }, {
      "id": 7,
      "title": "線上 strongloop 讀書會",
      "weblink": "https://www.facebook.com/groups/568032146690485/",
      "memo": "",
      "icon": "images/icons/strongloop.png"
  
  }, {
      "id": 8,
      "title": "線上 vue.js 讀書會",
      "weblink": "https://www.facebook.com/groups/616281401885574/",
      "memo": "",
      "icon": "images/icons/vue.png"
  
  }, {
      "id": 9,
      "title": "線上 maker 讀書會",
      "weblink": "https://www.facebook.com/groups/842415582524882/",
      "memo": "",
      "icon": "images/icons/maker.png"
  
  }, {
      "id": 10,
      "title": "線上讀書會-迷你黑客松",
      "weblink": "https://www.facebook.com/groups/1274976625880806/",
      "memo": "",
      "icon": "images/icons/mini.png"
  
  }, {
      "id": 11,
      "title": "線上 rap 讀書會",
      "weblink": "https://www.facebook.com/groups/1618294088475156/",
      "memo": "",
      "icon": "images/icons/rap.png"
  
  }, {
      "id": 12,
      "title": "線上 ui/ux art 讀書會",
      "weblink": "https://www.facebook.com/groups/670166459806094/",
      "memo": "",
      "icon": "images/icons/art.png"
  
  }, {
      "id": 13,
      "title": "線上 chatbot 讀書會",
      "weblink": "https://www.facebook.com/groups/148210218987647/",
      "memo": "",
      "icon": "images/icons/chatbot.png"
  
  }, {
      "id": 14,
      "title": "線上 meteor 讀書會",
      "weblink": "https://www.facebook.com/groups/930921220347797/",
      "memo": "",
      "icon": "images/icons/meteor.png"
  
  }, {
      "id": 15,
      "title": "線上 xamarin & C# 讀書會",
      "weblink": "https://www.facebook.com/groups/611143505736213/",
      "memo": "",
      "icon": "images/icons/xamarin.png"
  
  }, {
      "id": 16,
      "title": "線上 go 讀書會",
      "weblink": "https://www.facebook.com/groups/1288435607857868/",
      "memo": "",
      "icon": "images/icons/go.png"
  
  }, {
      "title": "線上 創業 讀書會",
      "weblink": "https://www.facebook.com/groups/1746983635561623/",
      "memo": "",
      "icon": "images/icons/business.png"
  
  }];
  
  var otherdata = exports.otherdata = [{
      "title": "線上 創業 讀書會",
      "weblink": "https://www.facebook.com/groups/1746983635561623/",
      "memo": "",
      "icon": "images/icons/business.png"
  
  }, {
      "title": "線上 韓語 讀書會",
      "weblink": "https://www.facebook.com/groups/583103035208789/",
      "memo": "",
      "icon": "images/icons/korean.png"
  }, {
      "title": "線上 越南語 讀書會",
      "weblink": "https://www.facebook.com/groups/683209238508614/",
      "memo": "",
      "icon": "images/icons/vietnam.png"
  }, {
      "title": "線上 日語 讀書會",
      "weblink": "https://www.facebook.com/groups/1113446758690591/",
      "memo": "",
      "icon": "images/icons/japan.png"
  }, {
      "title": "線上 英文 讀書會",
      "weblink": "https://www.facebook.com/groups/1781798848754929/",
      "memo": "",
      "icon": "images/icons/english.png"
  }];
  
  var languagedata = exports.languagedata = [{
      "title": "線上 韓語 讀書會",
      "weblink": "https://www.facebook.com/groups/583103035208789/",
      "memo": "",
      "icon": "images/icons/korean.png"
  }, {
      "title": "線上 越南語 讀書會",
      "weblink": "https://www.facebook.com/groups/683209238508614/",
      "memo": "",
      "icon": "images/icons/vietnam.png"
  }, {
      "title": "線上 日語 讀書會",
      "weblink": "https://www.facebook.com/groups/1113446758690591/",
      "memo": "",
      "icon": "images/icons/japan.png"
  }, {
      "title": "線上 英文 讀書會",
      "weblink": "https://www.facebook.com/groups/1781798848754929/",
      "memo": "",
      "icon": "images/icons/english.png"
  }];

/***/ },
/* 133 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactRedux = __webpack_require__(101);
  
  var _MenuEvent = __webpack_require__(135);
  
  var _MenuEvent2 = _interopRequireDefault(_MenuEvent);
  
  var _common = __webpack_require__(107);
  
  var _TableCs = __webpack_require__(137);
  
  var _TableCs2 = _interopRequireDefault(_TableCs);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var MenuEvent = function (_Component) {
      (0, _inherits3.default)(MenuEvent, _Component);
  
      function MenuEvent(props) {
          (0, _classCallCheck3.default)(this, MenuEvent);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (MenuEvent.__proto__ || (0, _getPrototypeOf2.default)(MenuEvent)).call(this, props));
  
          _this.props = props;
  
          return _this;
      }
  
      // OpenAbout = () => {
      //     const { setLeftmenu } = this.props;
      //     setLeftmenu({
      //         openstate: false,
      //         openMenuEvent: !this.props.common.openMenuEvent
      //     });
  
      // }
      // ClickBookTopic = (result) => {
      //     this.setState({
      //         IsOpenData: !this.state.IsOpenData,
      //         IsOpenInfo: true,
      //         AssignData: result
      //     })
      //     const { setLeftmenu } = this.props;
      //     setLeftmenu({
      //         openstate: !this.props.common.openstate
      //     });
      // }
  
      (0, _createClass3.default)(MenuEvent, [{
          key: 'render',
          value: function render() {
  
              return _react2.default.createElement(
                  'div',
                  { className: _MenuEvent2.default.root },
                  _react2.default.createElement(
                      'div',
                      { className: _MenuEvent2.default.container },
                      _react2.default.createElement(_TableCs2.default, null)
                  )
              );
          }
      }]);
      return MenuEvent;
  }(_react.Component);
  
  var mapState = function mapState(state) {
      return {
          common: state.common
      };
  };
  var mapDispatch = {
      setLeftmenu: _common.setLeftmenu
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactIntl.injectIntl)((0, _withStyles2.default)(_MenuEvent2.default)(MenuEvent)));

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(136);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./MenuEvent.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./MenuEvent.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"MenuEvent.css","sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _TableCs = __webpack_require__(138);
  
  var _TableCs2 = _interopRequireDefault(_TableCs);
  
  var _reactRedux = __webpack_require__(101);
  
  var _Table = __webpack_require__(140);
  
  var _tablecs = __webpack_require__(141);
  
  var _Card = __webpack_require__(128);
  
  var _TextField = __webpack_require__(142);
  
  var _TextField2 = _interopRequireDefault(_TextField);
  
  var _android = __webpack_require__(143);
  
  var _android2 = _interopRequireDefault(_android);
  
  var _FlatButton = __webpack_require__(144);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  var _FormUd = __webpack_require__(145);
  
  var _FormUd2 = _interopRequireDefault(_FormUd);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var tableheader = [{
      "headerName": "活動類型"
  }, {
      "headerName": "活動名稱"
  }, {
      "headerName": "活動日期"
  }, {
      "headerName": "主講者"
  }];
  
  var EventsCo = function (_Component) {
      (0, _inherits3.default)(EventsCo, _Component);
  
      function EventsCo(props) {
          (0, _classCallCheck3.default)(this, EventsCo);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (EventsCo.__proto__ || (0, _getPrototypeOf2.default)(EventsCo)).call(this, props));
  
          _this.onSelectClick = function (index) {
              //console.log('select' + onedata);
              var sendOneData = _this.props.sendOneData;
  
              var tableName = "TableName";
              sendOneData({ tableName: tableName, index: index });
          };
  
          _this.props = props;
          // console.log('-----');
          // console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(EventsCo, [{
          key: 'render',
          value: function render() {
              var tablecs = this.props.tablecs;
  
              var tabledata = this.props.TableRowData;
              // console.log('===');
              // console.log(tabledata);
              //  console.log(tablecs.data);
              var onSelectClick = this.onSelectClick;
  
              console.log(tabledata);
  
              return _react2.default.createElement(
                  'div',
                  { className: _TableCs2.default.root },
                  _react2.default.createElement(
                      'div',
                      { className: _TableCs2.default.container },
                      _react2.default.createElement(
                          _Card.Card,
                          null,
                          _react2.default.createElement(
                              _Card.CardText,
                              null,
                              _react2.default.createElement(
                                  'div',
                                  { className: _TableCs2.default.flexContainer },
                                  _react2.default.createElement(
                                      'div',
                                      { className: _TableCs2.default.flex2 },
                                      _react2.default.createElement(_TextField2.default, { hintText: '\u8F38\u5165\u95DC\u9375\u5B57', fullWidth: true, id: 'search' })
                                  ),
                                  _react2.default.createElement(
                                      'div',
                                      { className: _TableCs2.default.flex1 },
                                      _react2.default.createElement(_FlatButton2.default, {
                                          label: '\u958B\u59CB\u641C\u5C0B',
                                          labelPosition: 'before',
                                          primary: true,
                                          icon: _react2.default.createElement(_android2.default, null)
                                      })
                                  )
                              )
                          ),
                          _react2.default.createElement(
                              _Table.Table,
                              { adjustForCheckbox: false },
                              _react2.default.createElement(
                                  _Table.TableHeader,
                                  null,
                                  _react2.default.createElement(
                                      _Table.TableRow,
                                      null,
                                      tableheader.map(function (data, index) {
                                          return _react2.default.createElement(
                                              _Table.TableHeaderColumn,
                                              { key: index },
                                              data.headerName
                                          );
                                      })
                                  )
                              ),
                              _react2.default.createElement(
                                  _Table.TableBody,
                                  null,
                                  tabledata.map(function (data, index) {
                                      return _react2.default.createElement(
                                          _Table.TableRow,
                                          { key: index, onTouchTap: function onTouchTap() {
                                                  return onSelectClick(index);
                                              } },
                                          data.map(function (data2, index2) {
                                              if (typeof data2.getFullYear == "function") {
                                                  return _react2.default.createElement(
                                                      _Table.TableRowColumn,
                                                      { key: index2 },
                                                      data2.getFullYear(),
                                                      '-',
                                                      data2.getMonth(),
                                                      '-',
                                                      data2.getDate(),
                                                      ' '
                                                  );
                                              }
                                              return _react2.default.createElement(
                                                  _Table.TableRowColumn,
                                                  { key: index2 },
                                                  data2
                                              );
                                          })
                                      );
  
                                      // return <TableRow key={index} onTouchTap={() => onSelectClick(data)}>
                                      //     <TableRowColumn>{index}</TableRowColumn>
                                      //     <TableRowColumn>{data.title}</TableRowColumn>
                                      //     <TableRowColumn>{data.calendar.getFullYear()}/{data.calendar.getMonth()}/{data.calendar.getDate()}</TableRowColumn>
                                      //     <TableRowColumn>{data.speaker}</TableRowColumn>
  
                                      // </TableRow>;
                                  })
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return EventsCo;
  }(_react.Component);
  
  var mapState = function mapState(state) {
      return {
          tablecs: state.tablecs
      };
  };
  var mapDispatch = {
      sendOneData: _tablecs.sendOneData
  
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactIntl.injectIntl)((0, _withStyles2.default)(_TableCs2.default)(EventsCo)));

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(139);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./TableCs.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./TableCs.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.TableCs_root_3Ld {}\n\n.TableCs_container_2_p {\n    margin: 0 auto;\n    padding: 20px 0;\n    max-width: 1000px;\n}\n\n.TableCs_button_3Ge {}\n\n.TableCs_flexContatiner_1ps {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.TableCs_flex1_3N9 {\n    -webkit-flex: 1;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0%;\n            flex: 1 1 0%;\n}\n\n.TableCs_flex2_17O {\n    -webkit-flex: 2;\n    -webkit-box-flex: 2;\n        -ms-flex: 2 1 0%;\n            flex: 2 1 0%;\n}", "", {"version":3,"sources":["/./components/TableCs/TableCs.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADfD,oBAAQ;;AAER;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAoC;CACvC;;AAED,sBAAU;;AAEV;IACI,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;CACjB;;AAED;IACI,gBAAgB;IAChB,oBAAQ;QAAR,iBAAQ;YAAR,aAAQ;CACX;;AAED;IACI,gBAAgB;IAChB,oBAAQ;QAAR,iBAAQ;YAAR,aAAQ;CACX","file":"TableCs.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n:root {\n    --brand-color: #61dafb;\n}\n\n.root {}\n\n.container {\n    margin: 0 auto;\n    padding: 20px 0;\n    max-width: var(--max-content-width);\n}\n\n.button {}\n\n.flexContatiner {\n    display: flex;\n}\n\n.flex1 {\n    -webkit-flex: 1;\n    flex: 1;\n}\n\n.flex2 {\n    -webkit-flex: 2;\n    flex: 2;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "TableCs_root_3Ld",
  	"container": "TableCs_container_2_p",
  	"button": "TableCs_button_3Ge",
  	"flexContatiner": "TableCs_flexContatiner_1ps",
  	"flex1": "TableCs_flex1_3N9",
  	"flex2": "TableCs_flex2_17O"
  };

/***/ },
/* 140 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Table");

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.insertTable = insertTable;
  exports.showTable = showTable;
  exports.sendOneData = sendOneData;
  
  var _constants = __webpack_require__(103);
  
  function insertTable(_ref) {
      var table = _ref.table,
          data = _ref.data;
  
      //console.log(data);
  
      return {
          type: _constants.INSERT_TABLE,
          payload: {
              table: table,
              data: data
          }
      };
  }
  function showTable(_ref2) {
      var table = _ref2.table;
  
      return {
          type: _constants.SHOW_TABLE,
          payload: {
              table: table
          }
      };
  }
  
  function sendOneData(_ref3) {
      var table = _ref3.table,
          index = _ref3.index;
  
      // console.log(onedata);
      return {
          type: _constants.SEND_ONEDATA,
          payload: {
              table: table,
              index: index
          }
      };
  }

/***/ },
/* 142 */
/***/ function(module, exports) {

  module.exports = require("material-ui/TextField");

/***/ },
/* 143 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/android");

/***/ },
/* 144 */
/***/ function(module, exports) {

  module.exports = require("material-ui/FlatButton");

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(146);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _FormUd = __webpack_require__(147);
  
  var _FormUd2 = _interopRequireDefault(_FormUd);
  
  var _reactRedux = __webpack_require__(101);
  
  var _TextField = __webpack_require__(142);
  
  var _TextField2 = _interopRequireDefault(_TextField);
  
  var _Divider = __webpack_require__(131);
  
  var _Divider2 = _interopRequireDefault(_Divider);
  
  var _Paper = __webpack_require__(149);
  
  var _Paper2 = _interopRequireDefault(_Paper);
  
  var _Card = __webpack_require__(128);
  
  var _FlatButton = __webpack_require__(144);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  var _DatePicker = __webpack_require__(150);
  
  var _DatePicker2 = _interopRequireDefault(_DatePicker);
  
  var _tablecs = __webpack_require__(141);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //目標 把FormCs 配合 傳進來的資料可以修改 寫成可以吃各種的Table 資料庫
  
  //import MenuData from '../MenuData';
  var divHide = {
      display: "none"
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  var FormUd = function (_Component) {
      (0, _inherits3.default)(FormUd, _Component);
  
      function FormUd(props) {
          (0, _classCallCheck3.default)(this, FormUd);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (FormUd.__proto__ || (0, _getPrototypeOf2.default)(FormUd)).call(this, props));
  
          _this.onUpdateClick = function () {
              console.log('update');
              console.log(_this.state);
          };
  
          _this.onDeleteClick = function () {
              console.log('detele');
          };
  
          _this.props = props;
          _this.state = {
              //      tablId: "",
              title: "",
              calendar: null,
              memo: "",
              speaker: ""
          };
  
          return _this;
      }
  
      (0, _createClass3.default)(FormUd, [{
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
              var readyUpdata = nextProps.readyUpdata;
  
              this.setState({
                  //        tablId: "test",
                  title: readyUpdata.title,
                  calendar: readyUpdata.calendar,
                  memo: readyUpdata.memo,
                  speaker: readyUpdata.speaker
              });
              //      this.setState({ title: "123" })
  
          }
      }, {
          key: 'render',
          value: function render() {
              var _this2 = this;
  
              return _react2.default.createElement(
                  'div',
                  { className: _FormUd2.default.root },
                  _react2.default.createElement(
                      'div',
                      { className: _FormUd2.default.container },
                      _react2.default.createElement(
                          'div',
                          { id: 'panel' },
                          _react2.default.createElement(
                              _Card.Card,
                              null,
                              _react2.default.createElement(
                                  'form',
                                  { ref: 'myform', id: 'myform' },
                                  _react2.default.createElement(_Card.CardTitle, { title: '\u8868\u55AE\u4FEE\u6539\u64CD\u4F5C', subtitle: 'Card subtitle' }),
                                  _react2.default.createElement(
                                      _Card.CardText,
                                      null,
                                      _react2.default.createElement(_TextField2.default, { fullWidth: true, hintText: 'tablId', name: 'tablId', ref: 'tablId', id: 'tablId', value: this.state.tablId, onChange: function onChange(event) {
                                              _this2.setState({ id: event.target.value });
                                          } }),
                                      _react2.default.createElement(_TextField2.default, { fullWidth: true, hintText: '\u6D3B\u52D5\u540D\u7A31', name: 'title', ref: 'title', id: 'title', value: this.state.title, onChange: function onChange(event) {
                                              _this2.setState({ title: event.target.value });
                                          } }),
                                      _react2.default.createElement(_DatePicker2.default, { hintText: '\u6D3B\u52D5\u65E5\u671F', mode: 'landscape', autoOk: true, name: 'calendar',
                                          ref: 'calendar', id: 'calendar', value: this.state.calendar,
                                          onChange: function onChange(event, date) {
                                              _this2.setState({ calendar: date });
                                          } }),
                                      _react2.default.createElement(_TextField2.default, { rows: 3, multiLine: true, fullWidth: true, hintText: '\u6D3B\u52D5\u8AAA\u660E', name: 'memo', ref: 'memo', id: 'memo', value: this.state.memo, onChange: function onChange(event) {
                                              _this2.setState({ memo: event.target.value });
                                          } }),
                                      _react2.default.createElement(_TextField2.default, { fullWidth: true, hintText: '\u4E3B\u8B1B\u8005', name: 'speaker', ref: 'speaker', id: 'speaker', value: this.state.speaker, onChange: function onChange(event) {
                                              _this2.setState({ speaker: event.target.value });
                                          } })
                                  ),
                                  _react2.default.createElement(
                                      _Card.CardActions,
                                      null,
                                      _react2.default.createElement(_FlatButton2.default, { label: '\u4FEE\u6539', onTouchTap: this.onUpdateClick }),
                                      _react2.default.createElement(_FlatButton2.default, { label: '\u522A\u9664', onTouchTap: this.onDeleteClick })
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return FormUd;
  }(_react.Component);
  
  var mapState = function mapState(state) {
      return {
          readyUpdata: state.tablecs.readyUpdata
  
      };
  };
  var mapDispatch = {
      insertTable: _tablecs.insertTable
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactIntl.injectIntl)((0, _withStyles2.default)(_FormUd2.default)(FormUd)));

/***/ },
/* 146 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(148);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./FormUd.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./FormUd.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"FormUd.css","sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 149 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Paper");

/***/ },
/* 150 */
/***/ function(module, exports) {

  module.exports = require("material-ui/DatePicker");

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(152);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./MatchWork.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./MatchWork.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.MatchWork_root_Dk3 {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.MatchWork_container_226 {\n    margin: 0 auto;\n    padding: 0 0 40px;\n    max-width: 1000px;\n}", "", {"version":3,"sources":["/./routes/matchwork/MatchWork.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;IACI,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAoC;CACvC","file":"MatchWork.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n.root {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.container {\n    margin: 0 auto;\n    padding: 0 0 40px;\n    max-width: var(--max-content-width);\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "MatchWork_root_Dk3",
  	"container": "MatchWork_container_226"
  };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _defineProperty2 = __webpack_require__(133);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _path$action$path$act; /**
                              * React Starter Kit (https://www.reactstarterkit.com/)
                              *
                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                              *
                              * This source code is licensed under the MIT license found in the
                              * LICENSE.txt file in the root directory of this source tree.
                              */
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _readBook = __webpack_require__(154);
  
  var _readBook2 = _interopRequireDefault(_readBook);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _MenuData = __webpack_require__(132);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var AssignData = {
      "id": 1,
      "title": "線上讀書會",
      "subtitle": "歡迎來到線上讀書會",
      "連結網址": "https://www.facebook.com/groups/906048196159262/",
      "介紹": "可以學到 react reactnatvice redux ....",
      "icon": "images/icons/reactjs.png",
      "mainphoto": "images/interior-of-library.jpg"
  };
  
  exports.default = (_path$action$path$act = {
      path: '/readbook/',
      action: function action() {
          return {
              title: 'React Starter Kit',
              component: _react2.default.createElement(_readBook2.default, null)
          };
      }
  }, (0, _defineProperty3.default)(_path$action$path$act, 'path', '/readbook/:id'), (0, _defineProperty3.default)(_path$action$path$act, 'action', function action(_ref) {
      var _this = this;
  
      var params = _ref.params;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var showdata;
          return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                  switch (_context.prev = _context.next) {
                      case 0:
                          showdata = _MenuData.programdata[params.id];
  
                          if (!(showdata.github != "undefined")) {
                              _context.next = 4;
                              break;
                          }
  
                          _context.next = 4;
                          return (0, _fetch2.default)(showdata.github, { mode: "cors" }).then(function (res) {
                              // console.log(res);
                              //return res;
                          });
  
                      case 4:
                          return _context.abrupt('return', {
                              title: 'React Starter Kit',
                              component: _react2.default.createElement(_readBook2.default, { showdata: showdata })
                          });
  
                      case 5:
                      case 'end':
                          return _context.stop();
                  }
              }
          }, _callee, _this);
      }))();
  }), _path$action$path$act);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _ReadBook = __webpack_require__(155);
  
  var _ReadBook2 = _interopRequireDefault(_ReadBook);
  
  var _Drawer = __webpack_require__(125);
  
  var _Drawer2 = _interopRequireDefault(_Drawer);
  
  var _store = __webpack_require__(126);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _search = __webpack_require__(127);
  
  var _search2 = _interopRequireDefault(_search);
  
  var _Card = __webpack_require__(128);
  
  var _Avatar = __webpack_require__(129);
  
  var _Avatar2 = _interopRequireDefault(_Avatar);
  
  var _RaisedButton = __webpack_require__(130);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _MenuItem = __webpack_require__(110);
  
  var _MenuItem2 = _interopRequireDefault(_MenuItem);
  
  var _Divider = __webpack_require__(131);
  
  var _Divider2 = _interopRequireDefault(_Divider);
  
  var _common = __webpack_require__(107);
  
  var _reactRedux = __webpack_require__(101);
  
  var _Dialog = __webpack_require__(157);
  
  var _Dialog2 = _interopRequireDefault(_Dialog);
  
  var _FlatButton = __webpack_require__(144);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import MenuData from './MenuData';
  var styles = {
      button: {
          margin: 12
      },
      avatar: {
          margin: 5
      }
  };
  //import MenuData from './MenuData';
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var ReadBook = function (_Component) {
      (0, _inherits3.default)(ReadBook, _Component);
  
      ///    function ReadBook({showdata}){
      function ReadBook(props) {
          (0, _classCallCheck3.default)(this, ReadBook);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (ReadBook.__proto__ || (0, _getPrototypeOf2.default)(ReadBook)).call(this, props));
  
          _this.OpenAbout = function () {
              var setLeftmenu = _this.props.setLeftmenu;
              //  console.log('ttest');
  
              setLeftmenu({
                  openMenu: !_this.props.common.openMenu,
                  openMenuEvent: false
              });
          };
  
          _this.OpenMore = function () {
              _this.setState({ dialogOpen: true });
          };
  
          _this.handleClose = function () {
              _this.setState({ dialogOpen: false });
          };
  
          _this.handleGoFB = function () {
              window.location.href = 'https://www.facebook.com/readbook999/';
          };
  
          _this.state = {
              dialogOpen: false
          };
          _this.props = props;
          return _this;
      }
  
      (0, _createClass3.default)(ReadBook, [{
          key: 'render',
          value: function render() {
              var _this2 = this;
  
              var showdata = this.props.showdata;
              var OpenAbout = this.OpenAbout;
              //預設值
  
              if (typeof showdata.mainphoto === "undefined") {
                  showdata.mainphoto = "images/interior-of-library.jpg";
              }
              var actions = [_react2.default.createElement(_FlatButton2.default, {
                  label: '\u524D\u5F80\u7DDA\u4E0A\u8B80\u66F8\u6703\u7C89\u7D72\u5718',
                  primary: true,
                  keyboardFocused: true,
                  onTouchTap: this.handleGoFB
              }), _react2.default.createElement(_FlatButton2.default, {
                  label: '\u95DC\u9589\u5C0D\u8A71\u8A86',
                  primary: true,
  
                  onTouchTap: this.handleClose
              })];
              return _react2.default.createElement(
                  _Layout2.default,
                  { name: 'polo' },
                  _react2.default.createElement(
                      'div',
                      { className: _ReadBook2.default.root },
                      _react2.default.createElement(
                          'div',
                          { className: _ReadBook2.default.container },
                          _react2.default.createElement(
                              _Dialog2.default,
                              { open: this.state.dialogOpen, actions: actions
                              },
                              _react2.default.createElement(
                                  _Card.Card,
                                  null,
                                  _react2.default.createElement(_Card.CardTitle, { title: '\u7DDA\u4E0A\u8B80\u66F8\u6703\u7C89\u7D72\u5718', subtitle: '\u767B\u5165\u7DDA\u4E0A\u8B80\u66F8\u6703\u7C89\u7D72\u5718\u5F8C\u53EF\u4EE5\u767C\u8A0A\u606F\u8DDF\u7C89\u7D72\u5718\u6253\u8072\u62DB\u547C,\u5C07\u6709chatbot\u70BA\u4F60\u4ECB\u7D39\u7DDA\u4E0A\u8B80\u66F8\u6703\u5404\u7A2E\u8AAA\u660E' }),
                                  _react2.default.createElement(
                                      _Card.CardMedia,
                                      { overlay: _react2.default.createElement(_Card.CardTitle, { title: '\u9019\u4E0D\u662F\u4E00\u500B\u5BE6\u9AD4\u7684\u8B80\u66F8\u6703,\u4F46\u4F60\u6703\u611B\u4E0A\u4ED6', subtitle: '\u662F\u900F\u904EZoom\u7DDA\u4E0A\u6703\u8B70\u8EDF\u9AD4\u6240\u9032\u884C\u7684\u8B80\u66F8\u6703,\u800C\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u9EDE,\u53EA\u8981\u53EF\u4EE5\u4E0A\u7DB2\u6709\u5B89\u88DDZoom\u8EDF\u9AD4,\u90FD\u53EF\u4EE5\u4E00\u8D77\u4F86\u4EAB\u53D7\u5B78\u7FD2\u7684\u6A02\u8DA3' })
                                      },
                                      _react2.default.createElement('img', { src: "/" + showdata.mainphoto, key: showdata.mainphoto })
                                  )
                              )
                          ),
                          _react2.default.createElement(
                              _Card.Card,
                              null,
                              _react2.default.createElement(_Card.CardHeader, {
                                  title: showdata.title,
                                  subtitle: showdata.subtitle,
                                  avatar: "/" + showdata.icon
                              }),
                              _react2.default.createElement(
                                  _Card.CardMedia,
                                  {
                                      overlay: _react2.default.createElement(_Card.CardTitle, { title: '\u9019\u4E0D\u662F\u4E00\u500B\u5BE6\u9AD4\u7684\u8B80\u66F8\u6703,\u4F46\u4F60\u6703\u611B\u4E0A\u4ED6', subtitle: '\u662F\u900F\u904EZoom\u7DDA\u4E0A\u6703\u8B70\u8EDF\u9AD4\u6240\u9032\u884C\u7684\u8B80\u66F8\u6703,\u800C\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u9EDE,\u53EA\u8981\u53EF\u4EE5\u4E0A\u7DB2\u6709\u5B89\u88DDZoom\u8EDF\u9AD4,\u90FD\u53EF\u4EE5\u4E00\u8D77\u4F86\u4EAB\u53D7\u5B78\u7FD2\u7684\u6A02\u8DA3' })
                                  },
                                  _react2.default.createElement('img', { src: "/" + showdata.mainphoto, key: showdata.mainphoto })
                              ),
                              _react2.default.createElement(_Card.CardTitle, { title: '\u518D\u4E5F\u4E0D\u662F\u4E00\u500B\u4EBA\u8B80\u66F8', subtitle: '\u7DDA\u4E0A\u8B80\u66F8\u6703 \u8B93\u5728\u5B78\u7FD2\u77E5\u8B58\u7684\u8DEF\u4E0A\u4E0D\u5B64\u55AE,\u53EF\u4EE5\u5FEB\u901F\u653B\u7565\u4E26\u85C9\u7531\u7DDA\u4E0A\u6703\u8B70\u4EA4\u8AC7\u8207\u4E3B\u984C\u63A2\u7D22\u767C\u73FE,\u539F\u4F86\u5B78\u7FD2\u53EA\u8981\u627E\u5C0D\u540C\u597D \u4E00\u5207\u662F\u5982\u6B64\u7684\u9806\u66A2' }),
                              _react2.default.createElement(
                                  _Card.CardActions,
                                  null,
                                  _react2.default.createElement(_RaisedButton2.default, {
                                      label: '\u66F4\u4E86\u89E3\u7DDA\u4E0A\u8B80\u66F8\u6703',
                                      labelPosition: 'before',
                                      primary: true,
                                      icon: _react2.default.createElement(_store2.default, null),
                                      style: styles.button,
                                      onTouchTap: function onTouchTap() {
                                          return _this2.OpenMore();
                                      }
                                  }),
                                  _react2.default.createElement(_RaisedButton2.default, {
                                      label: '\u60F3\u8981\u518D\u63A2\u7D22\u770B\u770B\u9084\u6709\u4EC0\u9EBC\u8B80\u66F8\u6703',
                                      labelPosition: 'before',
                                      primary: true,
                                      icon: _react2.default.createElement(_search2.default, null),
                                      style: styles.button,
                                      onTouchTap: function onTouchTap() {
                                          return OpenAbout();
                                      }
                                  })
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return ReadBook;
  }(_react.Component);
  
  var mapState = function mapState(state) {
      return {
          common: state.common
      };
  };
  var mapDispatch = {
      setLeftmenu: _common.setLeftmenu
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactIntl.injectIntl)((0, _withStyles2.default)(_ReadBook2.default)(ReadBook)));

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(156);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ReadBook.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ReadBook.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.ReadBook_root_3zb {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n/*.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}*/\n\n.ReadBook_news_3Zg {\n    padding: 0;\n}\n\n.ReadBook_newsItem_2UW {\n    list-style-type: none;\n    padding-bottom: 6px;\n}\n\n.ReadBook_newsTitle_3t8 {\n    font-size: 1.125em;\n}\n\n.ReadBook_newsTitle_3t8,\n.ReadBook_newsDesc_Sro {\n    display: block;\n}\n\n.ReadBook_publishedDate_1ZD {\n    font-size: 0.8em;\n    color: #777;\n}\n\n(.example-enter) {\n    opacity: 0;\n}\n\n.example-enter-active {\n    opacity: 1;\n    -webkit-transition: opacity 1300ms ease-in;\n    -o-transition: opacity 1300ms ease-in;\n    transition: opacity 1300ms ease-in;\n}\n\n.example-leave {\n    opacity: 1;\n}\n\n.example-leave-active {\n    opacity: 0;\n    -webkit-transition: opacity 1300ms ease-in;\n    -o-transition: opacity 1300ms ease-in;\n    transition: opacity 1300ms ease-in;\n}", "", {"version":3,"sources":["/./routes/readBook/ReadBook.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;IACI,mBAAmB;IACnB,oBAAoB;CACvB;;AAGD;;;;GAIG;;AAEH;IACI,WAAW;CACd;;AAED;IACI,sBAAsB;IACtB,oBAAoB;CACvB;;AAED;IACI,mBAAmB;CACtB;;AAED;;IAEI,eAAe;CAClB;;AAED;IACI,iBAAiB;IACjB,YAAY;CACf;;AAED;IACI,WAAW;CACd;;AAED;IACI,WAAW;IACX,2CAAmC;IAAnC,sCAAmC;IAAnC,mCAAmC;CACtC;;AAED;IACI,WAAW;CACd;;AAED;IACI,WAAW;IACX,2CAAmC;IAAnC,sCAAmC;IAAnC,mCAAmC;CACtC","file":"ReadBook.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n.root {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n\n/*.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}*/\n\n.news {\n    padding: 0;\n}\n\n.newsItem {\n    list-style-type: none;\n    padding-bottom: 6px;\n}\n\n.newsTitle {\n    font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n    display: block;\n}\n\n.publishedDate {\n    font-size: 0.8em;\n    color: #777;\n}\n\n:global (.example-enter) {\n    opacity: 0;\n}\n\n:global(.example-enter-active) {\n    opacity: 1;\n    transition: opacity 1300ms ease-in;\n}\n\n:global(.example-leave) {\n    opacity: 1;\n}\n\n:global(.example-leave-active) {\n    opacity: 0;\n    transition: opacity 1300ms ease-in;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "ReadBook_root_3zb",
  	"news": "ReadBook_news_3Zg",
  	"newsItem": "ReadBook_newsItem_2UW",
  	"newsTitle": "ReadBook_newsTitle_3t8",
  	"newsDesc": "ReadBook_newsDesc_Sro",
  	"publishedDate": "ReadBook_publishedDate_1ZD"
  };

/***/ },
/* 157 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Dialog");

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _livemap = __webpack_require__(159);
  
  var _livemap2 = _interopRequireDefault(_livemap);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
      path: '/livemap',
  
      action: function action() {
          // const resp = await fetch('/graphql', {
          //   method: 'post',
          //   headers: {
          //     Accept: 'application/json',
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     query: '{news{title,link,publishedDate,contentSnippet}}',
          //   }),
          //   credentials: 'include',
          // });
          // const { data } = await resp.json();
          //  if (!data || !data.news) throw new Error('Failed to load the news feed.');
          return {
              title: 'React Starter Kit',
              component: _react2.default.createElement(_livemap2.default, null)
          };
      }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Livemap = __webpack_require__(160);
  
  var _Livemap2 = _interopRequireDefault(_Livemap);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Livemap(_ref) {
      var news = _ref.news;
  
      return _react2.default.createElement(
          _Layout2.default,
          null,
          _react2.default.createElement(
              'div',
              { className: _Livemap2.default.root },
              _react2.default.createElement(
                  'div',
                  { className: _Livemap2.default.container },
                  _react2.default.createElement(
                      'div',
                      { id: 'map' },
                      '123'
                  )
              )
          )
      );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  Livemap.propTypes = {};
  
  exports.default = (0, _withStyles2.default)(_Livemap2.default)(Livemap);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(161);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Livemap.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Livemap.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Livemap_root_1oQ {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.Livemap_container_1Pd {\n    margin: 0 auto;\n    padding: 0 0 40px;\n    max-width: 1000px;\n}\n\n.Livemap_news_3FW {\n    padding: 0;\n}\n\n.Livemap_newsItem_3CX {\n    list-style-type: none;\n    padding-bottom: 6px;\n}\n\n.Livemap_newsTitle_2xS {\n    font-size: 1.125em;\n}\n\n.Livemap_newsTitle_2xS,\n.Livemap_newsDesc_29v {\n    display: block;\n}\n\n.Livemap_publishedDate_sYM {\n    font-size: 0.8em;\n    color: #777;\n}\n", "", {"version":3,"sources":["/./routes/livemap/Livemap.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;IACI,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAoC;CACvC;;AAED;IACI,WAAW;CACd;;AAED;IACI,sBAAsB;IACtB,oBAAoB;CACvB;;AAED;IACI,mBAAmB;CACtB;;AAED;;IAEI,eAAe;CAClB;;AAED;IACI,iBAAiB;IACjB,YAAY;CACf","file":"Livemap.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n.root {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.container {\n    margin: 0 auto;\n    padding: 0 0 40px;\n    max-width: var(--max-content-width);\n}\n\n.news {\n    padding: 0;\n}\n\n.newsItem {\n    list-style-type: none;\n    padding-bottom: 6px;\n}\n\n.newsTitle {\n    font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n    display: block;\n}\n\n.publishedDate {\n    font-size: 0.8em;\n    color: #777;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Livemap_root_1oQ",
  	"container": "Livemap_container_1Pd",
  	"news": "Livemap_news_3FW",
  	"newsItem": "Livemap_newsItem_3CX",
  	"newsTitle": "Livemap_newsTitle_2xS",
  	"newsDesc": "Livemap_newsDesc_29v",
  	"publishedDate": "Livemap_publishedDate_sYM"
  };

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _defineProperty2 = __webpack_require__(133);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(163);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
      path: '/',
      action: function action() {
          var _ref;
  
          var programdata = [{
              "id": 1,
              "title": "線上 react 讀書會",
              "subtitle": "Reactjs 為目前主流框架之一,好維護強調 Learn Once Use Everywhere",
              "weblink": "https://www.facebook.com/groups/906048196159262/",
              "memo": "react 讀書會 攻略項目 目前包含 react ,reactnatvice ,redux ,webpack ,add-ons ,未來會攻略 ReactVr  ....",
              "icon": "images/icons/reactjs.png",
              "mainphoto": "images/mainphoto/a1.jpg"
          }, {
              "id": 2,
              "title": "線上 nodejs 讀書會",
              "subtitle": "nodejs在這幾年很火紅,目前已經支援最新的es6,es7語法,模組套件非常多,也常用於Iot開發語言",
              "weblink": "https://www.facebook.com/groups/207139586323090/",
              "memo": "目前nodejs攻略 有 後端開發express,strongloop或是 Iot物聯網使用也有 雲端 node-red ",
              "icon": "images/icons/nodejs.png",
              "mainphoto": "images/mainphoto/a2.jpg"
  
          },, {
              "id": 3,
              "title": "線上 docker 讀書會",
              "subtitle": "docker是虛擬化技術很重要的一個技術,也常用在CI/CD 或是 devops中",
              "weblink": "https://www.facebook.com/groups/750311598438135/",
              "memo": "docker 可以很快速的建立一個環境,並可以資料與系統分離 ",
              "icon": "images/icons/docker.png",
              "mainphoto": "images/mainphoto/a3.jpg"
  
          }, (_ref = {
              "id": 4,
              "title": "線上 swift 讀書會",
              "icon": "images/icons/swift.png",
  
              "weblink": "https://www.facebook.com/groups/238948643131478/"
          }, (0, _defineProperty3.default)(_ref, 'icon', "images/icons/swift.png"), (0, _defineProperty3.default)(_ref, "memo", ""), _ref), {
              "id": 5,
              "title": "線上 laravel 讀書會",
              "weblink": "https://www.facebook.com/groups/956973084383781/",
              "icon": "images/icons/laravel.png",
  
              "memo": ""
          }, {
              "id": 6,
              "title": "線上 unity 讀書會",
              "icon": "images/icons/unity.png",
  
              "weblink": "https://www.facebook.com/groups/1606498833013546/",
              "memo": ""
          }, {
              "id": 7,
              "title": "線上 strongloop 讀書會",
              "weblink": "https://www.facebook.com/groups/568032146690485/",
              "memo": "",
              "icon": "images/icons/strongloop.png"
  
          }, {
              "id": 8,
              "title": "線上 vue.js 讀書會",
              "weblink": "https://www.facebook.com/groups/616281401885574/",
              "memo": "",
              "icon": "images/icons/vue.png"
  
          }, {
              "id": 9,
              "title": "線上 maker 讀書會",
              "weblink": "https://www.facebook.com/groups/842415582524882/",
              "memo": "",
              "icon": "images/icons/maker.png"
  
          }, {
              "id": 10,
              "title": "線上讀書會-迷你黑客松",
              "weblink": "https://www.facebook.com/groups/1274976625880806/",
              "memo": "",
              "icon": "images/icons/mini.png"
  
          }, {
              "id": 11,
              "title": "線上 rap 讀書會",
              "weblink": "https://www.facebook.com/groups/1618294088475156/",
              "memo": "",
              "icon": "images/icons/rap.png"
  
          }, {
              "id": 12,
              "title": "線上 ui/ux art 讀書會",
              "weblink": "https://www.facebook.com/groups/670166459806094/",
              "memo": "",
              "icon": "images/icons/art.png"
  
          }, {
              "id": 13,
              "title": "線上 chatbot 讀書會",
              "weblink": "https://www.facebook.com/groups/148210218987647/",
              "memo": "",
              "icon": "images/icons/chatbot.png"
  
          }, {
              "id": 14,
              "title": "線上 meteor 讀書會",
              "weblink": "https://www.facebook.com/groups/930921220347797/",
              "memo": "",
              "icon": "images/icons/meteor.png"
  
          }, {
              "id": 15,
              "title": "線上 xamarin & C# 讀書會",
              "weblink": "https://www.facebook.com/groups/611143505736213/",
              "memo": "",
              "icon": "images/icons/xamarin.png"
  
          }, {
              "id": 16,
              "title": "線上 go 讀書會",
              "weblink": "https://www.facebook.com/groups/1288435607857868/",
              "memo": "",
              "icon": "images/icons/go.png"
  
          }];
  
          var otherdata = [{
              "title": "線上 創業 讀書會",
              "weblink": "https://www.facebook.com/groups/1746983635561623/",
              "memo": "",
              "icon": "images/icons/business.png"
  
          }];
  
          var languagedata = [{
              "title": "線上 韓語 讀書會",
              "weblink": "https://www.facebook.com/groups/583103035208789/",
              "memo": "",
              "icon": "images/icons/korean.png"
          }, {
              "title": "線上 越南語 讀書會",
              "weblink": "https://www.facebook.com/groups/683209238508614/",
              "memo": "",
              "icon": "images/icons/vietnam.png"
          }, {
              "title": "線上 日語 讀書會",
              "weblink": "https://www.facebook.com/groups/1113446758690591/",
              "memo": "",
              "icon": "images/icons/japan.png"
          }, {
              "title": "線上 英文 讀書會",
              "weblink": "https://www.facebook.com/groups/1781798848754929/",
              "memo": "",
              "icon": "images/icons/english.png"
          }];
          // function OpenAbout() {
          //   IsOpenAbout = (IsOpenAbout == 'false') ? 'true' : 'false';
          //   console.log(IsOpenAbout);
  
          //   return IsOpenAbout
          // }
          // const resp = await fetch('/graphql', {
          //   method: 'post',
          //   headers: {
          //     Accept: 'application/json',
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     query: '{news{title,link,publishedDate,contentSnippet}}',
          //   }),
          //   credentials: 'include',
          // });
          // const { data } = await resp.json();
          //  if (!data || !data.news) throw new Error('Failed to load the news feed.');
          return {
              title: 'React Starter Kit',
              component: _react2.default.createElement(_Home2.default, { programdata: programdata, otherdata: otherdata, languagedata: languagedata })
          };
      }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Home = __webpack_require__(164);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _store = __webpack_require__(126);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _search = __webpack_require__(127);
  
  var _search2 = _interopRequireDefault(_search);
  
  var _Card = __webpack_require__(128);
  
  var _RaisedButton = __webpack_require__(130);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _common = __webpack_require__(107);
  
  var _reactRedux = __webpack_require__(101);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import MenuData from './MenuData';
  var styles = {
      button: { margin: 12 },
      Card: { marginBotton: 10 }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  var Home = function (_Component) {
      (0, _inherits3.default)(Home, _Component);
  
      function Home(props) {
          (0, _classCallCheck3.default)(this, Home);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
  
          _this.OpenAbout = function () {
              var setLeftmenu = _this.props.setLeftmenu;
              //   console.log('ttest');
  
              setLeftmenu({
                  openMenu: !_this.props.common.openMenu,
                  openMenuEvent: false
              });
          };
  
          _this.props = props;
          //        console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(Home, [{
          key: 'render',
          value: function render() {
              var _this2 = this;
  
              var common = this.props.common;
              var OpenAbout = this.OpenAbout;
  
  
              return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                      _Layout2.default,
                      { name: 'polo' },
                      _react2.default.createElement(
                          'div',
                          { className: _Home2.default.root },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.container },
                              _react2.default.createElement(
                                  _Card.Card,
                                  { style: styles.Card },
                                  _react2.default.createElement(_Card.CardHeader, {
                                      title: '\u6B61\u8FCE\u4F86\u5230\u8B80\u66F8\u6703',
                                      subtitle: '\u7531',
                                      avatar: "/images/logo.png"
                                  }),
                                  _react2.default.createElement(
                                      _Card.CardMedia,
                                      {
                                          overlay: _react2.default.createElement(_Card.CardTitle, { title: '\u9019\u4E0D\u662F\u4E00\u500B\u5BE6\u9AD4\u7684\u8B80\u66F8\u6703,\u4F46\u4F60\u6703\u611B\u4E0A\u4ED6', subtitle: '\u662F\u900F\u904EZoom\u7DDA\u4E0A\u6703\u8B70\u8EDF\u9AD4\u6240\u9032\u884C\u7684\u8B80\u66F8\u6703,\u800C\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u9EDE,\u53EA\u8981\u53EF\u4EE5\u4E0A\u7DB2\u6709\u5B89\u88DDZoom\u8EDF\u9AD4,\u90FD\u53EF\u4EE5\u4E00\u8D77\u4F86\u4EAB\u53D7\u5B78\u7FD2\u7684\u6A02\u8DA3' })
                                      },
                                      _react2.default.createElement('img', { src: "/images/1.jpg" })
                                  ),
                                  _react2.default.createElement(_Card.CardTitle, { title: '\u518D\u4E5F\u4E0D\u662F\u4E00\u500B\u4EBA\u8B80\u66F8', subtitle: '\u7DDA\u4E0A\u8B80\u66F8\u6703 \u8B93\u5728\u5B78\u7FD2\u77E5\u8B58\u7684\u8DEF\u4E0A\u4E0D\u5B64\u55AE,\u53EF\u4EE5\u5FEB\u901F\u653B\u7565\u4E26\u85C9\u7531\u7DDA\u4E0A\u6703\u8B70\u4EA4\u8AC7\u8207\u4E3B\u984C\u63A2\u7D22\u767C\u73FE,\u539F\u4F86\u5B78\u7FD2\u53EA\u8981\u627E\u5C0D\u540C\u597D \u4E00\u5207\u662F\u5982\u6B64\u7684\u9806\u66A2' }),
                                  _react2.default.createElement(_Card.CardText, null),
                                  _react2.default.createElement(
                                      _Card.CardActions,
                                      null,
                                      _react2.default.createElement(_RaisedButton2.default, {
                                          label: '\u66F4\u4E86\u89E3\u7DDA\u4E0A\u8B80\u66F8\u6703',
                                          labelPosition: 'before',
                                          primary: true,
                                          icon: _react2.default.createElement(_store2.default, null),
                                          style: styles.button
                                      }),
                                      _react2.default.createElement(_RaisedButton2.default, {
                                          label: '\u60F3\u8981\u518D\u63A2\u7D22\u770B\u770B\u9084\u6709\u4EC0\u9EBC\u8B80\u66F8\u6703',
                                          labelPosition: 'before',
                                          primary: true,
                                          icon: _react2.default.createElement(_search2.default, null),
                                          style: styles.button,
                                          onTouchTap: function onTouchTap() {
                                              return _this2.OpenAbout();
                                          }
                                      })
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return Home;
  }(_react.Component);
  
  // Home.propTypes = {
  
  // };
  
  
  var mapState = function mapState(state) {
      return {
  
          common: state.common
  
      };
  };
  var mapDispatch = {
      setLeftmenu: _common.setLeftmenu
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _withStyles2.default)(_Home2.default)(Home));

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(165);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Home_root_2IM {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n/*.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}*/\n\n.Home_news_oTy {\n  padding: 0;\n}\n\n.Home_avatar_1TH {\n  margin: 5;\n}\n\n.Home_newsItem_3Ob {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home_newsTitle_1yW {\n  font-size: 1.125em;\n}\n\n.Home_newsTitle_1yW,\n.Home_newsDesc_21L {\n  display: block;\n}\n\n.Home_publishedDate_2Mw {\n  font-size: 0.8em;\n  color: #777;\n}", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAGD;;;;GAIG;;AAEH;EACE,WAAW;CACZ;;AAED;EACE,UAAU;CACX;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n\n/*.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}*/\n\n.news {\n  padding: 0;\n}\n\n.avatar {\n  margin: 5;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n\n.publishedDate {\n  font-size: 0.8em;\n  color: #777;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home_root_2IM",
  	"news": "Home_news_oTy",
  	"avatar": "Home_avatar_1TH",
  	"newsItem": "Home_newsItem_3Ob",
  	"newsTitle": "Home_newsTitle_1yW",
  	"newsDesc": "Home_newsDesc_21L",
  	"publishedDate": "Home_publishedDate_2Mw"
  };

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Contact = __webpack_require__(167);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Contact Us';
  
  exports.default = {
  
    path: '/contact',
  
    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(_Contact2.default, { title: title })
      };
    }
  };

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Contact = __webpack_require__(168);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Contact(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: _Contact2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Contact2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            '...'
          )
        )
      )
    );
  }
  
  Contact.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(169);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Contact_root_1G9 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact_container_2Tn {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/contact/Contact.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADlBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Contact_root_1G9",
  	"container": "Contact_container_2Tn"
  };

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Login = __webpack_require__(171);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = '登入後可以使用更多讀書會的功能歐';
  
  exports.default = {
  
      path: '/login',
  
      action: function action() {
          return {
              title: title,
              component: _react2.default.createElement(_Login2.default, { title: title })
          };
      }
  };

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Login = __webpack_require__(172);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Login(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: _Login2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Login2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            { className: _Login2.default.lead },
            '\u767B\u5165\u7DDA\u4E0A\u8B80\u66F8\u6703'
          ),
          _react2.default.createElement(
            'div',
            { className: _Login2.default.formGroup },
            _react2.default.createElement(
              'a',
              { className: _Login2.default.facebook, href: '/login/facebook' },
              _react2.default.createElement(
                'svg',
                {
                  className: _Login2.default.icon,
                  width: '30',
                  height: '30',
                  viewBox: '0 0 30 30',
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                _react2.default.createElement('path', {
                  d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z'
                })
              ),
              _react2.default.createElement(
                'span',
                null,
                '\u4F7F\u7528 Facebook\u5E33\u865F \u767B\u5165'
              )
            )
          )
        )
      )
    );
  }
  
  Login.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(173);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Login_root_rQN {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Login_container_2BV {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 500px;\n}\n\n.Login_lead_1mJ {\n  font-size: 1.25em;\n}\n\n.Login_formGroup_25T {\n  margin-bottom: 15px;\n}\n\n.Login_label_2G0 {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.Login_input_1bT {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n\n.Login_input_1bT:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.Login_button_11e {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.Login_button_11e:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.Login_button_11e:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.Login_facebook_2nZ {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n\n.Login_facebook_2nZ:hover {\n  background: #2d4373;\n}\n\n.Login_google_23H {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n\n.Login_google_23H:hover {\n  background: #c23321;\n}\n\n.Login_twitter_AJd {\n  border-color: #55acee;\n  background: #55acee;\n}\n\n.Login_twitter_AJd:hover {\n  background: #2795e9;\n}\n\n.Login_icon_34k {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.Login_lineThrough_Upb {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.Login_lineThrough_Upb::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.Login_lineThrough_Upb::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;;AAED;EACE,mCAAmC;CACpC;;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 500px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Login_root_rQN",
  	"container": "Login_container_2BV",
  	"lead": "Login_lead_1mJ",
  	"formGroup": "Login_formGroup_25T",
  	"label": "Login_label_2G0",
  	"input": "Login_input_1bT",
  	"button": "Login_button_11e",
  	"facebook": "Login_facebook_2nZ Login_button_11e",
  	"google": "Login_google_23H Login_button_11e",
  	"twitter": "Login_twitter_AJd Login_button_11e",
  	"icon": "Login_icon_34k",
  	"lineThrough": "Login_lineThrough_Upb"
  };

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Register = __webpack_require__(175);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'New User Registration';
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(_Register2.default, { title: title })
      };
    }
  };

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Register = __webpack_require__(176);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Register(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: _Register2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Register2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            '...'
          )
        )
      )
    );
  }
  
  Register.propTypes = { title: _react.PropTypes.string.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(177);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Register.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Register_root_1hu {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Register_container_Ojh {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/register/Register.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADlBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Register.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Register_root_1hu",
  	"container": "Register_container_Ojh"
  };

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Admin = __webpack_require__(179);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Admin Page';
  var isAdmin = false;
  
  exports.default = {
  
    path: '/admin',
  
    action: function action() {
      if (!isAdmin) {
        return { redirect: '/login' };
      }
  
      return {
        title: title,
        component: _react2.default.createElement(_Admin2.default, { title: title })
      };
    }
  };

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Admin = __webpack_require__(180);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Admin(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: _Admin2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Admin2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            '...'
          )
        )
      )
    );
  }
  
  Admin.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_Admin2.default)(Admin);

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(181);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Admin.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Admin.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Admin_root_P91 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Admin_container_301 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/admin/Admin.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADlBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Admin.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Admin_root_P91",
  	"container": "Admin_container_301"
  };

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(46);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Events = __webpack_require__(183);
  
  var _Events2 = _interopRequireDefault(_Events);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
      path: '/events',
      action: function action() {
          var _this = this;
  
          return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
              var resp, _ref, eventdata;
  
              return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              _context.next = 2;
                              return (0, _fetch2.default)('/graphql', {
                                  method: 'post',
                                  headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                  },
                                  body: (0, _stringify2.default)({
                                      query: '{events2 {title}}'
                                  }),
                                  credentials: 'include'
                              });
  
                          case 2:
                              resp = _context.sent;
                              _context.next = 5;
                              return resp.json();
  
                          case 5:
                              _ref = _context.sent;
                              eventdata = _ref.eventdata;
  
                              console.log(eventdata);
                              console.log('data');
  
                              // if (!data || !data.events) throw new Error('Failed to load the news feed.');
                              // console.log(data);
                              return _context.abrupt('return', {
                                  title: '行事曆',
                                  component: _react2.default.createElement(_Events2.default, { eventdata: eventdata })
                              });
  
                          case 10:
                          case 'end':
                              return _context.stop();
                      }
                  }
              }, _callee, _this);
          }))();
      }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Events = __webpack_require__(184);
  
  var _Events2 = _interopRequireDefault(_Events);
  
  var _store = __webpack_require__(126);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _search = __webpack_require__(127);
  
  var _search2 = _interopRequireDefault(_search);
  
  var _Card = __webpack_require__(128);
  
  var _RaisedButton = __webpack_require__(130);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _TextField = __webpack_require__(142);
  
  var _TextField2 = _interopRequireDefault(_TextField);
  
  var _Table = __webpack_require__(140);
  
  var _reactRedux = __webpack_require__(101);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var styles = {
      button: { margin: 12 },
      Card: { marginBotton: 10 }
  };
  //import MenuData from './MenuData';
  
  var Events = function (_Component) {
      (0, _inherits3.default)(Events, _Component);
  
      function Events(props) {
          (0, _classCallCheck3.default)(this, Events);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Events.__proto__ || (0, _getPrototypeOf2.default)(Events)).call(this, props));
  
          _this.OpenAbout = function () {
              // const { setLeftmenu } = this.props;
              console.log('ttest');
              // setLeftmenu({
              //     openMenu: !this.props.common.openMenu,
              //     openMenuEvent: false
              // });
          };
  
          _this.props = props;
          //        console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(Events, [{
          key: 'render',
          value: function render() {
              //const { common } = this.props;
              //const { OpenAbout } = this;
              var eventdata = this.props.eventdata;
  
              return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                      _Layout2.default,
                      { name: 'polo' },
                      _react2.default.createElement(
                          'div',
                          { className: _Events2.default.root },
                          _react2.default.createElement(
                              'div',
                              { className: _Events2.default.container },
                              _react2.default.createElement(
                                  _Card.Card,
                                  null,
                                  _react2.default.createElement(
                                      _Card.CardText,
                                      null,
                                      _react2.default.createElement(
                                          'div',
                                          { className: _Events2.default.flexContainer },
                                          _react2.default.createElement(
                                              'div',
                                              { className: _Events2.default.flex2 },
                                              _react2.default.createElement(_TextField2.default, { hintText: '\u8F38\u5165\u95DC\u9375\u5B57', fullWidth: true, id: 'search' })
                                          )
                                      )
                                  ),
                                  _react2.default.createElement(
                                      _Table.Table,
                                      { adjustForCheckbox: false },
                                      _react2.default.createElement(
                                          _Table.TableHeader,
                                          null,
                                          _react2.default.createElement(
                                              _Table.TableRow,
                                              null,
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  '\u5F71\u7247\u540D\u7A31'
                                              ),
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  '\u5167\u5BB9'
                                              ),
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  'Tags'
                                              )
                                          )
                                      ),
                                      _react2.default.createElement(_Table.TableBody, null)
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return Events;
  }(_react.Component);
  
  // Events.propTypes = {
  
  // };
  
  
  var mapState = function mapState(state) {
      return {
  
          common: state.common
  
      };
  };
  var mapDispatch = {};
  
  exports.default = (0, _reactRedux.connect)(mapState)((0, _withStyles2.default)(_Events2.default)(Events));

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(185);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Events.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Events.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Events_root_3U4 {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n/*.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}*/\n\n.Events_news_2n8 {\n    padding: 0;\n}\n\n.Events_avatar_1YS {\n    margin: 5;\n}\n\n.Events_newsItem_3IH {\n    list-style-type: none;\n    padding-bottom: 6px;\n}\n\n.Events_newsTitle_1OU {\n    font-size: 1.125em;\n}\n\n.Events_newsTitle_1OU,\n.Events_newsDesc_N3W {\n    display: block;\n}\n\n.Events_publishedDate_Iqj {\n    font-size: 0.8em;\n    color: #777;\n}", "", {"version":3,"sources":["/./routes/events/Events.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADnBD;IACI,mBAAmB;IACnB,oBAAoB;CACvB;;AAGD;;;;GAIG;;AAEH;IACI,WAAW;CACd;;AAED;IACI,UAAU;CACb;;AAED;IACI,sBAAsB;IACtB,oBAAoB;CACvB;;AAED;IACI,mBAAmB;CACtB;;AAED;;IAEI,eAAe;CAClB;;AAED;IACI,iBAAiB;IACjB,YAAY;CACf","file":"Events.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n.root {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n\n/*.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}*/\n\n.news {\n    padding: 0;\n}\n\n.avatar {\n    margin: 5;\n}\n\n.newsItem {\n    list-style-type: none;\n    padding-bottom: 6px;\n}\n\n.newsTitle {\n    font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n    display: block;\n}\n\n.publishedDate {\n    font-size: 0.8em;\n    color: #777;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Events_root_3U4",
  	"news": "Events_news_2n8",
  	"avatar": "Events_avatar_1YS",
  	"newsItem": "Events_newsItem_3IH",
  	"newsTitle": "Events_newsTitle_1OU",
  	"newsDesc": "Events_newsDesc_N3W",
  	"publishedDate": "Events_publishedDate_Iqj"
  };

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(46);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Youtube = __webpack_require__(187);
  
  var _Youtube2 = _interopRequireDefault(_Youtube);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
      path: '/youtube',
      action: function action() {
          var _this = this;
  
          return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
              var resp, youtubedata;
              return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              _context.next = 2;
                              return (0, _fetch2.default)('/graphql', {
                                  method: 'post',
                                  headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                  },
                                  body: (0, _stringify2.default)({
                                      query: '{Youtube {title,videoId,description,tags}}'
                                  }),
                                  credentials: 'include'
                              });
  
                          case 2:
                              resp = _context.sent;
                              _context.next = 5;
                              return resp.json();
  
                          case 5:
                              youtubedata = _context.sent;
  
                              console.log(youtubedata);
                              console.log('youtubedata');
  
                              // if (!data || !data.events) throw new Error('Failed to load the news feed.');
                              // console.log(data);
                              return _context.abrupt('return', {
                                  title: '影片資料',
                                  component: _react2.default.createElement(_Youtube2.default, { youtubedata: youtubedata })
                              });
  
                          case 9:
                          case 'end':
                              return _context.stop();
                      }
                  }
              }, _callee, _this);
          }))();
      }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Youtube = __webpack_require__(188);
  
  var _Youtube2 = _interopRequireDefault(_Youtube);
  
  var _store = __webpack_require__(126);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _search = __webpack_require__(127);
  
  var _search2 = _interopRequireDefault(_search);
  
  var _Card = __webpack_require__(128);
  
  var _RaisedButton = __webpack_require__(130);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _Table = __webpack_require__(140);
  
  var _TextField = __webpack_require__(142);
  
  var _TextField2 = _interopRequireDefault(_TextField);
  
  var _android = __webpack_require__(143);
  
  var _android2 = _interopRequireDefault(_android);
  
  var _FlatButton = __webpack_require__(144);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  var _AutoComplete = __webpack_require__(190);
  
  var _AutoComplete2 = _interopRequireDefault(_AutoComplete);
  
  var _reactRedux = __webpack_require__(101);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import MenuData from './MenuData';
  var styles = {
      button: { margin: 12 },
      Card: { marginBotton: 10 }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  var TableHeaderData = ["影片名稱", "Tags", "內容"];
  
  // const TableRowData = [
  //     { time: "time", kind: "kind", speaker: "speaker", content: "content" },
  //     { time: "time", kind: "kind", speaker: "speaker", content: "content" },
  // ];
  
  
  var Youtube = function (_Component) {
      (0, _inherits3.default)(Youtube, _Component);
  
      function Youtube(props) {
          (0, _classCallCheck3.default)(this, Youtube);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Youtube.__proto__ || (0, _getPrototypeOf2.default)(Youtube)).call(this, props));
  
          _this.props = props;
          //        console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(Youtube, [{
          key: 'render',
          value: function render() {
              var common = this.props.common;
  
              var youtubedata = this.props.youtubedata.data.Youtube;
              //  console.log(youtubedata);
  
              youtubedata.forEach(function (v) {
                  console.log(v.tags);
              });
  
              return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                      _Layout2.default,
                      { name: 'polo' },
                      _react2.default.createElement(
                          'div',
                          { className: _Youtube2.default.root },
                          _react2.default.createElement(
                              'div',
                              { className: _Youtube2.default.container },
                              _react2.default.createElement(
                                  _Card.Card,
                                  null,
                                  _react2.default.createElement(
                                      _Card.CardText,
                                      null,
                                      _react2.default.createElement(
                                          'div',
                                          { className: _Youtube2.default.flexContainer },
                                          _react2.default.createElement(
                                              'div',
                                              { className: _Youtube2.default.flex2 },
                                              _react2.default.createElement(_AutoComplete2.default, {
                                                  floatingLabelText: 'T\u8F38\u5165\u95DC\u9375\u5B57',
                                                  filter: _AutoComplete2.default.fuzzyFilter,
                                                  dataSource: keyword,
                                                  maxSearchResults: 5,
                                                  fullWidth: true
                                              })
                                          )
                                      )
                                  ),
                                  _react2.default.createElement(
                                      _Table.Table,
                                      { adjustForCheckbox: false },
                                      _react2.default.createElement(
                                          _Table.TableHeader,
                                          null,
                                          _react2.default.createElement(
                                              _Table.TableRow,
                                              null,
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  '\u5F71\u7247\u540D\u7A31'
                                              ),
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  '\u5167\u5BB9'
                                              ),
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  'Tags'
                                              )
                                          )
                                      ),
                                      _react2.default.createElement(
                                          _Table.TableBody,
                                          null,
                                          youtubedata.map(function (data, index) {
  
                                              var url = 'https://www.youtube.com/watch?v=' + data.videoId;
                                              return _react2.default.createElement(
                                                  _Table.TableRow,
                                                  { key: index },
                                                  _react2.default.createElement(
                                                      _Table.TableRowColumn,
                                                      null,
                                                      _react2.default.createElement(
                                                          'a',
                                                          { href: url, target: '_blank' },
                                                          '    ',
                                                          data.title
                                                      )
                                                  ),
                                                  _react2.default.createElement(
                                                      _Table.TableRowColumn,
                                                      null,
                                                      data.description
                                                  ),
                                                  _react2.default.createElement(
                                                      _Table.TableRowColumn,
                                                      null,
                                                      data.tags
                                                  )
                                              );
                                          })
                                      )
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return Youtube;
  }(_react.Component);
  
  // Events.propTypes = {
  
  // };
  
  
  var mapState = function mapState(state) {
      return {
  
          common: state.common
  
      };
  };
  var mapDispatch = {};
  
  exports.default = (0, _reactRedux.connect)(mapState)((0, _withStyles2.default)(_Youtube2.default)(Youtube));

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(189);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Youtube.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Youtube.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Youtube.css","sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 190 */
/***/ function(module, exports) {

  module.exports = require("material-ui/AutoComplete");

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Speaker = __webpack_require__(192);
  
  var _Speaker2 = _interopRequireDefault(_Speaker);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
      path: '/speaker',
      action: function action() {
          var _this = this;
  
          return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
              return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              return _context.abrupt('return', {
                                  title: '影片資料',
                                  component: _react2.default.createElement(_Speaker2.default, null)
                              });
  
                          case 1:
                          case 'end':
                              return _context.stop();
                      }
                  }
              }, _callee, _this);
          }))();
      }
  };

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(25);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(26);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(27);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(28);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(29);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(19);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Speak = __webpack_require__(193);
  
  var _Speak2 = _interopRequireDefault(_Speak);
  
  var _store = __webpack_require__(126);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _search = __webpack_require__(127);
  
  var _search2 = _interopRequireDefault(_search);
  
  var _Card = __webpack_require__(128);
  
  var _RaisedButton = __webpack_require__(130);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _Table = __webpack_require__(140);
  
  var _TextField = __webpack_require__(142);
  
  var _TextField2 = _interopRequireDefault(_TextField);
  
  var _android = __webpack_require__(143);
  
  var _android2 = _interopRequireDefault(_android);
  
  var _FlatButton = __webpack_require__(144);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  var _AutoComplete = __webpack_require__(190);
  
  var _AutoComplete2 = _interopRequireDefault(_AutoComplete);
  
  var _reactRedux = __webpack_require__(101);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import MenuData from './MenuData';
  var styles = {
      button: { margin: 12 },
      Card: { marginBotton: 10 }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  var TableHeaderData = ["影片名稱", "Tags", "內容"];
  
  // const TableRowData = [
  //     { time: "time", kind: "kind", speaker: "speaker", content: "content" },
  //     { time: "time", kind: "kind", speaker: "speaker", content: "content" },
  // ];
  
  
  var Speak = function (_Component) {
      (0, _inherits3.default)(Speak, _Component);
  
      function Speak(props) {
          (0, _classCallCheck3.default)(this, Speak);
  
          var _this = (0, _possibleConstructorReturn3.default)(this, (Speak.__proto__ || (0, _getPrototypeOf2.default)(Speak)).call(this, props));
  
          _this.props = props;
          //        console.log(this.props);
          return _this;
      }
  
      (0, _createClass3.default)(Speak, [{
          key: 'render',
          value: function render() {
              var common = this.props.common;
              //  console.log(youtubedata);
  
  
              return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                      _Layout2.default,
                      { name: 'polo' },
                      _react2.default.createElement(
                          'div',
                          { className: _Speak2.default.root },
                          _react2.default.createElement(
                              'div',
                              { className: _Speak2.default.container },
                              _react2.default.createElement(
                                  _Card.Card,
                                  null,
                                  _react2.default.createElement(
                                      _Card.CardText,
                                      null,
                                      _react2.default.createElement(
                                          'div',
                                          { className: _Speak2.default.flexContainer },
                                          _react2.default.createElement('div', { className: _Speak2.default.flex2 })
                                      )
                                  ),
                                  _react2.default.createElement(
                                      _Table.Table,
                                      { adjustForCheckbox: false },
                                      _react2.default.createElement(
                                          _Table.TableHeader,
                                          null,
                                          _react2.default.createElement(
                                              _Table.TableRow,
                                              null,
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  '\u5F71\u7247\u540D\u7A31'
                                              ),
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  '\u5167\u5BB9'
                                              ),
                                              _react2.default.createElement(
                                                  _Table.TableHeaderColumn,
                                                  null,
                                                  'Tags'
                                              )
                                          )
                                      ),
                                      _react2.default.createElement(_Table.TableBody, null)
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);
      return Speak;
  }(_react.Component);
  
  // Events.propTypes = {
  
  // };
  
  
  var mapState = function mapState(state) {
      return {
  
          common: state.common
  
      };
  };
  var mapDispatch = {};
  
  exports.default = (0, _reactRedux.connect)(mapState)((0, _withStyles2.default)(_Speak2.default)(Speak));

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(194);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Speak.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Speak.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Speak.css","sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(46);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Content = __webpack_require__(196);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '*',
  
    action: function action(_ref) {
      var _this = this;
  
      var path = _ref.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref2, data;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{content(path:"' + path + '"){path,title,content,component}}'
                  }),
                  credentials: 'include'
                });
  
              case 2:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 5;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 5:
                _context.next = 7;
                return resp.json();
  
              case 7:
                _ref2 = _context.sent;
                data = _ref2.data;
  
                if (!(!data || !data.content)) {
                  _context.next = 11;
                  break;
                }
  
                return _context.abrupt('return', undefined);
  
              case 11:
                return _context.abrupt('return', {
                  title: data.content.title,
                  component: _react2.default.createElement(_Content2.default, data.content)
                });
  
              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Content = __webpack_require__(197);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  var _Menu = __webpack_require__(122);
  
  var _Menu2 = _interopRequireDefault(_Menu);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Content(_ref) {
    var path = _ref.path,
        title = _ref.title,
        content = _ref.content;
  
    return _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: _Content2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Content2.default.container },
          _react2.default.createElement(_Menu2.default, null),
          title && path !== '/' && _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content } })
        )
      )
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  Content.propTypes = {
    path: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.string
  };
  
  exports.default = (0, _withStyles2.default)(_Content2.default)(Content);

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(198);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Content.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Content.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Content_root_aWU {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Content_container_2OJ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/content/Content.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADlBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Content.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Content_root_aWU",
  	"container": "Content_container_2OJ"
  };

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _NotFound = __webpack_require__(200);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Page Not Found';
  
  exports.default = {
  
    path: '*',
  
    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(_NotFound2.default, { title: title }),
        status: 404
      };
    }
  };

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(15);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(40);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(86);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _NotFound = __webpack_require__(201);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function NotFound(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      { full: false },
      _react2.default.createElement(
        'div',
        { className: _NotFound2.default.root },
        _react2.default.createElement(
          'div',
          { className: _NotFound2.default.container },
          _react2.default.createElement(
            'h1',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      )
    );
  }
  
  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(202);
      var insertCss = __webpack_require__(44);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(43)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.NotFound_root_3wh {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound_container_1BO {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAE9E;;gFAE8E;EAE9E;;gFAE8E;EAE9E,gCAAgC;EAEhC,2BAA2B;EAE3B,6BAA6B;EAE7B,iCAAiC;CAClC;;ADlBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "NotFound_root_3wh",
  	"container": "NotFound_container_1BO"
  };

/***/ },
/* 203 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;
  
  var _redux = __webpack_require__(115);
  
  var _reduxThunk = __webpack_require__(205);
  
  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
  
  var _reducers = __webpack_require__(206);
  
  var _reducers2 = _interopRequireDefault(_reducers);
  
  var _createHelpers = __webpack_require__(211);
  
  var _createHelpers2 = _interopRequireDefault(_createHelpers);
  
  var _logger = __webpack_require__(212);
  
  var _logger2 = _interopRequireDefault(_logger);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function configureStore(initialState, helpersConfig) {
    var helpers = (0, _createHelpers2.default)(helpersConfig);
    var middleware = [_reduxThunk2.default.withExtraArgument(helpers)];
  
    var enhancer = void 0;
  
    if (true) {
      middleware.push((0, _logger2.default)());
  
      // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
      var devToolsExtension = function devToolsExtension(f) {
        return f;
      };
      if (false) {
        devToolsExtension = window.devToolsExtension();
      }
  
      enhancer = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), devToolsExtension);
    } else {
      enhancer = _redux.applyMiddleware.apply(undefined, middleware);
    }
  
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (false) {
      module.hot.accept('../reducers', function () {
        return store.replaceReducer(require('../reducers').default);
      } // eslint-disable-line global-require
      );
    }
  
    return store;
  }

/***/ },
/* 205 */
/***/ function(module, exports) {

  module.exports = require("redux-thunk");

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _redux = __webpack_require__(115);
  
  var _runtime = __webpack_require__(207);
  
  var _runtime2 = _interopRequireDefault(_runtime);
  
  var _intl = __webpack_require__(208);
  
  var _intl2 = _interopRequireDefault(_intl);
  
  var _common = __webpack_require__(209);
  
  var _common2 = _interopRequireDefault(_common);
  
  var _tablecs = __webpack_require__(210);
  
  var _tablecs2 = _interopRequireDefault(_tablecs);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  //import test from './test';
  exports.default = (0, _redux.combineReducers)({
    runtime: _runtime2.default,
    intl: _intl2.default,
    tablecs: _tablecs2.default,
    common: _common2.default
  });

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(133);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _extends3 = __webpack_require__(3);
  
  var _extends4 = _interopRequireDefault(_extends3);
  
  exports.default = runtime;
  
  var _constants = __webpack_require__(103);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function runtime() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];
  
    switch (action.type) {
      case _constants.SET_RUNTIME_VARIABLE:
        return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.payload.name, action.payload.value));
      default:
        return state;
    }
  }

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(133);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _extends3 = __webpack_require__(3);
  
  var _extends4 = _interopRequireDefault(_extends3);
  
  exports.default = intl;
  
  var _constants = __webpack_require__(103);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function intl() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];
  
    if (state === null) {
      return {
        initialNow: Date.now()
      };
    }
  
    switch (action.type) {
      case _constants.SET_LOCALE_START:
        {
          var locale = state[action.payload.locale] ? action.payload.locale : state.locale;
          return (0, _extends4.default)({}, state, {
            locale: locale,
            newLocale: action.payload.locale
          });
        }
  
      case _constants.SET_LOCALE_SUCCESS:
        {
          return (0, _extends4.default)({}, state, {
            locale: action.payload.locale,
            newLocale: null,
            messages: (0, _extends4.default)({}, state.messages, (0, _defineProperty3.default)({}, action.payload.locale, action.payload.messages))
          });
        }
  
      case _constants.SET_LOCALE_ERROR:
        {
          return (0, _extends4.default)({}, state, {
            newLocale: null
          });
        }
  
      default:
        {
          return state;
        }
    }
  }

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _extends2 = __webpack_require__(3);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  exports.default = common;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var initialState = {
      openMenu: false,
      openMenuEvent: false
  };
  
  function common() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments[1];
  
  
      //  console.log(action.payload)
      switch (action.type) {
          case 'SET_LEFTMENU':
  
              //邏輯與非同步在action    
              return (0, _extends3.default)({}, state, {
                  openMenu: action.payload.openMenu,
                  openMenuEvent: action.payload.openMenuEvent
  
              });
          //  return action.payload.common
  
          default:
              return state;
      }
  }

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _extends2 = __webpack_require__(3);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  exports.default = tablecs;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var initialState = {
      table: { table: "testTable" },
      data: []
  };
  var tabledata = [];
  
  var tableListContainer = [];
  var readyUpdata = {
      id: "",
      title: "",
      calendar: null,
      memo: "",
      speaker: ""
  
  };
  
  //console.log('test reducer');
  function tablecs() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments[1];
  
      switch (action.type) {
          case 'INSERT_TABLE':
              console.log(action.payload.data);
              //使用Es7語法 把 物件轉成陣列
              var arr = action.payload.data.values(obj);
              tabledata.push(arr);
              // tabledata.push(action.payload.data);
              console.log(arr);
  
              return (0, _extends3.default)({}, state, {
                  //    tableheader: action.payload.tableheader,
                  table: action.payload.table,
                  data: tabledata
              });
          //  return action.payload.common
          case 'SHOW_TABLE':
              return state;
          case 'SEND_ONEDATA':
  
              console.log(action.payload.onedata);
              readyUpdata = action.payload.onedata;
              //console.log('send onedata');
              //console.log(readyUpdata);
  
              return (0, _extends3.default)({}, state, { readyUpdata: readyUpdata });
          default:
              return state;
      }
  }

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(3);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(46);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  exports.default = createHelpers;
  
  var _fetch = __webpack_require__(74);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function createGraphqlRequest(fetchKnowingCookie) {
    return function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(query, variables) {
        var fetchConfig, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchConfig = {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({ query: query, variables: variables }),
                  credentials: 'include'
                };
                _context.next = 3;
                return fetchKnowingCookie('/graphql', fetchConfig);
  
              case 3:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 6;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 6:
                _context.next = 8;
                return resp.json();
  
              case 8:
                return _context.abrupt('return', _context.sent);
  
              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
  
      function graphqlRequest(_x, _x2) {
        return _ref.apply(this, arguments);
      }
  
      return graphqlRequest;
    }();
  }
  
  function createFetchKnowingCookie(_ref2) {
    var cookie = _ref2.cookie;
  
    if (true) {
      return function (url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        var isLocalUrl = /^\/($|[^\/])/.test(url);
  
        // pass cookie only for itself.
        // We can't know cookies for other sites BTW
        if (isLocalUrl && options.credentials === 'include') {
          var headers = (0, _extends3.default)({}, options.headers, {
            cookie: cookie
          });
          return (0, _fetch2.default)(url, (0, _extends3.default)({}, options, { headers: headers }));
        }
  
        return (0, _fetch2.default)(url, options);
      };
    }
  
    return _fetch2.default;
  }
  
  function createHelpers(config) {
    var fetchKnowingCookie = createFetchKnowingCookie(config);
    var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);
  
    return {
      fetch: fetchKnowingCookie,
      graphqlRequest: graphqlRequest,
      history: config.history
    };
  }

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createLogger;
  
  var _util = __webpack_require__(213);
  
  // Server side redux action logger
  function createLogger() {
    return function (store) {
      return function (next) {
        return function (action) {
          // eslint-disable-line no-unused-vars
          var formattedPayload = (0, _util.inspect)(action.payload, {
            colors: true
          });
          console.log(' * ' + action.type + ': ' + formattedPayload); // eslint-disable-line no-console
          return next(action);
        };
      };
    };
  }

/***/ },
/* 213 */
/***/ function(module, exports) {

  module.exports = require("util");

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setRuntimeVariable = setRuntimeVariable;
  
  var _constants = __webpack_require__(103);
  
  function setRuntimeVariable(_ref) {
    var name = _ref.name,
        value = _ref.value;
  
    return {
      type: _constants.SET_RUNTIME_VARIABLE,
      payload: {
        name: name,
        value: value
      }
    };
  } /* eslint-disable import/prefer-default-export */

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map