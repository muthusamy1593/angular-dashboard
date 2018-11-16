(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var pad = function pad(number) {
      return ("0" + number).slice(-2);
    };
    var int = function int(bool) {
      return bool === true ? 1 : 0;
    };
    function debounce(func, wait, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      var timeout;
      return function () {
        var context = this,
            args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = window.setTimeout(function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    }
    var arrayify = function arrayify(obj) {
      return obj instanceof Array ? obj : [obj];
    };

    var do_nothing = function do_nothing() {
      return undefined;
    };

    var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
      return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    };
    var revFormat = {
      D: do_nothing,
      F: function F(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
      },
      G: function G(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      H: function H(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      J: function J(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      K: function K(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
      },
      M: function M(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
      },
      S: function S(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      U: function U(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1000);
      },
      W: function W(dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      },
      Y: function Y(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
      },
      Z: function Z(_, ISODate) {
        return new Date(ISODate);
      },
      d: function d(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      h: function h(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      i: function i(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
      },
      j: function j(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      l: do_nothing,
      m: function m(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      n: function n(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      s: function s(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      w: do_nothing,
      y: function y(dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
      }
    };
    var tokenRegex = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})"
    };
    var formats = {
      Z: function Z(date) {
        return date.toISOString();
      },
      D: function D(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
      },
      F: function F(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
      },
      G: function G(date, locale, options) {
        return pad(formats.h(date, locale, options));
      },
      H: function H(date) {
        return pad(date.getHours());
      },
      J: function J(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
      },
      K: function K(date, locale) {
        return locale.amPM[int(date.getHours() > 11)];
      },
      M: function M(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
      },
      S: function S(date) {
        return pad(date.getSeconds());
      },
      U: function U(date) {
        return date.getTime() / 1000;
      },
      W: function W(date, _, options) {
        return options.getWeek(date);
      },
      Y: function Y(date) {
        return date.getFullYear();
      },
      d: function d(date) {
        return pad(date.getDate());
      },
      h: function h(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
      },
      i: function i(date) {
        return pad(date.getMinutes());
      },
      j: function j(date) {
        return date.getDate();
      },
      l: function l(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
      },
      m: function m(date) {
        return pad(date.getMonth() + 1);
      },
      n: function n(date) {
        return date.getMonth() + 1;
      },
      s: function s(date) {
        return date.getSeconds();
      },
      w: function w(date) {
        return date.getDay();
      },
      y: function y(date) {
        return String(date.getFullYear()).substring(2);
      }
    };

    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";

        switch (s % 10) {
          case 1:
            return "st";

          case 2:
            return "nd";

          case 3:
            return "rd";

          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year"
    };

    var createDateFormatter = function createDateFormatter(_ref) {
      var _ref$config = _ref.config,
          config = _ref$config === void 0 ? defaults : _ref$config,
          _ref$l10n = _ref.l10n,
          l10n = _ref$l10n === void 0 ? english : _ref$l10n;
      return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;

        if (config.formatDate !== undefined) {
          return config.formatDate(dateObj, frmt, locale);
        }

        return frmt.split("").map(function (c, i, arr) {
          return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
      };
    };
    var createDateParser = function createDateParser(_ref2) {
      var _ref2$config = _ref2.config,
          config = _ref2$config === void 0 ? defaults : _ref2$config,
          _ref2$l10n = _ref2.l10n,
          l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
      return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date) return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
          var format = givenFormat || (config || defaults).dateFormat;
          var datestr = String(date).trim();

          if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
          } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
            parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
            var matched,
                ops = [];

            for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
              var token = format[i];
              var isBackSlash = token === "\\";
              var escaped = format[i - 1] === "\\" || isBackSlash;

              if (tokenRegex[token] && !escaped) {
                regexStr += tokenRegex[token];
                var match = new RegExp(regexStr).exec(date);

                if (match && (matched = true)) {
                  ops[token !== "Y" ? "push" : "unshift"]({
                    fn: revFormat[token],
                    val: match[++matchIndex]
                  });
                }
              } else if (!isBackSlash) regexStr += ".";

              ops.forEach(function (_ref3) {
                var fn = _ref3.fn,
                    val = _ref3.val;
                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
              });
            }

            parsedDate = matched ? parsedDate : undefined;
          }
        }

        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
          config.errorHandler(new Error("Invalid date provided: " + date_orig));
          return undefined;
        }

        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
      };
    };
    function compareDates(date1, date2, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      if (timeless !== false) {
        return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
      }

      return date1.getTime() - date2.getTime();
    }
    var getWeek = function getWeek(givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      var week1 = new Date(date.getFullYear(), 0, 4);
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    };
    var isBetween = function isBetween(ts, ts1, ts2) {
      return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
      DAY: 86400000
    };

    var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
    var defaults = {
      _disable: [],
      _enable: [],
      allowInput: false,
      altFormat: "F j, Y",
      altInput: false,
      altInputClass: "form-control input",
      animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
      ariaDateFormat: "F j, Y",
      clickOpens: true,
      closeOnSelect: true,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: false,
      enable: [],
      enableSeconds: false,
      enableTime: false,
      errorHandler: function errorHandler(err) {
        return typeof console !== "undefined" && console.warn(err);
      },
      getWeek: getWeek,
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: false,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: false,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: undefined,
      prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: false,
      showMonths: 1,
      static: false,
      time_24hr: false,
      weekNumbers: false,
      wrap: false
    };

    function toggleClass(elem, className, bool) {
      if (bool === true) return elem.classList.add(className);
      elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
      var e = window.document.createElement(tag);
      className = className || "";
      content = content || "";
      e.className = className;
      if (content !== undefined) e.textContent = content;
      return e;
    }
    function clearNode(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
    function findParent(node, condition) {
      if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
      return undefined;
    }
    function createNumberInput(inputClassName, opts) {
      var wrapper = createElement("div", "numInputWrapper"),
          numInput = createElement("input", "numInput " + inputClassName),
          arrowUp = createElement("span", "arrowUp"),
          arrowDown = createElement("span", "arrowDown");
      numInput.type = "text";
      numInput.pattern = "\\d*";
      if (opts !== undefined) for (var key in opts) {
        numInput.setAttribute(key, opts[key]);
      }
      wrapper.appendChild(numInput);
      wrapper.appendChild(arrowUp);
      wrapper.appendChild(arrowDown);
      return wrapper;
    }

    if (typeof Object.assign !== "function") {
      Object.assign = function (target) {
        if (!target) {
          throw TypeError("Cannot convert undefined or null to object");
        }

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _loop = function _loop() {
          var source = args[_i];

          if (source) {
            Object.keys(source).forEach(function (key) {
              return target[key] = source[key];
            });
          }
        };

        for (var _i = 0; _i < args.length; _i++) {
          _loop();
        }

        return target;
      };
    }

    var DEBOUNCED_CHANGE_MS = 300;

    function FlatpickrInstance(element, instanceConfig) {
      var self = {
        config: Object.assign({}, flatpickr.defaultConfig),
        l10n: english
      };
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
      self._handlers = [];
      self._bind = bind;
      self._setHoursFromDate = setHoursFromDate;
      self._positionCalendar = positionCalendar;
      self.changeMonth = changeMonth;
      self.changeYear = changeYear;
      self.clear = clear;
      self.close = close;
      self._createElement = createElement;
      self.destroy = destroy;
      self.isEnabled = isEnabled;
      self.jumpToDate = jumpToDate;
      self.open = open;
      self.redraw = redraw;
      self.set = set;
      self.setDate = setDate;
      self.toggle = toggle;

      function setupHelperFunctions() {
        self.utils = {
          getDaysInMonth: function getDaysInMonth(month, yr) {
            if (month === void 0) {
              month = self.currentMonth;
            }

            if (yr === void 0) {
              yr = self.currentYear;
            }

            if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
            return self.l10n.daysInMonth[month];
          }
        };
      }

      function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();

        if (self.selectedDates.length || self.config.noCalendar) {
          if (self.config.enableTime) {
            setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
          }

          updateValue(false);
        }

        setCalendarWidth();
        self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (!self.isMobile && isSafari) {
          positionCalendar();
        }

        triggerEvent("onReady");
      }

      function bindToInstance(fn) {
        return fn.bind(self);
      }

      function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
          window.requestAnimationFrame(function () {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";

            if (self.daysContainer !== undefined) {
              var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
              self.daysContainer.style.width = daysWidth + "px";
              self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
              self.calendarContainer.style.removeProperty("visibility");
              self.calendarContainer.style.removeProperty("display");
            }
          });
        }
      }

      function updateTime(e) {
        if (self.selectedDates.length === 0) return;

        if (e !== undefined && e.type !== "blur") {
          timeWrapper(e);
        }

        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();

        if (self._input.value !== prevValue) {
          self._debouncedChange();
        }
      }

      function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
      }

      function military2ampm(hour) {
        switch (hour % 24) {
          case 0:
          case 12:
            return 12;

          default:
            return hour % 12;
        }
      }

      function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
            minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
            seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

        if (self.amPM !== undefined) {
          hours = ampm2military(hours, self.amPM.textContent);
        }

        var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

        if (limitMaxHours) {
          var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
        }

        if (limitMinHours) {
          var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
          if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
        }

        setHours(hours, minutes, seconds);
      }

      function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }

      function setDefaultHours() {
        var hours = self.config.defaultHour;
        var minutes = self.config.defaultMinute;
        var seconds = self.config.defaultSeconds;

        if (self.config.minDate !== undefined) {
          var min_hr = self.config.minDate.getHours();
          var min_minutes = self.config.minDate.getMinutes();
          hours = Math.max(hours, min_hr);
          if (hours === min_hr) minutes = Math.max(min_minutes, minutes);
          if (hours === min_hr && minutes === min_minutes) seconds = self.config.minDate.getSeconds();
        }

        if (self.config.maxDate !== undefined) {
          var max_hr = self.config.maxDate.getHours();
          var max_minutes = self.config.maxDate.getMinutes();
          hours = Math.min(hours, max_hr);
          if (hours === max_hr) minutes = Math.min(max_minutes, minutes);
          if (hours === max_hr && minutes === max_minutes) seconds = self.config.maxDate.getSeconds();
        }

        setHours(hours, minutes, seconds);
      }

      function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
          self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }

        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
      }

      function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);

        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
          changeYear(year);
        }
      }

      function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach(function (ev) {
          return bind(element, ev, handler, options);
        });
        if (element instanceof Array) return element.forEach(function (el) {
          return bind(el, event, handler, options);
        });
        element.addEventListener(event, handler, options);

        self._handlers.push({
          element: element,
          event: event,
          handler: handler,
          options: options
        });
      }

      function onClick(handler) {
        return function (evt) {
          evt.which === 1 && handler(evt);
        };
      }

      function triggerChange() {
        triggerEvent("onChange");
      }

      function bindEvents() {
        if (self.config.wrap) {
          ["open", "close", "toggle", "clear"].forEach(function (evt) {
            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
              return bind(el, "click", self[evt]);
            });
          });
        }

        if (self.isMobile) {
          setupMobile();
          return;
        }

        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
          if (self.config.mode === "range") onMouseOver(e.target);
        });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static) bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "click", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
        bind(window.document, "focus", documentClick, {
          capture: true
        });

        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "mousedown", onClick(self.open));
        }

        if (self.daysContainer !== undefined) {
          bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
          bind(self.monthNav, ["keyup", "increment"], onYearInput);
          bind(self.daysContainer, "mousedown", onClick(selectDate));
        }

        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
          var selText = function selText(e) {
            return e.target.select();
          };

          bind(self.timeContainer, ["increment"], updateTime);
          bind(self.timeContainer, "blur", updateTime, {
            capture: true
          });
          bind(self.timeContainer, "mousedown", onClick(timeIncrement));
          bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
          if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
            return self.secondElement && self.secondElement.select();
          });

          if (self.amPM !== undefined) {
            bind(self.amPM, "mousedown", onClick(function (e) {
              updateTime(e);
              triggerChange();
            }));
          }
        }
      }

      function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

        try {
          if (jumpTo !== undefined) {
            self.currentYear = jumpTo.getFullYear();
            self.currentMonth = jumpTo.getMonth();
          }
        } catch (e) {
          e.message = "Invalid date supplied: " + jumpTo;
          self.config.errorHandler(e);
        }

        self.redraw();
      }

      function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
      }

      function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
      }

      function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;

        if (!self.config.noCalendar) {
          fragment.appendChild(buildMonthNav());
          self.innerContainer = createElement("div", "flatpickr-innerContainer");

          if (self.config.weekNumbers) {
            var _buildWeeks = buildWeeks(),
                weekWrapper = _buildWeeks.weekWrapper,
                weekNumbers = _buildWeeks.weekNumbers;

            self.innerContainer.appendChild(weekWrapper);
            self.weekNumbers = weekNumbers;
            self.weekWrapper = weekWrapper;
          }

          self.rContainer = createElement("div", "flatpickr-rContainer");
          self.rContainer.appendChild(buildWeekdays());

          if (!self.daysContainer) {
            self.daysContainer = createElement("div", "flatpickr-days");
            self.daysContainer.tabIndex = -1;
          }

          buildDays();
          self.rContainer.appendChild(self.daysContainer);
          self.innerContainer.appendChild(self.rContainer);
          fragment.appendChild(self.innerContainer);
        }

        if (self.config.enableTime) {
          fragment.appendChild(buildTime());
        }

        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

        if (self.config.inline || self.config.static) {
          self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

          if (self.config.inline) {
            if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
          }

          if (self.config.static) {
            var wrapper = createElement("div", "flatpickr-wrapper");
            if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
            wrapper.appendChild(self.element);
            if (self.altInput) wrapper.appendChild(self.altInput);
            wrapper.appendChild(self.calendarContainer);
          }
        }

        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
      }

      function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true),
            dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

        if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
          self.todayDateElem = dayElement;
          dayElement.classList.add("today");
          dayElement.setAttribute("aria-current", "date");
        }

        if (dateIsEnabled) {
          dayElement.tabIndex = -1;

          if (isDateSelected(date)) {
            dayElement.classList.add("selected");
            self.selectedDateElem = dayElement;

            if (self.config.mode === "range") {
              toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
              toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
              if (className === "nextMonthDay") dayElement.classList.add("inRange");
            }
          }
        } else {
          dayElement.classList.add("disabled");
        }

        if (self.config.mode === "range") {
          if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }

        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
          self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }

        triggerEvent("onDayCreate", dayElement);
        return dayElement;
      }

      function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
      }

      function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;

        for (var m = startMonth; m != endMonth; m += delta) {
          var month = self.daysContainer.children[m];
          var startIndex = delta > 0 ? 0 : month.children.length - 1;
          var endIndex = delta > 0 ? month.children.length : -1;

          for (var i = startIndex; i != endIndex; i += delta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
          }
        }

        return undefined;
      }

      function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;

        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
          var month = self.daysContainer.children[m];
          var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
          var numMonthDays = month.children.length;

          for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
          }
        }

        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
      }

      function focusOnDay(current, offset) {
        var dayFocused = isInView(document.activeElement || document.body);
        var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) return self._input.focus();
        if (!dayFocused) return focusOnDayElem(startElem);
        getNextAvailableDay(startElem, offset);
      }

      function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(month),
            days = window.document.createDocumentFragment(),
            isMultiMonth = self.config.showMonths > 1,
            prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
            nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth,
            dayIndex = 0;

        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
          days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }

        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
          days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }

        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
          days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }

        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
      }

      function buildDays() {
        if (self.daysContainer === undefined) {
          return;
        }

        clearNode(self.daysContainer);
        if (self.weekNumbers) clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();

        for (var i = 0; i < self.config.showMonths; i++) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }

        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;

        if (self.config.mode === "range" && self.selectedDates.length === 1) {
          onMouseOver();
        }
      }

      function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement = createElement("span", "cur-month");
        var yearInput = createNumberInput("cur-year", {
          tabindex: "-1"
        });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());

        if (self.config.maxDate) {
          yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
          yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }

        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
          container: container,
          yearElement: yearElement,
          monthElement: monthElement
        };
      }

      function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);

        for (var m = self.config.showMonths; m--;) {
          var month = buildMonth();
          self.yearElements.push(month.yearElement);
          self.monthElements.push(month.monthElement);
          self.monthNav.appendChild(month.container);
        }

        self.monthNav.appendChild(self.nextMonthNav);
      }

      function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
          get: function get() {
            return self.__hidePrevMonthArrow;
          },
          set: function set(bool) {
            if (self.__hidePrevMonthArrow !== bool) {
              toggleClass(self.prevMonthNav, "disabled", bool);
              self.__hidePrevMonthArrow = bool;
            }
          }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
          get: function get() {
            return self.__hideNextMonthArrow;
          },
          set: function set(bool) {
            if (self.__hideNextMonthArrow !== bool) {
              toggleClass(self.nextMonthNav, "disabled", bool);
              self.__hideNextMonthArrow = bool;
            }
          }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
      }

      function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
        self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
        self.minuteElement.setAttribute("data-min", "0");
        self.minuteElement.setAttribute("data-max", "59");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

        if (self.config.enableSeconds) {
          self.timeContainer.classList.add("hasSeconds");
          var secondInput = createNumberInput("flatpickr-second");
          self.secondElement = secondInput.getElementsByTagName("input")[0];
          self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
          self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
          self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
          self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
          self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
          self.timeContainer.appendChild(secondInput);
        }

        if (!self.config.time_24hr) {
          self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
          self.amPM.title = self.l10n.toggleTitle;
          self.amPM.tabIndex = -1;
          self.timeContainer.appendChild(self.amPM);
        }

        return self.timeContainer;
      }

      function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

        for (var i = self.config.showMonths; i--;) {
          var container = createElement("div", "flatpickr-weekdaycontainer");
          self.weekdayContainer.appendChild(container);
        }

        updateWeekdays();
        return self.weekdayContainer;
      }

      function updateWeekdays() {
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.concat();

        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
          weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }

        for (var i = self.config.showMonths; i--;) {
          self.weekdayContainer.children[i].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
        }
      }

      function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
          weekWrapper: weekWrapper,
          weekNumbers: weekNumbers
        };
      }

      function changeMonth(value, is_offset) {
        if (is_offset === void 0) {
          is_offset = true;
        }

        var delta = is_offset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;

        if (self.currentMonth < 0 || self.currentMonth > 11) {
          self.currentYear += self.currentMonth > 11 ? 1 : -1;
          self.currentMonth = (self.currentMonth + 12) % 12;
          triggerEvent("onYearChange");
        }

        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
      }

      function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) {
          triggerChangeEvent = true;
        }

        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;

        if (self.config.enableTime === true) {
          setDefaultHours();
        }

        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
      }

      function close() {
        self.isOpen = false;

        if (!self.isMobile) {
          self.calendarContainer.classList.remove("open");

          self._input.classList.remove("active");
        }

        triggerEvent("onClose");
      }

      function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");

        for (var i = self._handlers.length; i--;) {
          var h = self._handlers[i];
          h.element.removeEventListener(h.event, h.handler, h.options);
        }

        self._handlers = [];

        if (self.mobileInput) {
          if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
          self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
          if (self.config.static && self.calendarContainer.parentNode) {
            var wrapper = self.calendarContainer.parentNode;
            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

            if (wrapper.parentNode) {
              while (wrapper.firstChild) {
                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
              }

              wrapper.parentNode.removeChild(wrapper);
            }
          } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }

        if (self.altInput) {
          self.input.type = "text";
          if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
          delete self.altInput;
        }

        if (self.input) {
          self.input.type = self.input._type;
          self.input.classList.remove("flatpickr-input");
          self.input.removeAttribute("readonly");
          self.input.value = "";
        }

        ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
          try {
            delete self[k];
          } catch (_) {}
        });
      }

      function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
        return self.calendarContainer.contains(elem);
      }

      function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
          var isCalendarElement = isCalendarElem(e.target);
          var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
          var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
          var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
            return elem.contains(e.target);
          });

          if (lostFocus && isIgnored) {
            self.close();

            if (self.config.mode === "range" && self.selectedDates.length === 1) {
              self.clear(false);
              self.redraw();
            }
          }
        }
      }

      function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        var newYearNum = newYear,
            isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;

        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
          self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
          self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }

        if (isNewYear) {
          self.redraw();
          triggerEvent("onYearChange");
        }
      }

      function isEnabled(date, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }

        var dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        var bool = self.config.enable.length > 0,
            array = bool ? self.config.enable : self.config.disable;

        for (var i = 0, d; i < array.length; i++) {
          d = array[i];
          if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
            var parsed = self.parseDate(d, undefined, true);
            return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
          } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }

        return !bool;
      }

      function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
        return false;
      }

      function onKeyDown(e) {
        var isInput = e.target === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;

        if (e.keyCode === 13 && isInput) {
          if (allowInput) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            return e.target.blur();
          } else self.open();
        } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
          var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

          switch (e.keyCode) {
            case 13:
              if (isTimeObj) updateTime();else selectDate(e);
              break;

            case 27:
              e.preventDefault();
              focusAndClose();
              break;

            case 8:
            case 46:
              if (isInput && !self.config.allowInput) {
                e.preventDefault();
                self.clear();
              }

              break;

            case 37:
            case 39:
              if (!isTimeObj) {
                e.preventDefault();

                if (self.daysContainer !== undefined && (allowInput === false || isInView(document.activeElement))) {
                  var _delta = e.keyCode === 39 ? 1 : -1;

                  if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                    changeMonth(_delta);
                    focusOnDay(getFirstAvailableDay(1), 0);
                  }
                }
              } else if (self.hourElement) self.hourElement.focus();

              break;

            case 38:
            case 40:
              e.preventDefault();
              var delta = e.keyCode === 40 ? 1 : -1;

              if (self.daysContainer && e.target.$i !== undefined) {
                if (e.ctrlKey) {
                  changeYear(self.currentYear - delta);
                  focusOnDay(getFirstAvailableDay(1), 0);
                } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
              } else if (self.config.enableTime) {
                if (!isTimeObj && self.hourElement) self.hourElement.focus();
                updateTime(e);

                self._debouncedChange();
              }

              break;

            case 9:
              if (!isTimeObj) {
                self.element.focus();
                break;
              }

              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];

                if (target !== undefined) {
                  e.preventDefault();
                  target.focus();
                } else {
                  self.element.focus();
                }
              }

              break;

            default:
              break;
          }
        }

        if (self.amPM !== undefined && e.target === self.amPM) {
          switch (e.key) {
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[0];
              setHoursFromInputs();
              updateValue();
              break;

            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[1];
              setHoursFromInputs();
              updateValue();
              break;
          }
        }

        triggerEvent("onKeyDown", e);
      }

      function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled"))) return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
            initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
            rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
            rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()),
            lastDate = self.daysContainer.lastChild.lastChild.dateObj.getTime();
        var containsDisabled = false;
        var minRange = 0,
            maxRange = 0;

        for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
          if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
          }
        }

        for (var m = 0; m < self.config.showMonths; m++) {
          var month = self.daysContainer.children[m];
          var prevMonth = self.daysContainer.children[m - 1];

          var _loop = function _loop(i, l) {
            var dayElem = month.children[i],
                date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

            if (outOfRange) {
              dayElem.classList.add("notAllowed");
              ["inRange", "startRange", "endRange"].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              return "continue";
            } else if (containsDisabled && !outOfRange) return "continue";

            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
              dayElem.classList.remove(c);
            });

            if (elem !== undefined) {
              elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

              if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
              }
            }
          };

          for (var i = 0, l = month.children.length; i < l; i++) {
            var _ret = _loop(i, l);

            if (_ret === "continue") continue;
          }
        }
      }

      function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
      }

      function open(e, positionElement) {
        if (positionElement === void 0) {
          positionElement = self._positionElement;
        }

        if (self.isMobile === true) {
          if (e) {
            e.preventDefault();
            e.target && e.target.blur();
          }

          if (self.mobileInput !== undefined) {
            self.mobileInput.focus();
            self.mobileInput.click();
          }

          triggerEvent("onOpen");
          return;
        }

        if (self._input.disabled || self.config.inline) return;
        var wasOpen = self.isOpen;
        self.isOpen = true;

        if (!wasOpen) {
          self.calendarContainer.classList.add("open");

          self._input.classList.add("active");

          triggerEvent("onOpen");
          positionCalendar(positionElement);
        }

        if (self.config.enableTime === true && self.config.noCalendar === true) {
          if (self.selectedDates.length === 0) {
            self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), false);
            setDefaultHours();
            updateValue();
          }

          if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
            setTimeout(function () {
              return self.hourElement.select();
            }, 50);
          }
        }
      }

      function minMaxDateSetter(type) {
        return function (date) {
          var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
          var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

          if (dateObj !== undefined) {
            self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
          }

          if (self.selectedDates) {
            self.selectedDates = self.selectedDates.filter(function (d) {
              return isEnabled(d);
            });
            if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
            updateValue();
          }

          if (self.daysContainer) {
            redraw();
            if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
            self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
          }
        };
      }

      function parseConfig() {
        var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
        var userConfig = Object.assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
          get: function get() {
            return self.config._enable;
          },
          set: function set(dates) {
            self.config._enable = parseDateRules(dates);
          }
        });
        Object.defineProperty(self.config, "disable", {
          get: function get() {
            return self.config._disable;
          },
          set: function set(dates) {
            self.config._disable = parseDateRules(dates);
          }
        });
        var timeMode = userConfig.mode === "time";

        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
          formats$$1.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }

        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
          formats$$1.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }

        Object.defineProperty(self.config, "minDate", {
          get: function get() {
            return self.config._minDate;
          },
          set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
          get: function get() {
            return self.config._maxDate;
          },
          set: minMaxDateSetter("max")
        });

        var minMaxTimeSetter = function minMaxTimeSetter(type) {
          return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
          };
        };

        Object.defineProperty(self.config, "minTime", {
          get: function get() {
            return self.config._minTime;
          },
          set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
          get: function get() {
            return self.config._maxTime;
          },
          set: minMaxTimeSetter("max")
        });

        if (userConfig.mode === "time") {
          self.config.noCalendar = true;
          self.config.enableTime = true;
        }

        Object.assign(self.config, formats$$1, userConfig);

        for (var i = 0; i < boolOpts.length; i++) {
          self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        }

        HOOKS.filter(function (hook) {
          return self.config[hook] !== undefined;
        }).forEach(function (hook) {
          self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        for (var _i = 0; _i < self.config.plugins.length; _i++) {
          var pluginConf = self.config.plugins[_i](self) || {};

          for (var key in pluginConf) {
            if (HOOKS.indexOf(key) > -1) {
              self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
            } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
          }
        }

        triggerEvent("onParseConfig");
      }

      function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = Object.assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({
          config: self.config,
          l10n: self.l10n
        });
      }

      function positionCalendar(customPositionElement) {
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
          return acc + child.offsetHeight;
        }, 0),
            calendarWidth = self.calendarContainer.offsetWidth,
            configPos = self.config.position.split(" "),
            configPosVertical = configPos[0],
            configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
            inputBounds = positionElement.getBoundingClientRect(),
            distanceFromBottom = window.innerHeight - inputBounds.bottom,
            showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = top + "px";

        if (!rightMost) {
          self.calendarContainer.style.left = left + "px";
          self.calendarContainer.style.right = "auto";
        } else {
          self.calendarContainer.style.left = "auto";
          self.calendarContainer.style.right = right + "px";
        }
      }

      function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        updateNavigationCurrentMonth();
        buildDays();
      }

      function focusAndClose() {
        self._input.focus();

        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
          setTimeout(self.close, 0);
        } else {
          self.close();
        }
      }

      function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();

        var isSelectable = function isSelectable(day) {
          return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
        };

        var t = findParent(e.target, isSelectable);
        if (t === undefined) return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
          var selectedIndex = isDateSelected(selectedDate);
          if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
          if (self.selectedDates.length === 2) self.clear(false);
          self.selectedDates.push(selectedDate);
          if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
          });
        }
        setHoursFromInputs();

        if (shouldChangeMonth) {
          var isNewYear = self.currentYear !== selectedDate.getFullYear();
          self.currentYear = selectedDate.getFullYear();
          self.currentMonth = selectedDate.getMonth();
          if (isNewYear) triggerEvent("onYearChange");
          triggerEvent("onMonthChange");
        }

        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (self.config.enableTime) setTimeout(function () {
          return self.showTimeInput = true;
        }, 50);
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else self.selectedDateElem && self.selectedDateElem.focus();
        if (self.hourElement !== undefined) setTimeout(function () {
          return self.hourElement !== undefined && self.hourElement.select();
        }, 451);

        if (self.config.closeOnSelect) {
          var single = self.config.mode === "single" && !self.config.enableTime;
          var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

          if (single || range) {
            focusAndClose();
          }
        }

        triggerChange();
      }

      var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
      };

      function set(option, value) {
        if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
          self.config[option] = value;
          if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
            return x();
          });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
        }
        self.redraw();
        jumpToDate();
        updateValue(false);
      }

      function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array) dates = inputDate.map(function (d) {
          return self.parseDate(d, format);
        });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
          switch (self.config.mode) {
            case "single":
            case "time":
              dates = [self.parseDate(inputDate, format)];
              break;

            case "multiple":
              dates = inputDate.split(self.config.conjunction).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            case "range":
              dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            default:
              break;
          }
        } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = dates.filter(function (d) {
          return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }

      function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) {
          triggerChange = false;
        }

        if (format === void 0) {
          format = self.config.dateFormat;
        }

        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
      }

      function parseDateRules(arr) {
        return arr.slice().map(function (rule) {
          if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
            return self.parseDate(rule, undefined, true);
          } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
            from: self.parseDate(rule.from, undefined),
            to: self.parseDate(rule.to, undefined)
          };

          return rule;
        }).filter(function (x) {
          return x;
        });
      }

      function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
          get: function get() {
            return self._showTimeInput;
          },
          set: function set(bool) {
            self._showTimeInput = bool;
            if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
            self.isOpen && positionCalendar();
          }
        });
      }

      function setupInputs() {
        self.input = self.config.wrap ? element.querySelector("[data-input]") : element;

        if (!self.input) {
          self.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }

        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;

        if (self.config.altInput) {
          self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
          self._input = self.altInput;
          self.altInput.placeholder = self.input.placeholder;
          self.altInput.disabled = self.input.disabled;
          self.altInput.required = self.input.required;
          self.altInput.tabIndex = self.input.tabIndex;
          self.altInput.type = "text";
          self.input.setAttribute("type", "hidden");
          if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }

        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
      }

      function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

        if (self.selectedDates.length > 0) {
          self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }

        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";

        try {
          if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {}

        bind(self.mobileInput, "change", function (e) {
          self.setDate(e.target.value, false, self.mobileFormatStr);
          triggerEvent("onChange");
          triggerEvent("onClose");
        });
      }

      function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
      }

      function triggerEvent(event, data) {
        if (self.config === undefined) return;
        var hooks = self.config[event];

        if (hooks !== undefined && hooks.length > 0) {
          for (var i = 0; hooks[i] && i < hooks.length; i++) {
            hooks[i](self.selectedDates, self.input.value, self, data);
          }
        }

        if (event === "onChange") {
          self.input.dispatchEvent(createEvent("change"));
          self.input.dispatchEvent(createEvent("input"));
        }
      }

      function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
      }

      function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
          if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
        }

        return false;
      }

      function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
      }

      function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach(function (yearElement, i) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
          yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
      }

      function getDateStr(format) {
        return self.selectedDates.map(function (dObj) {
          return self.formatDate(dObj, format);
        }).filter(function (d, i, arr) {
          return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
      }

      function updateValue(triggerChange) {
        if (triggerChange === void 0) {
          triggerChange = true;
        }

        if (self.selectedDates.length === 0) return self.clear(triggerChange);

        if (self.mobileInput !== undefined && self.mobileFormatStr) {
          self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        }

        self.input.value = getDateStr(self.config.dateFormat);

        if (self.altInput !== undefined) {
          self.altInput.value = getDateStr(self.config.altFormat);
        }

        if (triggerChange !== false) triggerEvent("onValueUpdate");
      }

      function onMonthNavClick(e) {
        e.preventDefault();
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);

        if (isPrevMonth || isNextMonth) {
          changeMonth(isPrevMonth ? -1 : 1);
        } else if (self.yearElements.indexOf(e.target) >= 0) {
          e.target.select();
        } else if (e.target.classList.contains("arrowUp")) {
          self.changeYear(self.currentYear + 1);
        } else if (e.target.classList.contains("arrowDown")) {
          self.changeYear(self.currentYear - 1);
        }
      }

      function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown",
            input = e.target;

        if (self.amPM !== undefined && e.target === self.amPM) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        var min = parseFloat(input.getAttribute("data-min")),
            max = parseFloat(input.getAttribute("data-max")),
            step = parseFloat(input.getAttribute("data-step")),
            curValue = parseInt(input.value, 10),
            delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;

        if (typeof input.value !== "undefined" && input.value.length === 2) {
          var isHourElem = input === self.hourElement,
              isMinuteElem = input === self.minuteElement;

          if (newValue < min) {
            newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
            if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
          } else if (newValue > max) {
            newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
            if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
          }

          if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
            self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
          }

          input.value = pad(newValue);
        }
      }

      init();
      return self;
    }

    function _flatpickr(nodeList, config) {
      var nodes = Array.prototype.slice.call(nodeList);
      var instances = [];

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        try {
          if (node.getAttribute("data-fp-omit") !== null) continue;

          if (node._flatpickr !== undefined) {
            node._flatpickr.destroy();

            node._flatpickr = undefined;
          }

          node._flatpickr = FlatpickrInstance(node, config || {});
          instances.push(node._flatpickr);
        } catch (e) {
          console.error(e);
        }
      }

      return instances.length === 1 ? instances[0] : instances;
    }

    if (typeof HTMLElement !== "undefined") {
      HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
      };

      HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
      };
    }

    var flatpickr = function flatpickr(selector, config) {
      if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
      return _flatpickr([selector], config);
    };

    flatpickr.defaultConfig = defaults;
    flatpickr.l10ns = {
      en: Object.assign({}, english),
      default: Object.assign({}, english)
    };

    flatpickr.localize = function (l10n) {
      flatpickr.l10ns.default = Object.assign({}, flatpickr.l10ns.default, l10n);
    };

    flatpickr.setDefaults = function (config) {
      flatpickr.defaultConfig = Object.assign({}, flatpickr.defaultConfig, config);
    };

    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;

    if (typeof jQuery !== "undefined") {
      jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
      };
    }

    Date.prototype.fp_incr = function (days) {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };

    if (typeof window !== "undefined") {
      window.flatpickr = flatpickr;
    }

    return flatpickr;

})));


/***/ }),

/***/ "./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js ***!
  \**********************************************************/
/*! exports provided: Ng2FlatpickrComponent, Ng2FlatpickrDirective, Ng2FlatpickrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2FlatpickrComponent", function() { return Ng2FlatpickrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2FlatpickrDirective", function() { return Ng2FlatpickrDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2FlatpickrModule", function() { return Ng2FlatpickrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




if (typeof window !== 'undefined') {
    __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
}
var Ng2FlatpickrComponent = /** @class */ (function () {
    function Ng2FlatpickrComponent() {
        var _this = this;
        this.defaultFlatpickrOptions = {
            wrap: true,
            clickOpens: true,
            onChange: function (selectedDates) { _this.writeValue(selectedDates); }
        };
        this.placeholder = "";
        this.propagateChange = function (_) { };
    }
    Ng2FlatpickrComponent.prototype.writeValue = function (value) {
        this.propagateChange(value);
    };
    Ng2FlatpickrComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Ng2FlatpickrComponent.prototype.registerOnTouched = function () { };
    Ng2FlatpickrComponent.prototype.setDateFromInput = function (date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    };
    Ng2FlatpickrComponent.prototype.ngAfterViewInit = function () {
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }
        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
    };
    Ng2FlatpickrComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('setDate') && changes['setDate'].currentValue) {
            this.setDateFromInput(changes['setDate'].currentValue);
        }
    };
    return Ng2FlatpickrComponent;
}());
Ng2FlatpickrComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-flatpickr',
                template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input class=\"ng2-flatpickr-input\" [placeholder]=\"placeholder\" type=\"text\" data-input>\n\t\t</div>",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Ng2FlatpickrComponent; }),
                        multi: true
                    }
                ]
            },] },
];
Ng2FlatpickrComponent.propDecorators = {
    "flatpickrElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['flatpickr',] },],
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "setDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var Ng2FlatpickrDirective = /** @class */ (function () {
    function Ng2FlatpickrDirective(parent, ngControl, element, renderer) {
        this.parent = parent;
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.flatpickrOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flatpickrOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flatpickrOnOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flatpickrOnReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Ng2FlatpickrDirective.prototype.onClick = function () {
        this.flatpickr.toggle();
    };
    Object.defineProperty(Ng2FlatpickrDirective.prototype, "control", {
        get: function () {
            return this.parent ? this.parent.formDirective.getControl(this.ngControl) : null;
        },
        enumerable: true,
        configurable: true
    });
    Ng2FlatpickrDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.element.nativeElement;
        if (typeof nativeElement === 'undefined' || nativeElement === null) {
            throw 'Error: invalid input element specified';
        }
        if (this.flatpickrOptions.wrap) {
            this.renderer.setElementAttribute(this.element.nativeElement, 'data-input', '');
            nativeElement = nativeElement.parentNode;
        }
        this.flatpickr = (nativeElement.flatpickr(this.flatpickrOptions));
    };
    Ng2FlatpickrDirective.prototype.ngOnDestroy = function () {
        if (this.flatpickr) {
            this.flatpickr.destroy();
        }
        if (this.formControlListener) {
            this.formControlListener.unsubscribe();
            this.formControlListener = undefined;
        }
        this.flatpickrOnChange = undefined;
        this.flatpickrOnClose = undefined;
        this.flatpickrOnOpen = undefined;
        this.flatpickrOnReady = undefined;
    };
    Ng2FlatpickrDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.globalOnChange = this.flatpickrOptions.onChange;
        this.globalOnClose = this.flatpickrOptions.onClose;
        this.globalOnOpen = this.flatpickrOptions.onOpen;
        this.globalOnReady = this.flatpickrOptions.onReady;
        this.flatpickrOptions = {
            altFormat: this.getOption('altFormat'),
            altInput: this.getOption('altInput'),
            altInputClass: this.getOption('altInputClass'),
            allowInput: this.getOption('allowInput'),
            appendTo: this.getOption('appendTo'),
            clickOpens: this.getOption('clickOpens', true),
            dateFormat: this.getOption('dateFormat'),
            defaultDate: this.getOption('defaultDate'),
            disable: this.getOption('disable'),
            disableMobile: this.getOption('disableMobile'),
            enable: this.getOption('enable'),
            enableTime: this.getOption('enableTime'),
            enableSeconds: this.getOption('enableSeconds'),
            hourIncrement: this.getOption('hourIncrement'),
            inline: this.getOption('inline'),
            locale: this.getOption('locale'),
            maxDate: this.getOption('maxDate'),
            minDate: this.getOption('minDate'),
            minuteIncrement: this.getOption('minuteIncrement'),
            mode: this.getOption('mode'),
            nextArrow: this.getOption('nextArrow'),
            noCalendar: this.getOption('noCalendar'),
            onChange: this.eventOnChange,
            onClose: this.eventOnClose,
            onOpen: this.eventOnOpen,
            onReady: this.eventOnReady,
            parseDate: this.getOption('parseDate'),
            prevArrow: this.getOption('prevArrow'),
            shorthandCurrentMonth: this.getOption('shorthandCurrentMonth'),
            static: this.getOption('static'),
            time_24hr: this.getOption('time_24hr'),
            utc: this.getOption('utc'),
            weekNumbers: this.getOption('weekNumbers'),
            wrap: this.getOption('wrap', true),
        };
        Object.keys(this.flatpickrOptions).forEach(function (key) {
            (_this.flatpickrOptions[key] === undefined) &&
                delete _this.flatpickrOptions[key];
        });
        if (this.control) {
            this.formControlListener = this.control.valueChanges
                .subscribe(function (value) {
                if (!(value instanceof Date)) {
                    _this.control.setValue(new Date('' + value), {
                        onlySelf: true,
                        emitEvent: false,
                        emitModelToViewChange: false,
                        emitViewToModelChange: false
                    });
                }
            });
        }
    };
    Ng2FlatpickrDirective.prototype.eventOnChange = function (selectedDates, dateStr, instance) {
        var event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance
        };
        if (this.flatpickrOnChange) {
            this.flatpickrOnChange.emit(event);
        }
        if (this.globalOnChange) {
            this.globalOnChange(event);
        }
    };
    Ng2FlatpickrDirective.prototype.eventOnClose = function (selectedDates, dateStr, instance) {
        var event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance
        };
        if (this.flatpickrOnClose) {
            this.flatpickrOnClose.emit(event);
        }
        if (this.globalOnClose) {
            this.globalOnClose(event);
        }
    };
    Ng2FlatpickrDirective.prototype.eventOnOpen = function (selectedDates, dateStr, instance) {
        var event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance
        };
        if (this.flatpickrOnOpen) {
            this.flatpickrOnOpen.emit(event);
        }
        if (this.globalOnOpen) {
            this.globalOnOpen(event);
        }
    };
    Ng2FlatpickrDirective.prototype.eventOnReady = function (selectedDates, dateStr, instance) {
        var event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance
        };
        if (this.flatpickrOnReady) {
            this.flatpickrOnReady.emit(event);
        }
        if (this.globalOnReady) {
            this.globalOnReady(event);
        }
    };
    Ng2FlatpickrDirective.prototype.getOption = function (option, defaultValue) {
        var localName = 'flatpickr' + option.substring(0, 1).toUpperCase()
            + option.substring(1);
        if (typeof this[localName] !== 'undefined') {
            return this[localName];
        }
        else if (typeof this.flatpickrOptions[option] !== 'undefined') {
            return this.flatpickrOptions[option];
        }
        else {
            return defaultValue;
        }
    };
    return Ng2FlatpickrDirective;
}());
Ng2FlatpickrDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[flatpickr]', exportAs: 'ng2-flatpickr' },] },
];
Ng2FlatpickrDirective.ctorParameters = function () { return [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
Ng2FlatpickrDirective.propDecorators = {
    "flatpickrOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['flatpickr',] },],
    "flatpickrAltFormat": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['altFormat',] },],
    "flatpickrAltInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['altInput',] },],
    "flatpickrAltInputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['altInputClass',] },],
    "flatpickrAllowInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['allowInput',] },],
    "flatpickrAppendTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['appendTo',] },],
    "flatpickrClickOpens": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['clickOpens',] },],
    "flatpickrDateFormat": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['dateFormat',] },],
    "flatpickrDefaultDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['defaultDate',] },],
    "flatpickrDisable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disable',] },],
    "flatpickrDisableMobile": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disableMobile',] },],
    "flatpickrEnable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['enable',] },],
    "flatpickrEnableTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['enableTime',] },],
    "flatpickrEnableSeconds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['enableSeconds',] },],
    "flatpickrHourIncrement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hourIncrement',] },],
    "flatpickrInline": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inline',] },],
    "flatpickrLocale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['locale',] },],
    "flatpickrMaxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['maxDate',] },],
    "flatpickrMinDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minDate',] },],
    "flatpickrMinuteIncrement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minuteIncrement',] },],
    "flatpickrMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mode',] },],
    "flatpickrNextArrow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nextArrow',] },],
    "flatpickrNoCalendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['noCalendar',] },],
    "flatpickrParseDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['parseDate',] },],
    "flatpickrPrevArrow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['prevArrow',] },],
    "flatpickrShorthandCurrentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['shorthandCurrentMonth',] },],
    "flatpickrStatic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['static',] },],
    "flatpickrTime_24hr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['time_24hr',] },],
    "flatpickrUtc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['utc',] },],
    "flatpickrWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['weekNumbers',] },],
    "flatpickrWrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['wrap',] },],
    "flatpickrOnChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onChange',] },],
    "flatpickrOnClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onClose',] },],
    "flatpickrOnOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onOpen',] },],
    "flatpickrOnReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onReady',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dblclick',] },],
};
var Ng2FlatpickrModule = /** @class */ (function () {
    function Ng2FlatpickrModule() {
    }
    return Ng2FlatpickrModule;
}());
Ng2FlatpickrModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [
                    Ng2FlatpickrComponent,
                    Ng2FlatpickrDirective
                ],
                exports: [
                    Ng2FlatpickrComponent,
                    Ng2FlatpickrDirective
                ]
            },] },
];


//# sourceMappingURL=ng2-flatpickr.js.map


/***/ }),

/***/ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js ***!
  \***************************************************************************/
/*! exports provided: Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-button',
                    styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                    template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    Ng2DropdownButton.propDecorators = {
        "onMenuToggled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "showCaret": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2DropdownButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var /** @type {?} */ ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var _a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    Ng2DropdownState.prototype.select = /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            toString: /**
             * @return {?}
             */
            function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return DropdownStateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    /**
     * @return {?}
     */
    Ng2MenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    Ng2MenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-menu-item',
                    styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                    template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2MenuItem.propDecorators = {
        "preventClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2MenuItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownMenu = /** @class */ (function () {
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    function (position, dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.state.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    function (position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = /**
     * \@name getMenuElement
     * @return {?}
     */
    function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updateOnChange = /**
     * @param {?=} dynamic
     * @return {?}
     */
    function (dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top.toString());
            this.renderer.setElementStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
            this.state.dropdownState.select(this.items.first, false);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    Ng2DropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-menu',
                    styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
                    template: "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [style.z-index]=\"zIndex\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'block', opacity: 1, height: '*', width: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'none', opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*', width: '*' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: 0, height: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('opacity', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 1 }),
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.5, offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 1 }),
                                ]))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownMenu.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2DropdownMenu.propDecorators = {
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Ng2MenuItem,] },],
    };
    return Ng2DropdownMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2Dropdown = /** @class */ (function () {
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var /** @type {?} */ newSelectedItem;
            var /** @type {?} */ items = _this.menu.items.toArray();
            if (item !== _this.state.dropdownState.selectedItem) {
                return;
            }
            if (_this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }
            _this.state.dropdownState.select(newSelectedItem);
        });
    };
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = /**
     * \@name scrollListener
     * @return {?}
     */
    function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    };
    Ng2Dropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown',
                    template: "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n",
                    providers: [DropdownStateService]
                },] },
    ];
    /** @nocollapse */
    Ng2Dropdown.ctorParameters = function () { return [
        { type: DropdownStateService, },
    ]; };
    Ng2Dropdown.propDecorators = {
        "button": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownButton,] },],
        "menu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownMenu,] },],
        "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onItemClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onItemSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll',] },],
    };
    return Ng2Dropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownModule = /** @class */ (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                        Ng2Dropdown
                    ],
                    declarations: [
                        Ng2Dropdown,
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                },] },
    ];
    return Ng2DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1hdGVyaWFsLWRyb3Bkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS9hY3Rpb25zLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZS50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL25nMi1kcm9wZG93bi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL25nMi1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT3V0cHV0LFxuICAgIElucHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1idXR0b24nLFxuICAgIHN0eWxlczogW2AubmcyLWRyb3Bkb3duLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzouNDVyZW0gLjI1cmVtO2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wOHJlbTtjb2xvcjojNDQ0O291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo0MDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VmZWZlZjt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjEwMHB4O3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXgtd2lkdGg6MTUwcHh9Lm5nMi1kcm9wZG93bi1idXR0b246aG92ZXJ7Y29sb3I6IzIyMn0ubmcyLWRyb3Bkb3duLWJ1dHRvbjphY3RpdmUsLm5nMi1kcm9wZG93bi1idXR0b246Zm9jdXN7Y29sb3I6IzIyMjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjE5NmYzfS5uZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbHtmbGV4OjEgMSA5NSV9Lm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0e3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDYlfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9ue2JvcmRlcjpub25lO21pbi13aWR0aDo0MHB4O3dpZHRoOjQwcHg7Ym9yZGVyLXJhZGl1czoxMDAlO3RyYW5zaXRpb246YWxsIC4yczt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDtwYWRkaW5nOi41ZW19Omhvc3QtY29udGV4dCgubmcyLWRyb3Bkb3duLWJ1dHRvbi0taWNvbikgLm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMil9YF0sXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPSduZzItZHJvcGRvd24tYnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiIHRhYmluZGV4PVwiMHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0XCIgKm5nSWY9XCJzaG93Q2FyZXRcIj5cbiAgICAgICAgPHN2ZyBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMzIgMzJcIiBoZWlnaHQ9XCIxNnB4XCIgaWQ9XCLDkMKhw5DCu8OQwr7DkMK5XzFcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMTZweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNMjQuMjg1LDExLjI4NEwxNiwxOS41NzFsLTguMjg1LTguMjg4Yy0wLjM5NS0wLjM5NS0xLjAzNC0wLjM5NS0xLjQyOSwwICBjLTAuMzk0LDAuMzk1LTAuMzk0LDEuMDM1LDAsMS40M2w4Ljk5OSw5LjAwMmwwLDBsMCwwYzAuMzk0LDAuMzk1LDEuMDM0LDAuMzk1LDEuNDI4LDBsOC45OTktOS4wMDIgIGMwLjM5NC0wLjM5NSwwLjM5NC0xLjAzNiwwLTEuNDMxQzI1LjMxOSwxMC44ODksMjQuNjc5LDEwLjg4OSwyNC4yODUsMTEuMjg0elwiIGZpbGw9XCIjMTIxMzEzXCIgaWQ9XCJFeHBhbmRfTW9yZVwiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25CdXR0b24ge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25NZW51VG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2FyZXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIGVtaXRzIGV2ZW50IHRvIHRvZ2dsZSBtZW51XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25NZW51VG9nZ2xlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldFBvc2l0aW9uXG4gICAgICogQGRlc2MgcmV0dXJucyBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25NZW51IH0gZnJvbSAnLi9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBOZzJEcm9wZG93blN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuY29uc3QgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDksXG4gICAgUFJFVjogMzgsXG4gICAgTkVYVDogNDAsXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjdcbn07XG5cbi8qKlxuICogQG5hbWUgb25Td2l0Y2hOZXh0XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uU3dpdGNoTmV4dCA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG9uU3dpdGNoUHJldlxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvblN3aXRjaFByZXYgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggLSAxXSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAbmFtZSBvbkJhY2tzcGFjZVxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvbkJhY2tzcGFjZSA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbMF0sIHRydWUpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9uRXNjYXBlKHRoaXM6IE5nMkRyb3Bkb3duTWVudSkge1xuICAgIHRoaXMuaGlkZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBvbkl0ZW1DbGlja2VkXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uSXRlbUNsaWNrZWQgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkSXRlbSA/IHN0YXRlLnNlbGVjdGVkSXRlbS5jbGljaygpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgW0tFWVMuQkFDS1NQQUNFXTogb25CYWNrc3BhY2UsXG4gICAgW0tFWVMuUFJFVl06IG9uU3dpdGNoUHJldixcbiAgICBbS0VZUy5ORVhUXTogb25Td2l0Y2hOZXh0LFxuICAgIFtLRVlTLkVOVEVSXTogb25JdGVtQ2xpY2tlZCxcbiAgICBbS0VZUy5FU0NBUEVdOiBvbkVzY2FwZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93S2V5c0hhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWzM4LCA0MF0uaW5kZXhPZihldmVudC5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duU3RhdGUge1xuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1EZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBOZzJNZW51SXRlbTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkSXRlbVxuICAgICAqIEBkZXNjIGdldHRlciBmb3IgX3NlbGVjdGVkSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IE5nMk1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RzIGEgbWVudSBpdGVtIGFuZCBlbWl0cyBldmVudFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBOZzJNZW51SXRlbSB8IHVuZGVmaW5lZCwgZGlzcGF0Y2hFdmVudCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgICBpZiAoIWRpc3BhdGNoRXZlbnQgfHwgIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdW5zZWxlY3RcbiAgICAgKiBAZGVzYyBzZXRzIF9zZWxlY3RlZEl0ZW0gYXMgdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHVuc2VsZWN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbWVudVN0YXRlID0ge1xuICAgICAgICBpc1Zpc2libGU6IDxib29sZWFuPmZhbHNlLFxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID09PSB0cnVlID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRyb3Bkb3duU3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUgPSBuZXcgTmcyRHJvcGRvd25TdGF0ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLW1lbnUtaXRlbScsXG4gICAgc3R5bGVzOiBbYC5uZzItbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi45ZW07dGV4dC10cmFuc2Zvcm06bm9uZTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW07aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOi4zZW0gMS4yNXJlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yNXN9Lm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVke2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuMik7b3V0bGluZTowfS5uZzItbWVudS1pdGVtOmZvY3Vze291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDE1OCwxNTgsMTU4LC40KX06aG9zdChuZzItbWVudS1pdGVtKSAvZGVlcC8gW25nMi1tZW51LWl0ZW0taWNvbl17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToyOHB4O3dpZHRoOjEuNWVtO2hlaWdodDozMHB4O2NvbG9yOnJnYmEoMCwwLDAsLjQ0KX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25nMi1tZW51LWl0ZW0nXG4gICAgIHJvbGU9XCJidXR0b25cIlxuICAgICB0YWJpbmRleD1cIjBcIlxuICAgICBbY2xhc3MubmcyLW1lbnUtaXRlbS0tc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgIChrZXlkb3duLmVudGVyKT1cImNsaWNrKClcIlxuICAgICAoY2xpY2spPVwiY2xpY2soKVwiXG4gICAgIChtb3VzZW92ZXIpPVwic2VsZWN0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMk1lbnVJdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBAcHJldmVudENsb3NlXG4gICAgICogQGRlc2MgaWYgdHJ1ZSwgY2xpY2tpbmcgb24gdGhlIGl0ZW0gd29uJ3QgY2xvc2UgdGhlIGRyb3Bkb3duXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKiBAZGVzYyBhbnkgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNTZWxlY3RlZFxuICAgICAqIEBkZXNjIHJldHVybnMgY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjbGlja1xuICAgICAqIEBkZXNjIGVtaXRzIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBjbGljayBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnZm9jdXMnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFJlbmRlcmVyLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGFuaW1hdGUsXG4gICAga2V5ZnJhbWVzLFxuICAgIHN0YXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBBQ1RJT05TLCBhcnJvd0tleXNIYW5kbGVyIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1tZW51JyxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubmcyLWRyb3Bkb3duLW1lbnV7b3ZlcmZsb3cteTphdXRvO2JveC1zaGFkb3c6MCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMyk7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzouNWVtIDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MXB4O21heC1oZWlnaHQ6NDAwcHg7d2lkdGg6MjYwcHg7bWluLWhlaWdodDowO2Rpc3BsYXk6YmxvY2t9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS1pbnNpZGUtZWxlbWVudHtwb3NpdGlvbjpmaXhlZH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS0ye3dpZHRoOjIwMHB4fS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTR7d2lkdGg6MjYwcHh9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tNnt3aWR0aDozMjBweH0ubmcyLWRyb3Bkb3duLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5uZzItbWVudS1kaXZpZGVye2hlaWdodDoxcHg7bWluLWhlaWdodDoxcHg7bWF4LWhlaWdodDoxcHg7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2Y5ZjlmOX1gXSxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gTUVOVSAtLT5cbjxkaXYgY2xhc3M9J25nMi1kcm9wZG93bi1tZW51IG5nMi1kcm9wZG93bi1tZW51LS0td2lkdGgtLXt7IHdpZHRoIH19J1xuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLWluc2lkZS1lbGVtZW50XT1cIiFhcHBlbmRUb0JvZHlcIlxuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLW9wZW5dPVwic3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZVwiXG4gICAgIFtzdHlsZS56LWluZGV4XT1cInpJbmRleFwiXG4gICAgIFtAZmFkZV09XCJzdGF0ZS5tZW51U3RhdGUudG9TdHJpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLW1lbnVfX29wdGlvbnMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICBbQG9wYWNpdHldPVwic3RhdGUubWVudVN0YXRlLnRvU3RyaW5nKClcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBCQUNLRFJPUCAtLT5cbjxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tYmFja2Ryb3BcIiAqbmdJZj1cInN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGVcIiAoY2xpY2spPVwiaGlkZSgpXCI+PC9kaXY+XG5gLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBoZWlnaHQ6IDAsIHdpZHRoOiAwfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzM1MG1zIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdvcGFjaXR5JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDUwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNSwgb2Zmc2V0OiAwLjN9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duTWVudSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2lkdGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkcm9wZG93biB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZFxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXRzIGRyb3Bkb3duIG9mZnNldCBmcm9tIHRoZSBidXR0b25cbiAgICAgKiBAbmFtZSBvZmZzZXQge3N0cmluZ30gZm9sbG93IGZvcm1hdCAnPG51bWJlcj4gPG51bWJlcj4nIGV4LiAnMCAyMCdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKE5nMk1lbnVJdGVtKSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOZzJNZW51SXRlbT47XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uOiBDbGllbnRSZWN0O1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIGFycm93SGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICBoYW5kbGVLZXlwcmVzczogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBzaG93cyBtZW51IGFuZCBzZWxlY3RzIGZpcnN0IGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyhwb3NpdGlvbj86IENsaWVudFJlY3QsIGR5bmFtaWMgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB3ZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBzZXR0aW5nIGhhbmRsZXJzXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcyA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRjLmJvZHksICdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlwcmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdkLCAna2V5ZG93bicsIGFycm93S2V5c0hhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCBkeW5hbWljKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKiBAZGVzYyBoaWRlcyBtZW51XG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGVkIGl0ZW0gc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnVuc2VsZWN0KCk7XG5cbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1bmxpc3RlblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIgPyB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MgPyB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcygpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZVBvc2l0aW9uXG4gICAgICogQGRlc2MgdXBkYXRlcyB0aGUgbWVudSBwb3NpdGlvbiBldmVyeSB0aW1lIGl0IGlzIHRvZ2dsZWRcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24ge0NsaWVudFJlY3R9XG4gICAgICogQHBhcmFtIGR5bmFtaWMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBDbGllbnRSZWN0LCBkeW5hbWljOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVPbkNoYW5nZShkeW5hbWljKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlwcmVzc1xuICAgICAqIEBkZXNjIGV4ZWN1dGVzIGZ1bmN0aW9ucyBvbiBrZXlQcmVzcyBiYXNlZCBvbiB0aGUga2V5IHByZXNzZWRcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUtleXByZXNzKCRldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICghQUNUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBQ1RJT05TW2tleV0uY2FsbCh0aGlzLCBpbmRleCwgaXRlbXMsIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0TWVudUVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1lbnVFbGVtZW50KCk6IEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FsY1Bvc2l0aW9uT2Zmc2V0XG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjUG9zaXRpb25PZmZzZXQocG9zaXRpb24pOiB7IHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHdkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghd2QgfHwgIWRjIHx8ICFwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3ZC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpc0NTUzFDb21wYXQgPSAoKGRjLmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuXG4gICAgICAgIGNvbnN0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZGMuYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkYy5ib2R5LnNjcm9sbFRvcDtcblxuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuYXBwbHlPZmZzZXQoXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi50b3AgKyAodGhpcy5hcHBlbmRUb0JvZHkgPyB5IC0gMTUgOiAwKX1weGAsXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi5sZWZ0ICsgeCAtIDV9cHhgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50V2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tQm90dG9tID0gcGFyc2VJbnQodG9wKSArIGNsaWVudEhlaWdodCArICh0aGlzLmFwcGVuZFRvQm9keSA/IDAgOiB5IC0gMTUpO1xuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tUmlnaHQgPSBwYXJzZUludChsZWZ0KSArIGNsaWVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbEhlaWdodCA9IHdkLmlubmVySGVpZ2h0ICsgd2Quc2Nyb2xsWTtcbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsV2lkdGggPSB3ZC5pbm5lcldpZHRoICsgd2Quc2Nyb2xsWDtcblxuICAgICAgICBpZiAobWFyZ2luRnJvbUJvdHRvbSA+PSB3aW5kb3dTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgLSBjbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmdpbkZyb21SaWdodCA+PSB3aW5kb3dTY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBtYXJnaW5Gcm9tUmlnaHQgLSB3aW5kb3dTY3JvbGxXaWR0aCArIDMwO1xuICAgICAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpIC0gbWFyZ2luUmlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseU9mZnNldCh0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nKTogeyB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nIH0ge1xuICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKCFvZmZzZXRbMV0pIHtcbiAgICAgICAgICAgIG9mZnNldFsxXSA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUludChvZmZzZXRbMF0pfXB4YDtcbiAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VJbnQob2Zmc2V0WzFdKX1weGA7XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgbWVudSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgICAgICBkYy5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShkeW5hbWljID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRNZW51RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY1Bvc2l0aW9uT2Zmc2V0KHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudCwgJ3RvcCcsIHBvc2l0aW9uLnRvcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQsICdsZWZ0JywgcG9zaXRpb24ubGVmdC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbGVjdCBmaXJzdCBpdGVtIHVubGVzcyB1c2VyIGRpc2FibGVkIHRoaXMgb3B0aW9uXG4gICAgICAgIGlmICh0aGlzLmZvY3VzRmlyc3RFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZpcnN0ICYmXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLml0ZW1zLmZpcnN0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSG9zdExpc3RlbmVyLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd25CdXR0b24gfSBmcm9tICcuLi9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZzItZHJvcGRvd24tYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5nMi1kcm9wZG93bi1tZW51XCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHByb3ZpZGVyczogWyBEcm9wZG93blN0YXRlU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duIHtcbiAgICAvLyBnZXQgY2hpbGRyZW4gY29tcG9uZW50c1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25CdXR0b24pIHB1YmxpYyBidXR0b246IE5nMkRyb3Bkb3duQnV0dG9uO1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25NZW51KSBwdWJsaWMgbWVudTogTmcyRHJvcGRvd25NZW51O1xuXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNVcGRhdGUgPSB0cnVlO1xuXG4gICAgLy8gb3V0cHV0c1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TaG93OiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBEcm9wZG93blN0YXRlU2VydmljZSkge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkLmVtaXQoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZlbnRDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oaWRlLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ub25NZW51VG9nZ2xlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtU2VsZWN0ZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZEl0ZW06IE5nMk1lbnVJdGVtIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLm1lbnUuaXRlbXMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWVudS5mb2N1c0ZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkSXRlbSA9IGl0ZW0gPT09IGl0ZW1zWzBdICYmIGl0ZW1zLmxlbmd0aCA+IDEgPyBpdGVtc1sxXSA6IGl0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRvZ2dsZU1lbnVcbiAgICAgKiBAZGVzYyB0b2dnbGVzIG1lbnUgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVNZW51KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLSBoaWRlcyBkcm9wZG93blxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3dzIGRyb3Bkb3duXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhwb3NpdGlvbiwgdGhpcy5keW5hbWljVXBkYXRlKTtcbiAgICAgICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzY3JvbGxMaXN0ZW5lclxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIHB1YmxpYyBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uICYmIHRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51LnVwZGF0ZVBvc2l0aW9uKHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmcyRHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vbmcyLWRyb3Bkb3duJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IE5nMkRyb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9uZzItZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZzJNZW51SXRlbSxcbiAgICAgICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgICAgIE5nMkRyb3Bkb3duTWVudSxcbiAgICAgICAgTmcyRHJvcGRvd25cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZzJEcm9wZG93bixcbiAgICAgICAgTmcyTWVudUl0ZW0sXG4gICAgICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgICAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25Nb2R1bGUge31cblxuZXhwb3J0IHtcbiAgICBOZzJEcm9wZG93bixcbiAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgTmcyTWVudUl0ZW0sXG4gICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgRHJvcGRvd25TdGF0ZVNlcnZpY2Vcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQTBCSSwyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs2QkFIaUIsSUFBSSxZQUFZLEVBQVc7eUJBQzlDLElBQUk7S0FFRTs7Ozs7O0lBTXBDLHNDQUFVOzs7Ozs7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU8zQix1Q0FBVzs7Ozs7O1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7O2dCQWpDL0QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE1BQU0sRUFBRSxDQUFDLHMyQkFBbzJCLENBQUM7b0JBQzkyQixRQUFRLEVBQUUseTJCQVNiO2lCQUNBOzs7O2dCQWhCRyxVQUFVOzs7a0NBa0JULE1BQU07OEJBQ04sS0FBSzs7NEJBeEJWOzs7Ozs7O0FDSUEscUJBQU0sSUFBSSxHQUFHO0lBQ1QsU0FBUyxFQUFFLENBQUM7SUFDWixJQUFJLEVBQUUsRUFBRTtJQUNSLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDOUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztDQUNKLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDOUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1hBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztDQUNKLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDN0UsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0hBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0NBQ0osQ0FBQzs7Ozs7QUFFRjtJQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNmO0FBQUE7Ozs7OztBQVFELHFCQUFNLGFBQWEsR0FBRyxVQUFDLEtBQWEsRUFBRSxLQUFvQixFQUFFQSxRQUF1QjtJQUMvRSxPQUFPQSxRQUFLLENBQUMsWUFBWSxHQUFHQSxRQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQztDQUN0RSxDQUFDO0FBRUsscUJBQU0sT0FBTztJQUNoQixHQUFDLElBQUksQ0FBQyxTQUFTLElBQUcsV0FBVztJQUM3QixHQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsWUFBWTtJQUN6QixHQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsWUFBWTtJQUN6QixHQUFDLElBQUksQ0FBQyxLQUFLLElBQUcsYUFBYTtJQUMzQixHQUFDLElBQUksQ0FBQyxNQUFNLElBQUcsUUFBUTtPQUMxQixDQUFDOzs7OztBQUVGLDBCQUFpQyxLQUFLO0lBQ2xDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDMUI7Q0FDSjs7Ozs7OztBQzVFRCxBQUVBLElBQUE7OzhCQUN1RCxJQUFJLFlBQVksRUFBZTs2QkFDaEMsSUFBSSxZQUFZLEVBQWU7K0JBQzdCLElBQUksWUFBWSxFQUFlOzswQkFReEUsMENBQVk7Ozs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7OztJQU92QixpQ0FBTTs7Ozs7O2NBQUMsSUFBNkIsRUFBRSxhQUFvQjtRQUFwQiw4QkFBQSxFQUFBLG9CQUFvQjtRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBTzVCLG1DQUFROzs7Ozs7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7MkJBdEN2QztJQXdDQyxDQUFBOzs7Ozs7QUN4Q0Q7O3lCQUt1QjtZQUNmLFNBQVMsb0JBQVcsS0FBSyxDQUFBO1lBQ3pCLFFBQVE7OztZQUFSO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUN6RDtTQUNKOzZCQUV3QyxJQUFJLGdCQUFnQixFQUFFOzs7Z0JBVGxFLFVBQVU7OytCQUhYOzs7Ozs7O0FDQUE7SUFxQ0kscUJBQW9CQSxRQUEyQixFQUMzQixTQUNBO1FBRkEsVUFBSyxHQUFMQSxRQUFLLENBQXNCO1FBQzNCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7OzRCQVZZLEtBQUs7S0FVSDs7OztJQUVuQyxpQ0FBVzs7OztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OzBCQU83QyxtQ0FBVTs7Ozs7OztZQUNqQixPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBT25ELDRCQUFNOzs7Ozs7Y0FBQyxNQUFPO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUMsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNCOzs7Ozs7O0lBT0UsMkJBQUs7Ozs7OztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQU0vQywyQkFBSzs7Ozs7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O2dCQXBFMUYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyx1bUJBQXFtQixDQUFDO29CQUMvbUIsUUFBUSxFQUFFLHFRQVNiO2lCQUNBOzs7O2dCQWZRLG9CQUFvQjtnQkFKekIsVUFBVTtnQkFEVixRQUFROzs7aUNBMEJQLEtBQUs7MEJBTUwsS0FBSzs7c0JBbkNWOzs7Ozs7O0FDQUE7SUFxSEkseUJBQW1CQSxRQUEyQixFQUMxQixTQUNBO1FBRkQsVUFBSyxHQUFMQSxRQUFLLENBQXNCO1FBQzFCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7cUJBdENJLENBQUM7Ozs7O2lDQU1ZLElBQUk7Ozs7NEJBV1QsSUFBSTs7OztzQkFLbkIsSUFBSTt5QkFTVDtZQUNoQixZQUFZLEVBQUUsU0FBUztZQUN2QixjQUFjLEVBQUUsU0FBUztTQUM1QjtLQUl5Qzs7Ozs7Ozs7SUFNbkMsOEJBQUk7Ozs7Ozs7Y0FBQyxRQUFxQixFQUFFLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDN0MscUJBQU0sRUFBRSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ2xFLHFCQUFNLEVBQUUsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUN2Rjs7UUFHRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUM7Ozs7Ozs7SUFPRSw4QkFBSTs7Ozs7O1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFHdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR3BDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDOzs7Ozs7Ozs7SUFTekUsd0NBQWM7Ozs7Ozs7Y0FBQyxRQUFvQixFQUFFLE9BQWdCO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBUTFCLHdDQUFjOzs7Ozs7Y0FBQyxNQUFNO1FBQ3hCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7O0lBTTVELHdDQUFjOzs7OztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU8xQyw0Q0FBa0I7Ozs7O2NBQUMsUUFBUTtRQUMvQixxQkFBTSxFQUFFLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUQscUJBQU0sRUFBRSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBRWxFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxxQkFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQztRQUN2RCxxQkFBTSxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQztRQUU5RCxxQkFBTSxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZO1lBQ3ZELEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXZELHFCQUFNLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLFlBQVk7WUFDdkQsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFckQsaUhBQU0sWUFBRyxFQUFFLGNBQUksQ0FHYjtRQUVGLHFCQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3hDLHFCQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRTFDLHFCQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLHFCQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBRXJELHFCQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxxQkFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFFckQsSUFBSSxnQkFBZ0IsSUFBSSxrQkFBa0IsRUFBRTtZQUN4QyxHQUFHLEdBQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxPQUFJLENBQUM7U0FDL0Q7UUFFRCxJQUFJLGVBQWUsSUFBSSxpQkFBaUIsRUFBRTtZQUN0QyxxQkFBTSxXQUFXLEdBQUcsZUFBZSxHQUFHLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsV0FBVyxPQUFJLENBQUM7U0FDaEU7UUFFRCxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Ozs7OztJQUdqQixxQ0FBVzs7Ozs7Y0FBQyxHQUFXLEVBQUUsSUFBWTtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ25CO1FBRUQsR0FBRyxHQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSSxDQUFDO1FBQ25FLElBQUksR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUksQ0FBQztRQUVyRSxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Ozs7SUFHbEIsa0NBQVE7Ozs7UUFDWCxxQkFBTSxFQUFFLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVuQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EOzs7Ozs7SUFHRSx3Q0FBYzs7OztjQUFDLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDaEMscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVFOztRQUdELElBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVEOzs7OztJQUdFLHFDQUFXOzs7O1FBQ2QscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuQzs7O2dCQTFRUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsTUFBTSxFQUFFLENBQUMsdXFCQUF1cUIsQ0FBQztvQkFDanJCLFFBQVEsRUFBRSwybEJBY2I7b0JBQ0csVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7NEJBQ1osS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQ2xCLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUMxRCxDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUNqQixFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUN6RSxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLGVBQWUsRUFDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUMvQzs2QkFDSixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLGdCQUFnQixFQUNwQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQzNDOzZCQUNKLENBQUM7eUJBQ0wsQ0FBQzt3QkFDRixPQUFPLENBQUMsU0FBUyxFQUFFOzRCQUNmLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7b0NBQy9CLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO29DQUM5QixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztpQ0FDakMsQ0FBQyxDQUFDOzZCQUNOLENBQUM7NEJBQ0YsVUFBVSxDQUFDLG1CQUFtQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO29DQUNoQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQ0FDOUIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7b0NBQ2xDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2lDQUNqQyxDQUFDLENBQUM7NkJBQ04sQ0FBQzt5QkFDTCxDQUFDO3FCQUNMO2lCQUNKOzs7O2dCQXZEUSxvQkFBb0I7Z0JBbkJ6QixVQUFVO2dCQUNWLFFBQVE7OzswQkE4RVAsS0FBSztzQ0FNTCxLQUFLOzJCQU1MLEtBQUs7aUNBS0wsS0FBSzsyQkFLTCxLQUFLOzBCQUtMLGVBQWUsU0FBQyxXQUFXOzswQkE1R2hDOzs7Ozs7O0FDQUE7SUFvQ0kscUJBQW9CQSxRQUEyQjtRQUEzQixVQUFLLEdBQUxBLFFBQUssQ0FBc0I7NkJBUmYsSUFBSTs7NkJBR21CLElBQUksWUFBWSxFQUFVOzhCQUN6QixJQUFJLFlBQVksRUFBVTtzQkFDN0IsSUFBSSxZQUFZLEVBQWU7c0JBQy9CLElBQUksWUFBWSxFQUFlO0tBRWpDOzs7O0lBRTVDLDhCQUFROzs7OztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2pELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNsRCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBaUI7WUFDakUscUJBQUksZUFBd0MsQ0FBQztZQUM3QyxxQkFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFeEMsSUFBSSxJQUFJLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO2dCQUNoRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzdCLGVBQWUsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakY7WUFFRCxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDOzs7Ozs7OztJQU9BLGdDQUFVOzs7Ozs7Y0FBQyxRQUFvQztRQUFwQyx5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7O0lBT2hFLDBCQUFJOzs7Ozs7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7OztJQVFwQiwwQkFBSTs7Ozs7O2NBQUMsUUFBb0M7UUFBcEMseUJBQUEsRUFBQSxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQU9wQixvQ0FBYzs7Ozs7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDs7O2dCQS9GUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSw0S0FJYjtvQkFDRyxTQUFTLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtpQkFDdEM7Ozs7Z0JBWFEsb0JBQW9COzs7MkJBY3hCLFlBQVksU0FBQyxpQkFBaUI7eUJBQzlCLFlBQVksU0FBQyxlQUFlO2tDQUU1QixLQUFLO2tDQUdMLE1BQU07bUNBQ04sTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07bUNBdUVOLFlBQVksU0FBQyxlQUFlOztzQkF6R2pDOzs7Ozs7O0FDQUE7Ozs7Z0JBU0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixXQUFXO3FCQUNkO29CQUNELFlBQVksRUFBRTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtpQkFDSjs7NEJBekJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/ngx-chips/esm5/ngx-chips.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-chips/esm5/ngx-chips.js ***!
  \**************************************************/
/*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent, ɵb, ɵa, ɵd, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'highlight'
            },] },
];
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';
var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    };
    DragProvider.prototype.getDraggedItem = function (event) {
        var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        return (JSON.parse(data));
    };
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    DragProvider.prototype.setState = function (state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    };
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
var defaults = {
    tagInput: ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    }),
    dropdown: ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    })
};
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
OptionsProvider.defaults = defaults;
function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    TagInputAccessor.prototype.getItemDisplay = function (item) {
        return isObject(item) ? item[this.displayBy] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
TagInputAccessor.propDecorators = {
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = '';
        this.disabled = false;
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled }, this.validators, this.asyncValidators)
        });
    };
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"] && !changes["disabled"].firstChange) {
            if (changes["disabled"].currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return (this.form.get('item'));
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    TagInputForm.prototype.hasErrors = function () {
        var _b = this.form, dirty = _b.dirty, value = _b.value, valid = _b.valid;
        return dirty && value.item && !valid;
    };
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    return TagInputForm;
}());
TagInputForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-form',
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"],
                template: "<!-- form -->\n<form (submit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n\n           [(ngModel)]=\"inputText\"\n           [formControlName]=\"'item'\"\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyup.emit($event)\"\n    />\n</form>\n"
            },] },
];
TagInputForm.propDecorators = {
    "onSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "input": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var defaults$1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        this.offset = new defaults$1().offset;
        this.focusFirstElement = new defaults$1().focusFirstElement;
        this.showDropdownIfEmpty = new defaults$1().showDropdownIfEmpty;
        this.minimumTextLength = new defaults$1().minimumTextLength;
        this.limitItemsTo = new defaults$1().limitItemsTo;
        this.displayBy = new defaults$1().displayBy;
        this.identifyBy = new defaults$1().identifyBy;
        this.matchingFn = new defaults$1().matchingFn;
        this.appendToBody = new defaults$1().appendToBody;
        this.keepOpen = new defaults$1().keepOpen;
        this.dynamicUpdate = new defaults$1().dynamicUpdate;
        this.zIndex = new defaults$1().zIndex;
        this.items = [];
        this.tagInput = this.injector.get(TagInputComponent);
        this._autocompleteItems = [];
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        this.requestAdding = function (item) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var tag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else if (!_this.showDropdownIfEmpty && _this.isVisible) {
                    _this.dropdown.hide();
                }
                else if (!_this.showDropdownIfEmpty) {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
                var _b;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.getFormValue = function () {
        return this.tagInput.formValue.trim();
    };
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, (_b = {}, _b[this.tagInput.displayBy] = display, _b[this.tagInput.identifyBy] = value, _b));
        var _b;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
            var _b;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    };
    return TagInputDropdown;
}());
TagInputDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            },] },
];
TagInputDropdown.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
]; };
TagInputDropdown.propDecorators = {
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"],] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],] },],
    "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showDropdownIfEmpty": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteObservable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "minimumTextLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "limitItemsTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "matchingFn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "keepOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:scroll',] },],
    "onWindowBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:blur',] },],
};
var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
TagRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-ripple',
                styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
                template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('ink', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ width: 0, opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('none => clicked', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ]
            },] },
];
TagRipple.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var KeyboardEvent = ((window)).KeyboardEvent;
var MouseEvent = ((window)).MouseEvent;
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editing = false;
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        get: function () {
            return typeof this.model !== 'string' && this.model["readonly"] === true;
        },
        enumerable: true,
        configurable: true
    });
    
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            event.keyCode === 13 ? this.disableEditMode(event) : undefined;
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            this.editing ? undefined : this.activateEditMode();
        }
    };
    TagComponent.prototype.onBlurred = function (event) {
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === 'string' ? value : Object.assign({}, this.model, (_b = {}, _b[this.displayBy] = value, _b));
        this.onBlur.emit(result);
        var _b;
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        get: function () {
            return !this.readonly &&
                !this.editing &&
                isChrome &&
                this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editing;
    };
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var exists = function (tag) {
            return typeof tag === 'string' ?
                tag === input :
                tag[_this.displayBy] === input;
        };
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        if (exists(this.model)) {
            return;
        }
        var model = typeof this.model === 'string' ? input : (_b = {}, _b[this.identifyBy] = hasId() ? this.model[this.identifyBy] : input, _b[this.displayBy] = input, _b);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
        var _b;
    };
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag',
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;-webkit-transition:opacity 1s;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            },] },
];
TagComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
TagComponent.propDecorators = {
    "model": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hasRipple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "canAddTag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "moving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.moving',] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagRipple,] },],
    "keydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] },],
};
var animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ enter }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ leave }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
var DragEvent = ((window)).DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var defaults$2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        _this.separatorKeys = new defaults$2().separatorKeys;
        _this.separatorKeyCodes = new defaults$2().separatorKeyCodes;
        _this.placeholder = new defaults$2().placeholder;
        _this.secondaryPlaceholder = new defaults$2().secondaryPlaceholder;
        _this.maxItems = new defaults$2().maxItems;
        _this.validators = new defaults$2().validators;
        _this.asyncValidators = new defaults$2().asyncValidators;
        _this.onlyFromAutocomplete = new defaults$2().onlyFromAutocomplete;
        _this.errorMessages = new defaults$2().errorMessages;
        _this.theme = new defaults$2().theme;
        _this.onTextChangeDebounce = new defaults$2().onTextChangeDebounce;
        _this.inputId = new defaults$2().inputId;
        _this.inputClass = new defaults$2().inputClass;
        _this.clearOnBlur = new defaults$2().clearOnBlur;
        _this.hideForm = new defaults$2().hideForm;
        _this.addOnBlur = new defaults$2().addOnBlur;
        _this.addOnPaste = new defaults$2().addOnPaste;
        _this.pasteSplitPattern = new defaults$2().pasteSplitPattern;
        _this.blinkIfDupe = new defaults$2().blinkIfDupe;
        _this.removable = new defaults$2().removable;
        _this.editable = new defaults$2().editable;
        _this.allowDupes = new defaults$2().allowDupes;
        _this.modelAsStrings = new defaults$2().modelAsStrings;
        _this.trimTags = new defaults$2().trimTags;
        _this.ripple = new defaults$2().ripple;
        _this.tabindex = new defaults$2().tabIndex;
        _this.disable = new defaults$2().disable;
        _this.dragZone = new defaults$2().dragZone;
        _this.onRemoving = new defaults$2().onRemoving;
        _this.onAdding = new defaults$2().onAdding;
        _this.animationDuration = new defaults$2().animationDuration;
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.isLoading = false;
        _this.listeners = (_b = {}, _b[KEYDOWN] = ([]), _b[KEYUP] = ([]), _b);
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.inputTextValue = '';
        _this.errors = [];
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        _this.createTag = function (model) {
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, (_b = {}, _b[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _b[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _b));
            var _b;
        };
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                !dupe || _this.allowDupes === true,
                _this.maxItemsReached === false,
                ((isFromAutocomplete) || _this.onlyFromAutocomplete === false)
            ];
            return assertions.filter(function (item) { return item; }).length === assertions.length;
        };
        _this.onPasteCallback = function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            var getText, text, requests, resetInput;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                getText = function () {
                    var isIE = Boolean(((window)).clipboardData);
                    var clipboardData = isIE ? (((window)).clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
        var _b;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item["readonly"];
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a_1 = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        control.setValue(value, {
            emitEvent: emitEvent
        });
    };
    TagInputComponent.prototype.getControl = function () {
        return (this.inputForm.value);
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = ({ zone: this.dragZone, tag: tag, index: index });
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.updateEditedTag = function (_b) {
        var tag = _b.tag, index = _b.index;
        this.onTagEdited.emit(tag);
    };
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(display);
        }
        return new Promise(function (resolve, reject) {
            var reset = function () {
                _this.setInputValue('');
                _this.focus(true, false);
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        listen.call(this, KEYDOWN, listener);
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(TagInputAccessor));
TagInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;-webkit-transition:all .3s;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"],
                template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                animations: animations
            },] },
];
TagInputComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: DragProvider, },
]; };
TagInputComponent.propDecorators = {
    "separatorKeys": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "separatorKeyCodes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "secondaryPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onlyFromAutocomplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "errorMessages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "theme": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onTextChangeDebounce": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hideForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "pasteSplitPattern": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blinkIfDupe": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowDupes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "modelAsStrings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "trimTags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dragZone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onRemoving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdding": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "animationDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onValidationError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [TagInputDropdown,] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false },] },],
    "inputForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagInputForm,] },],
    "tags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [TagComponent,] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "tabindexAttr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] },],
};
var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;-webkit-transition:all .15s;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
            },] },
];
var optionsProvider = new OptionsProvider();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
                ]
            },] },
];


//# sourceMappingURL=ngx-chips.js.map


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else {}

}(function( ){

	'use strict';

	var VERSION = '11.1.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	function isSet ( value ) {
		return value !== null && value !== undefined;
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal );
		var va = xVal[j-1];
		var vb = xVal[j];
		var pa = xPct[j-1];
		var pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct );
		var va = xVal[j-1];
		var vb = xVal[j];
		var pa = xPct[j-1];
		var pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct );
		var a = xPct[j-1];
		var b = xPct[j];

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( !Array.isArray(value) ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i+1]], n) / subRangeRatio(that.xPct[i], that.xPct[i+1]);

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index;
		var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
			case 'horizontal':
				parsed.ort = 0;
				break;
			case 'vertical':
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) && !Array.isArray(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
		}

		if ( Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1])) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
		}

		if ( entry === 0 ) {
			return;
		}

		if ( !Array.isArray(entry) ) {
			entry = [entry, entry];
		}

		// 'getMargin' returns false for invalid values.
		parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];

		if ( parsed.padding[0] === false || parsed.padding[1] === false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding[0] < 0 || parsed.padding[1] < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
		}

		if ( parsed.padding[0] + parsed.padding[1] >= 100 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
			case 'ltr':
				parsed.dir = 0;
				break;
			case 'rtl':
				parsed.dir = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: true, t: testCssPrefix },
			'cssClasses': { r: true, t: testCssClasses }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				connects: 'connects',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			}
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( !isSet(options[name]) && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, !isSet(options[name]) ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		// All recent browsers accept unprefixed transform.
		// We need -ms- for IE9 and -webkit- for older Android;
		// Assume use of -webkit- if unprefixed and -ms- are not supported.
		// https://caniuse.com/#feat=transforms2d
		var d = document.createElement("div");
		var msPrefix = d.style.msTransform !== undefined;
		var noPrefix = d.style.transform !== undefined;

		parsed.transformRule = noPrefix ? 'transform' : (msPrefix ? 'msTransform' : 'webkitTransform');

		// Pips don't move, so we can place them using left/top.
		var styles = [['left', 'top'], ['right', 'bottom']];

		parsed.style = styles[parsed.dir][parsed.ort];

		return parsed;
	}


function scope ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'scope' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// For horizontal sliders in standard ltr documents,
	// make .noUi-origin overflow to the left so the document doesn't scroll.
	var scope_DirOffset = (scope_Document.dir === 'rtl') || (options.ort === 1) ? 0 : 100;

/*! In this file: Construction of DOM elements; */

	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( addTarget, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		addTarget.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		var connectBase = addNodeTo(base, options.cssClasses.connects);

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(connectBase, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( addTarget ) {

		// Apply classes and data to the target.
		addClass(addTarget, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(addTarget, options.cssClasses.ltr);
		} else {
			addClass(addTarget, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(addTarget, options.cssClasses.horizontal);
		} else {
			addClass(addTarget, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(addTarget, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( index ){

				var handle = scope_Handles[index];

				var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

				var now = positions[index];
				var text = options.ariaFormat.to(unencoded[index]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( values < 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var interval = values - 1;
			var spread = ( 100 / interval );

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( interval-- ) {
				values[ interval ] = ( interval * spread );
			}

			values.push(100);

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the amount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.setAttribute('data-value', values[0]);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}

/*! In this file: Browser events (not slider events like slide, change); */

	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect();
		var alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			e = fixEvent(e, data.pageOffset, data.target || element);

			// fixEvent returns false if this event has a different target
			// when handling (multi-) touch events;
			if ( !e ) {
				return false;
			}

			// doNotReject is passed by all end events to make sure released touches
			// are not rejected, leaving the slider "stuck" to the cursor;
			if ( scope_Target.hasAttribute('disabled') && !data.doNotReject ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset, eventTarget ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		// In the event that multitouch is activated, the only thing one handle should be concerned
		// about is the touches that originated on top of it.
		if ( touch ) {

			// Returns true if a touch originated on the target.
			var isTouchOnTarget = function (checkTouch) {
				return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
			};

			// In the case of touchstart events, we need to make sure there is still no more than one
			// touch on the target so we look amongst all touches.
			if (e.type === 'touchstart') {

				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

				// Do not support more than one touch per handle.
				if ( targetTouches.length > 1 ) {
					return false;
				}

				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;

			} else {

				// In the other cases, find on changedTouches is enough.
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

				// Cancel if the target touch has not moved.
				if ( !targetTouch ) {
					return false;
				}

				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();

		// Clamp proposal between 0% and 100%
		// Out-of-bound coordinates may occur when .noUi-base pseudo-elements
		// are used (e.g. contained handles feature)
		proposal = limit(proposal);

		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest || (pos === 100 && closest === 100) ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( data.handle ) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}

		// Unbind the move and end events, which are added on 'start'.
		data.listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		if ( scope_ActiveHandlesCount === 0 ) {
			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		var handle;
		if ( data.handleNumbers.length === 1 ) {

			var handleOrigin = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handleOrigin.hasAttribute('disabled') ) {
				return false;
			}

			handle = handleOrigin.children[0];
			scope_ActiveHandlesCount += 1;

			// Mark the handle as 'active' so it can be styled.
			addClass(handle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Record the event listeners.
		var listeners = [];

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			// The event target has changed so we need to propagate the original one so that we keep
			// relying on it to extract target touches.
			target: event.target,
			handle: handle,
			listeners: listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});

		// We want to make sure we pushed the listeners in the listener list rather than creating
		// a new one as it has already been passed to the event handlers.
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}

/*! In this file: Slider events (not browser events); */

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0];
			var tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}

/*! In this file: Mechanics for slider operation */

	function toPct ( pct ) {
		return pct + '%';
	}

	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding[0]);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding[1]);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	// Uses slider orientation to create CSS rules. a = base value;
	function inRuleOrder ( v, a ) {
		var o = options.ort;
		return (o?a:v) + ', ' + (o?v:a);
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// Takes a base value and an offset. This offset is used for the connect bar size.
	// In the initial design for this feature, the origin element was 1% wide.
	// Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
	// in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
	function transformDirection ( a, b ) {
		return options.dir ? 100 - a - b : a;
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		var rule = 'translate(' + inRuleOrder(toPct(transformDirection(to, 0) - scope_DirOffset), '0') + ')';
		scope_Handles[handleNumber].style[options.transformRule] = rule;

		updateConnect(handleNumber);
		updateConnect(handleNumber + 1);
	}

	// Handles before the slider middle are stacked later = higher,
	// Handles after the middle later is lower
	// [[7] [8] .......... | .......... [5] [4]
	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		// We use two rules:
		// 'translate' to change the left/top offset;
		// 'scale' to change the width of the element;
		// As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
		var connectWidth = h - l;
		var translateRule = 'translate(' + inRuleOrder(toPct(transformDirection(l, connectWidth)), '0') + ')';
		var scaleRule = 'scale(' + inRuleOrder(connectWidth / 100, '1') + ')';

		scope_Connects[index].style[options.transformRule] = translateRule + ' ' + scaleRule;
	}

/*! In this file: All methods eventually exposed in slider.noUiSlider... */

	// Parses value passed to .set method. Returns current value if not parse-able.
	function resolveToValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false || to === undefined ) {
			return scope_Locations[handleNumber];
		}

		// If a formatted number was passed, attempt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);
		to = scope_Spectrum.toStepping(to);

		// If parsing the number failed, use the current value.
		if ( to === false || isNaN(to) ) {
			return scope_Locations[handleNumber];
		}

		return to;
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// First pass, without lookAhead but with lookBackward. Values are set from left to right.
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
		});

		// Second pass. Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, true);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

/*! In this file: Calls to functions. All other scope_ files define functions only; */

	// Create the base element, initialize HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Throw an error if the slider was already initialized.
		if ( target.noUiSlider ) {
			throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = scope( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expandability;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "./src/app/forms/advance/advance.component.html":
/*!******************************************************!*\
  !*** ./src/app/forms/advance/advance.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Advance Form</h2>\n\n<h4 class=\"mt-4\">Date Picker</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row \">\n      <div class=\"col-lg\">\n        <h6>Date and Time</h6>\n        <ng2-flatpickr [config]=\"dateTime\" placeholder=\"Date and Time\"></ng2-flatpickr>\n      </div>\n      <div class=\"col-lg\">\n        <h6 class=\"mt-4 mt-lg-0\">Date</h6>\n        <ng2-flatpickr placeholder=\"Date\"></ng2-flatpickr>\n      </div>\n      <div class=\"col-lg\">\n        <h6 class=\"mt-4 mt-lg-0\">Time</h6>\n        <ng2-flatpickr [config]=\"time\" placeholder=\"Time\"></ng2-flatpickr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5 d-hide\">\n        <h6 class=\"mt-4 \">Inline</h6>\n        <ng2-flatpickr [config]=\"inline\" placeholder=\"Inline\"></ng2-flatpickr>\n      </div>\n      <div class=\"col\">\n        <div>\n          <h6 class=\"mt-4 \">Date Range</h6>\n          <ng2-flatpickr [config]=\"range\" placeholder=\"Date Range\"></ng2-flatpickr>\n        </div>\n        <div>\n          <h6 class=\"mt-4 \">Multiple</h6>\n          <ng2-flatpickr [config]=\"multiple\" placeholder=\"Multiple\"></ng2-flatpickr>\n        </div>\n        <div>\n          <h6 class=\"mt-4\">Weeks</h6>\n          <ng2-flatpickr [config]=\"week\" placeholder=\"Weeks\"></ng2-flatpickr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<p class=\"d-block text-right text-muted\">For more info :\n  <a href=\"https://github.com/mezoistvan/ng2-flatpickr\" target=\"_blank\">Flatpickr\n    <i class=\"material-icons\">launch</i>\n  </a>\n</p>\n\n\n<h4 class=\"mt-4\">Range Slider</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <div>\n          <div id=\"slider1\"></div>\n        </div>\n        <div class=\"mt-4\">\n          <div id=\"slider1_2\"></div>\n        </div>\n        <div class=\"mt-4\">\n          <div id=\"slider2\"></div>\n        </div>\n        <div class=\"my-4 mb-lg-6\">\n          <div id=\"slider3\"></div>\n        </div>\n      </div>\n      <div class=\"col-sm mt-5 mt-lg-0\">\n        <div class=\"row\">\n          <div class=\"col mr-2 ml-4\">\n            <div id=\"slider4\"></div>\n          </div>\n          <div class=\"col mx-2 mx-sm-0\">\n            <div id=\"slider4_2\"></div>\n          </div>\n          <div class=\"col mx-2 mx-sm-0\">\n            <div id=\"slider5\"></div>\n          </div>\n          <div class=\"col pr-lg-2  pr-5\">\n            <div id=\"slider6\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<p class=\"d-block text-right text-muted\">For more info :\n  <a href=\"https://refreshless.com/nouislider/\" target=\"_blank\">Nouislider\n    <i class=\"material-icons\">launch</i>\n  </a>\n</p>\n\n<h4 class=\"mt-4\">Tags</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <tag-input [(ngModel)]=\"tagInput\" theme='bootstrap'></tag-input>\n  </div>\n</div>\n<p class=\"d-block text-right text-muted\">For more info :\n  <a href=\"https://github.com/gbuomprisco/ngx-chips/\" target=\"_blank\">Ngx-chips\n    <i class=\"material-icons\">launch</i>\n  </a>\n</p>\n\n<h4 class=\"mt-4\">Select</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h6>Normal Select</h6>\n    <ng-select [items]=\"selectItems\" placeholder=\"Select\" class=\"p-1\"></ng-select>\n    <h6 class=\"mt-3\">Multiple Select</h6>\n    <ng-select [items]=\"selectItems\" [multiple]=\"true\" class=\"p-1\" placeholder=\"Multiple select\"></ng-select>\n  </div>\n</div>\n<p class=\"d-block text-right text-muted\">For more info :\n  <a href=\"https://github.com/ng-select/ng-select\" target=\"_blank\">Ng-select\n    <i class=\"material-icons\">launch</i>\n  </a>\n</p>\n"

/***/ }),

/***/ "./src/app/forms/advance/advance.component.scss":
/*!******************************************************!*\
  !*** ./src/app/forms/advance/advance.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\ni.material-icons {\n  font-size: .8rem; }\n.row {\n  height: 100%; }\n@media (max-width: 991.98px) {\n  .d-hide {\n    display: none; }\n  .row {\n    min-height: 150px; } }\n"

/***/ }),

/***/ "./src/app/forms/advance/advance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/advance/advance.component.ts ***!
  \****************************************************/
/*! exports provided: AdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceComponent", function() { return AdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvanceComponent = /** @class */ (function () {
    function AdvanceComponent() {
        this.dateTime = {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        };
        this.time = {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i"
        };
        this.range = {
            mode: "range"
        };
        this.week = {
            weekNumbers: true
        };
        this.multiple = {
            mode: "multiple"
        };
        this.inline = {
            inline: true
        };
        this.selectItems = ['item#1', 'item#2', 'item#3'];
        this.tagInput = ['Pizza', 'Pasta', 'Parmesan'];
    }
    AdvanceComponent.prototype.ngOnInit = function () {
        this.serRangeSlider();
    };
    AdvanceComponent.prototype.serRangeSlider = function () {
        var slider1 = document.getElementById('slider1');
        var slider1_2 = document.getElementById('slider1_2');
        var slider2 = document.getElementById('slider2');
        var slider3 = document.getElementById('slider3');
        var slider4 = document.getElementById('slider4');
        var slider4_2 = document.getElementById('slider4_2');
        var slider5 = document.getElementById('slider5');
        var slider6 = document.getElementById('slider6');
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider1, {
            start: 40,
            connect: "lower",
            range: {
                min: 0,
                max: 100
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider1_2, {
            start: 50,
            connect: "upper",
            range: {
                min: 0,
                max: 100
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 150],
            connect: true,
            range: {
                'min': 0,
                'max': 200
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider3, {
            range: {
                'min': [0],
                '10%': [500, 500],
                '50%': [4000, 1000],
                'max': [10000]
            },
            connect: 'lower',
            start: 1900,
            pips: {
                mode: 'range',
                density: 3
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider4, {
            start: 40,
            connect: "upper",
            orientation: 'vertical',
            range: {
                'min': 0,
                'max': 100
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider4_2, {
            start: 70,
            connect: "lower",
            orientation: 'vertical',
            range: {
                'min': 0,
                'max': 100
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider5, {
            start: [20, 150],
            orientation: "vertical",
            connect: true,
            range: {
                'min': 0,
                'max': 200
            }
        });
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider6, {
            orientation: "vertical",
            range: {
                'min': [0],
                '10%': [100, 100],
                '50%': [500, 500],
                'max': [1000]
            },
            connect: 'lower',
            start: 400,
            pips: {
                mode: 'range',
                density: 3
            }
        });
    };
    AdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance',
            template: __webpack_require__(/*! ./advance.component.html */ "./src/app/forms/advance/advance.component.html"),
            styles: [__webpack_require__(/*! ./advance.component.scss */ "./src/app/forms/advance/advance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvanceComponent);
    return AdvanceComponent;
}());



/***/ }),

/***/ "./src/app/forms/basic/basic.component.html":
/*!**************************************************!*\
  !*** ./src/app/forms/basic/basic.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Basic Form </h2>\n\n<div class=\"row mt-4\">\n  <div class=\"col-xl\">\n    <h4 >Horizontal form</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form class=\"mb-xl-4\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-9 offset-sm-3\">\n              <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" id=\"rme1\" class=\"custom-control-input\" checked>\n                <label class=\"custom-control-label\" for=\"rme1\">Remember Me</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-9 offset-sm-3\">\n              <button type=\"submit\" class=\"btn btn-primary px-4\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>    \n  </div>\n  <div class=\"col-xl\">\n    <h4 class=\"mt-4 mt-xl-0\">Stacked Form</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"email\" class=\"form-control rounded-border\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control rounded-border\" placeholder=\"Password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary px-4\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Inline Form</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form class=\"form-inline\">\n      <div class=\"form-group  \">\n        <input type=\"text\" class=\"form-control\" value=\"email@example.com\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group input-group ml-md-3\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">@</div>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n        </div>\n      <div class=\"form-group ml-3 d-none d-xl-block \">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary ml-md-3 px-lg-4\">Confirm </button>\n    </form>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Form Elements</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Default Input</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Input With Help Text</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Help Text\">\n        <p class=\"form-text text-muted\">Some Help Text Block</p>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Password</label>\n      <div class=\"col-sm-9\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Placeholder</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Placeholder\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Disabled</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Disabled\" disabled>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">Static</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control-plaintext\" value=\"email@example.com\" readonly>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\">TextArea</label>\n      <div class=\"col-sm-9\">\n        <textarea class=\"form-control\" rows=\"3\" id=\"comment\"></textarea>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row mt-4\">\n  <div class=\"col-lg\">\n    <h4>Types</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Default\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control rounded-border\" type=\"text\" placeholder=\"rounded border\">\n        </div>\n        <div class=\"form-group mb-lg-4\">\n          <input class=\"form-control no-border\" type=\"text\" placeholder=\"no border\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4 mt-lg-0\">Sizes</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Default input\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-4\">\n  <div class=\"col-lg-6\">\n    <h4>Validation</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control is-valid\" placeholder=\"First name\" value=\"Mark\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control is-invalid\" placeholder=\"Username\" required>\n          <div class=\"invalid-feedback\">\n            Please choose a username.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <h4>Input Groups</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <label class=\"sr-only\">Username</label>\n        <div class=\"input-group mb-3 mt-2\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">@</div>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">$</span>\n            <span class=\"input-group-text\">0.00</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n        </div>\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\">Button</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/basic/basic.component.ts":
/*!************************************************!*\
  !*** ./src/app/forms/basic/basic.component.ts ***!
  \************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
    }
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/forms/basic/basic.component.html"),
            styles: ['.form-group{  margin:1rem 0;}']
        })
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/forms/custom/custom.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/custom/custom.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Custom Form</h2>\n\n\n<div class=\"row\">\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Radio Buttons</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6>Block</h6>\n        <div class=\"custom-control custom-radio \">\n          <input type=\"radio\" id=\"customRadio\" name=\"cr1\" class=\"custom-control-input\" checked>\n          <label class=\"custom-control-label\" for=\"customRadio\">Toggle this custom radio</label>\n        </div>\n        <div class=\"custom-control custom-radio \">\n          <input type=\"radio\" id=\"customRadio2\" name=\"cr1\" class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label>\n        </div>\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioDisabled\" name=\"cr1\" class=\"custom-control-input\" disabled>\n          <label class=\"custom-control-label\">Disabled</label>\n        </div>\n        <h6 class=\"mt-3\">Inline</h6>\n        <div class=\"custom-control custom-radio d-inline-block mr-3 \">\n          <input type=\"radio\" id=\"customRadio-inline\" name=\"cr2\" class=\"custom-control-input\" checked>\n          <label class=\"custom-control-label\" for=\"customRadio-inline\">1</label>\n        </div>\n        <div class=\"custom-control custom-radio d-inline-block mr-3 \">\n          <input type=\"radio\" id=\"customRadio-inline2\" name=\"cr2\" class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"customRadio-inline2\">2</label>\n        </div>\n        <div class=\"custom-control custom-radio d-inline-block mr-3\">\n          <input type=\"radio\" name=\"radioDisabled\" class=\"custom-control-input\" disabled>\n          <label class=\"custom-control-label\">Disabled</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Checkboxs</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6>Block</h6>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customCheck1\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\n          <label class=\"custom-control-label\" for=\"customCheck2\">Check this custom checkbox</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" disabled>\n          <label class=\"custom-control-label\">Disabled</label>\n        </div>\n        <h6 class=\"mt-3\">Inline</h6>\n        <div class=\"custom-control custom-checkbox d-inline-block mr-3\">\n          <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customCheck8\">\n          <label class=\"custom-control-label\" for=\"customCheck8\">1</label>\n        </div>\n        <div class=\"custom-control custom-checkbox d-inline-block mr-3\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck9\">\n          <label class=\"custom-control-label\" for=\"customCheck9\">2</label>\n        </div>\n        <div class=\"custom-control custom-checkbox d-inline-block mr-3\">\n          <input type=\"checkbox\" class=\"custom-control-input\" disabled>\n          <label class=\"custom-control-label\">Disabled</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-8\">\n    <h4 class=\"mt-4\">Select</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mt-3\">Select</h6>\n        <select class=\"custom-select mb-3\">\n          <option selected>Open this select menu</option>\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n        </select>\n        <h6>Multi Select</h6>\n        <select class=\"custom-select\" multiple>\n          <option selected>Open this select menu</option>\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n        </select>\n        <h6 class=\"mt-3\">File Browser</h6>\n        <div class=\"custom-file mb-3\">\n          <input type=\"file\" class=\"custom-file-input\">\n          <label class=\"custom-file-label\">Choose file</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <h4 class=\"mt-4\">Toggle</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div>\n          <div class=\"toggle mr-4\">\n            <input type=\"checkbox\" />\n            <label></label>\n          </div>\n          <span>Toggle is On</span>\n        </div>\n        <div>\n          <div class=\"toggle mr-4\">\n            <input type=\"checkbox\" checked />\n            <label></label>\n          </div>\n          <span>Toggle is Off</span>\n        </div>\n      </div>\n    </div>\n    <h4 class=\"mt-4\">Progress Bar</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6>Normal</h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:70%\">70%</div>\n        </div>\n        <h6 class=\"mt-2\">Striped</h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped\" style=\"width:20%\"></div>\n        </div>\n        <h6 class=\"mt-2\">Animated</h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated\" style=\"width:60%\"></div>\n        </div>\n        <h6 class=\"mt-2\">Multiple</h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar bg-success\" style=\"width:50%\">\n            Free Space\n          </div>\n          <div class=\"progress-bar bg-warning\" style=\"width:30%\">\n            Warning\n          </div>\n          <div class=\"progress-bar bg-danger\" style=\"width:20%\">\n            Danger\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Custom Elements Validation</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form class=\"was-validated\">\n      <div class=\"custom-control custom-checkbox mb-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlValidation1\" required>\n        <label class=\"custom-control-label\" for=\"customControlValidation1\">Check this custom checkbox</label>\n        <div class=\"invalid-feedback\">Example invalid feedback text</div>\n      </div>\n\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" class=\"custom-control-input\" id=\"customControlValidation2\" name=\"radio-stacked\" required>\n        <label class=\"custom-control-label\" for=\"customControlValidation2\">Toggle this custom radio</label>\n      </div>\n      <div class=\"custom-control custom-radio mb-3\">\n        <input type=\"radio\" class=\"custom-control-input\" id=\"customControlValidation3\" name=\"radio-stacked\" required>\n        <label class=\"custom-control-label\" for=\"customControlValidation3\">Or toggle this other custom radio</label>\n        <div class=\"invalid-feedback\">More example invalid feedback text</div>\n      </div>\n\n      <div class=\"form-group\">\n        <select class=\"custom-select\" required>\n          <option value=\"\">Open this select menu</option>\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n        </select>\n        <div class=\"invalid-feedback\">Example invalid custom select feedback</div>\n      </div>\n\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" required>\n        <label class=\"custom-file-label\" for=\"validatedCustomFile\">Choose file...</label>\n        <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/custom/custom.component.scss":
/*!****************************************************!*\
  !*** ./src/app/forms/custom/custom.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.toggle {\n  position: relative;\n  display: inline-flex; }\n.toggle label {\n    background: #eee;\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n    border: 1px solid #bbbbbb;\n    height: 10px;\n    width: 35px;\n    position: relative;\n    display: inline-block;\n    border-radius: 50px;\n    transition: all 0.2s ease-in-out; }\n.toggle label:after {\n      content: '';\n      background: #3ebb8c;\n      position: absolute;\n      top: -7px;\n      width: 22px;\n      height: 22px;\n      left: -7px;\n      border-radius: 100%;\n      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n      transition: all 0.2s ease-in-out; }\n.toggle input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0;\n    cursor: pointer; }\n.toggle input:checked + label {\n      background: #3ebb8c; }\n.toggle input:checked + label:after {\n        background: #3ebb8c;\n        left: 15px; }\n"

/***/ }),

/***/ "./src/app/forms/custom/custom.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/custom/custom.component.ts ***!
  \**************************************************/
/*! exports provided: CustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponent", function() { return CustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomComponent = /** @class */ (function () {
    function CustomComponent() {
    }
    CustomComponent.prototype.ngOnInit = function () {
    };
    CustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom',
            template: __webpack_require__(/*! ./custom.component.html */ "./src/app/forms/custom/custom.component.html"),
            styles: [__webpack_require__(/*! ./custom.component.scss */ "./src/app/forms/custom/custom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomComponent);
    return CustomComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/forms/forms-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/forms/basic/basic.component.ts");
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validations/validations.component */ "./src/app/forms/validations/validations.component.ts");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advance/advance.component */ "./src/app/forms/advance/advance.component.ts");
/* harmony import */ var _custom_custom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/custom.component */ "./src/app/forms/custom/custom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'basic', component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"] },
    { path: 'advance', component: _advance_advance_component__WEBPACK_IMPORTED_MODULE_4__["AdvanceComponent"] },
    { path: 'custom', component: _custom_custom_component__WEBPACK_IMPORTED_MODULE_5__["CustomComponent"] },
    { path: 'validations', component: _validations_validations_component__WEBPACK_IMPORTED_MODULE_3__["ValidationsComponent"] }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormsLocalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsLocalModule", function() { return FormsLocalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/forms/basic/basic.component.ts");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance/advance.component */ "./src/app/forms/advance/advance.component.ts");
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validations/validations.component */ "./src/app/forms/validations/validations.component.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/forms/forms-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _custom_custom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom/custom.component */ "./src/app/forms/custom/custom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FormsLocalModule = /** @class */ (function () {
    function FormsLocalModule() {
    }
    FormsLocalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__["Ng2FlatpickrModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"]
            ],
            declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AdvanceComponent"], _validations_validations_component__WEBPACK_IMPORTED_MODULE_4__["ValidationsComponent"], _custom_custom_component__WEBPACK_IMPORTED_MODULE_10__["CustomComponent"]]
        })
    ], FormsLocalModule);
    return FormsLocalModule;
}());



/***/ }),

/***/ "./src/app/forms/validations/validations.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forms/validations/validations.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Form Validations</h2>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n        />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n        />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n        />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n        />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button  class=\"btn btn-primary\">Register</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form name=\"form\" (ngSubmit)=\"f2.form.valid && onSubmit2()\" #f2=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f2.submitted && firstName.invalid }\"\n          required />\n        <div *ngIf=\"f2.submitted && firstName.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f2.submitted && lastName.invalid }\"\n          required />\n        <div *ngIf=\"f2.submitted && lastName.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f2.submitted && email.invalid }\"\n          required email />\n        <div *ngIf=\"f2.submitted && email.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f2.submitted && password.invalid }\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f2.submitted && password.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Register</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/validations/validations.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forms/validations/validations.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/validations/validations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/validations/validations.component.ts ***!
  \************************************************************/
/*! exports provided: ValidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsComponent", function() { return ValidationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationsComponent = /** @class */ (function () {
    function ValidationsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.model = {};
    }
    ValidationsComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(ValidationsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ValidationsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)');
    };
    ValidationsComponent.prototype.onSubmit2 = function () {
        alert('SUCCESS!! :-)');
    };
    ValidationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validations',
            template: __webpack_require__(/*! ./validations.component.html */ "./src/app/forms/validations/validations.component.html"),
            styles: [__webpack_require__(/*! ./validations.component.scss */ "./src/app/forms/validations/validations.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ValidationsComponent);
    return ValidationsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map