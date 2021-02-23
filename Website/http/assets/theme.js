/*!
  * Leap Bootstrap Theme
  * Copyright 2018-2019 Medium Rare (undefined)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('aos'), require('jquery'), require('jquery-countdown'), require('scrollmonitor'), require('flickity'), require('ion-rangeslider'), require('isotope-layout'), require('jarallax'), require('plyr'), require('prismjs'), require('smooth-scroll'), require('twitter-fetcher'), require('typed.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'aos', 'jquery', 'jquery-countdown', 'scrollmonitor', 'flickity', 'ion-rangeslider', 'isotope-layout', 'jarallax', 'plyr', 'prismjs', 'smooth-scroll', 'twitter-fetcher', 'typed.js'], factory) :
  (global = global || self, factory(global.theme = {}, global.AOS, global.jQuery, null, global.scrollMonitor, global.Flickity, null, global.Isotope, global.jarallax, global.Plyr, global.Prism, global.SmoothScroll, global.twitterFetcher, global.Typed));
}(this, function (exports, AOS, jQuery$1, jqueryCountdown, scrollMonitor, Flickity, ionRangeslider, Isotope$1, jarallax, Plyr, Prism, SmoothScroll, twitterFetcher, Typed) { 'use strict';

  AOS = AOS && AOS.hasOwnProperty('default') ? AOS['default'] : AOS;
  jQuery$1 = jQuery$1 && jQuery$1.hasOwnProperty('default') ? jQuery$1['default'] : jQuery$1;
  scrollMonitor = scrollMonitor && scrollMonitor.hasOwnProperty('default') ? scrollMonitor['default'] : scrollMonitor;
  Flickity = Flickity && Flickity.hasOwnProperty('default') ? Flickity['default'] : Flickity;
  Isotope$1 = Isotope$1 && Isotope$1.hasOwnProperty('default') ? Isotope$1['default'] : Isotope$1;
  jarallax = jarallax && jarallax.hasOwnProperty('default') ? jarallax['default'] : jarallax;
  Plyr = Plyr && Plyr.hasOwnProperty('default') ? Plyr['default'] : Plyr;
  Prism = Prism && Prism.hasOwnProperty('default') ? Prism['default'] : Prism;
  SmoothScroll = SmoothScroll && SmoothScroll.hasOwnProperty('default') ? SmoothScroll['default'] : SmoothScroll;
  twitterFetcher = twitterFetcher && twitterFetcher.hasOwnProperty('default') ? twitterFetcher['default'] : twitterFetcher;
  Typed = Typed && Typed.hasOwnProperty('default') ? Typed['default'] : Typed;

  //
  AOS.init({
    once: true
  });

  //

  (function ($) {
    if ('objectFit' in document.documentElement.style === false) {
      $('.bg-image').each(function attachBg() {
        var img = $(this);
        var src = img.attr('src');
        var classes = img.get(0).classList; // Replaces the default <img.bg-image> element with a <div.bg-image>
        // to attach background using legacy friendly CSS rules

        img.before($("<div class=\"" + classes + "\" style=\"background: url(" + src + "); background-size: cover; background-position: 50% 50%;\"></div>")); // Removes original <img.bg-image> as it is no longer required

        img.remove();
      });
    }
  })(jQuery$1);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var mrCountdown = function ($) {
    /**
     * Check for countdown dependency
     * countdown - https://github.com/hilios/jQuery.countdown/
     */
    if (typeof $.fn.countdown !== 'function') {
      throw new Error('mrCountdown requires jquery.countdown.js (https://github.com/hilios/jQuery.countdown/)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrCountdown';
    var VERSION = '1.1.0';
    var DATA_KEY = 'mr.countdown';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var Default = {
      DAYS_TEXT: 'days',
      ELAPSED: 'Timer Done',
      Y_FMT: '%Y',
      MTHS_FMT: '%m',
      W_FMT: '%w',
      D_FMT: '%D',
      H_FMT: '%H',
      MINS_FMT: '%M',
      S_FMT: '%S',
      Y_LABEL_FMT: '%!Y:Year,Years;',
      MTHS_LABEL_FMT: '%!m:Month,Months;',
      W_LABEL_FMT: '%!w:Week,Weeks;',
      D_LABEL_FMT: '%!d:Day,Days;',
      H_LABEL_FMT: '%!H:Hour,Hours;',
      MINS_LABEL_FMT: '%!M:Minute,Minutes;',
      S_LABEL_FMT: '%!S:Second,Seconds;'
    };
    var CSS = {
      D_NONE: 'd-none'
    };
    var Selector = {
      COUNTDOWN: '[data-countdown-date]',
      ACTIVE: '[data-active-state]',
      ELAPSED: '[data-elapsed-state]',
      DATE_ATTR: 'data-countdown-date',
      DAYS_TEXT_ATTR: 'data-days-text',
      DATE_FORMAT_ATTR: 'data-date-format',
      DATE_FALLBACK_ATTR: 'data-date-fallback',
      Y_EL: '[data-years]',
      MTHS_EL: '[data-months]',
      W_EL: '[data-weeks]',
      D_EL: '[data-days]',
      H_EL: '[data-hours]',
      MINS_EL: '[data-minutes]',
      S_EL: '[data-seconds]',
      Y_LABEL_EL: '[data-years-label]',
      MTHS_LABEL_EL: '[data-months-label]',
      W_LABEL_EL: '[data-weeks-label]',
      D_LABEL_EL: '[data-days-label]',
      H_LABEL_EL: '[data-hours-label]',
      MINS_LABEL_EL: '[data-minutes-label]',
      S_LABEL_EL: '[data-seconds-label]'
    };
    var Options = {
      FORMAT: 'format',
      DETAILED: 'detailed'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Countdown =
    /*#__PURE__*/
    function () {
      function Countdown(element) {
        // The current countdown element
        this.element = element;
        var $element = $(element);
        this.date = $element.attr(Selector.DATE_ATTR);
        this.daysText = $element.attr(Selector.DAYS_TEXT_ATTR) || Default.DAYS_TEXT;
        this.countdownText = "%D " + this.daysText + " %H:%M:%S";
        this.dateFormat = $element.attr(Selector.DATE_FORMAT_ATTR) || this.countdownText;
        this.fallback = $element.attr(Selector.DATE_FALLBACK_ATTR) || Default.ELAPSED; // Options for detailed mode

        this.detailed = this.element.getAttribute("data-" + Options.DETAILED) !== null;

        if (this.detailed) {
          this.years = {
            show: $element.find(Selector.Y_EL).length,
            element: $element.find(Selector.Y_EL),
            format: $element.find(Selector.Y_EL).data(Options.FORMAT) || Default.Y_FMT,
            label: {
              show: $element.find(Selector.Y_LABEL_EL).length,
              element: $element.find(Selector.Y_LABEL_EL),
              format: $element.find(Selector.Y_LABEL_EL).data(Options.FORMAT) || Default.Y_LABEL_FMT
            }
          };
          this.months = {
            show: $element.find(Selector.MTHS_EL).length,
            element: $element.find(Selector.MTHS_EL),
            format: $element.find(Selector.MTHS_EL).data(Options.FORMAT) || Default.MTHS_FMT,
            label: {
              show: $element.find(Selector.MTHS_LABEL_EL).length,
              element: $element.find(Selector.MTHS_LABEL_EL),
              format: $element.find(Selector.MTHS_LABEL_EL).data(Options.FORMAT) || Default.MTHS_LABEL_FMT
            }
          };
          this.weeks = {
            show: $element.find(Selector.W_EL).length,
            element: $element.find(Selector.W_EL),
            format: $element.find(Selector.W_EL).data(Options.FORMAT) || Default.W_FMT,
            label: {
              show: $element.find(Selector.W_LABEL_EL).length,
              element: $element.find(Selector.W_LABEL_EL),
              format: $element.find(Selector.W_LABEL_EL).data(Options.FORMAT) || Default.W_LABEL_FMT
            }
          };
          this.days = {
            show: $element.find(Selector.D_EL).length,
            element: $element.find(Selector.D_EL),
            format: $element.find(Selector.D_EL).data(Options.FORMAT) || Default.D_FMT,
            label: {
              show: $element.find(Selector.D_LABEL_EL).length,
              element: $element.find(Selector.D_LABEL_EL),
              format: $element.find(Selector.D_LABEL_EL).data(Options.FORMAT) || Default.D_LABEL_FMT
            }
          };
          this.hours = {
            show: $element.find(Selector.H_EL).length,
            element: $element.find(Selector.H_EL),
            format: $element.find(Selector.H_EL).data(Options.FORMAT) || Default.H_FMT,
            label: {
              show: $element.find(Selector.H_LABEL_EL).length,
              element: $element.find(Selector.H_LABEL_EL),
              format: $element.find(Selector.H_LABEL_EL).data(Options.FORMAT) || Default.H_LABEL_FMT
            }
          };
          this.minutes = {
            show: $element.find(Selector.MINS_EL).length,
            element: $element.find(Selector.MINS_EL),
            format: $element.find(Selector.MINS_EL).data(Options.FORMAT) || Default.MINS_FMT,
            label: {
              show: $element.find(Selector.MINS_LABEL_EL).length,
              element: $element.find(Selector.MINS_LABEL_EL),
              format: $element.find(Selector.MINS_LABEL_EL).data(Options.FORMAT) || Default.MINS_LABEL_FMT
            }
          };
          this.seconds = {
            show: $element.find(Selector.S_EL).length,
            element: $element.find(Selector.S_EL),
            format: $element.find(Selector.S_EL).data(Options.FORMAT) || Default.S_FMT,
            label: {
              show: $element.find(Selector.S_LABEL_EL).length,
              element: $element.find(Selector.S_LABEL_EL),
              format: $element.find(Selector.S_LABEL_EL).data(Options.FORMAT) || Default.S_LABEL_FMT
            }
          };
        }

        this.initCountdown();
      } // getters


      var _proto = Countdown.prototype;

      _proto.initCountdown = function initCountdown() {
        var _this = this;

        var element = $(this.element);

        if (this.detailed) {
          element.countdown(this.date, function (event) {
            if (!event.elapsed) {
              if (_this.years.show) {
                _this.years.element.text(event.strftime(_this.years.format));
              }

              if (_this.years.label.show) {
                _this.years.label.element.text(event.strftime(_this.years.label.format));
              }

              if (_this.months.show) {
                _this.months.element.text(event.strftime(_this.months.format));
              }

              if (_this.months.label.show) {
                _this.months.label.element.text(event.strftime(_this.months.label.format));
              }

              if (_this.weeks.show) {
                _this.weeks.element.text(event.strftime(_this.weeks.format));
              }

              if (_this.weeks.label.show) {
                _this.weeks.label.element.text(event.strftime(_this.weeks.label.format));
              }

              if (_this.days.show) {
                _this.days.element.text(event.strftime(_this.days.format));
              }

              if (_this.days.label.show) {
                _this.days.label.element.text(event.strftime(_this.days.label.format));
              }

              if (_this.hours.show) {
                _this.hours.element.text(event.strftime(_this.hours.format));
              }

              if (_this.hours.label.show) {
                _this.hours.label.element.text(event.strftime(_this.hours.label.format));
              }

              if (_this.minutes.show) {
                _this.minutes.element.text(event.strftime(_this.minutes.format));
              }

              if (_this.minutes.label.show) {
                _this.minutes.label.element.text(event.strftime(_this.minutes.label.format));
              }

              if (_this.seconds.show) {
                _this.seconds.element.text(event.strftime(_this.seconds.format));
              }

              if (_this.seconds.label.show) {
                _this.seconds.label.element.text(event.strftime(_this.seconds.label.format));
              }
            } else {
              // If the countdown has elapsed (event.elapsed):
              element.find(Selector.ELAPSED).removeClass(CSS.D_NONE);
              element.find(Selector.ACTIVE).addClass(CSS.D_NONE);
            }
          });
        } else {
          $(this.element).countdown(this.date, function (event) {
            if (event.elapsed) {
              element.text(_this.fallback);
            } else {
              element.text(event.strftime(_this.dateFormat));
            }
          });
        }
      };

      Countdown.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachCountdown() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Countdown(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Countdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Countdown;
    }(); // END Class definition

    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var cdownsOnPage = $.makeArray($(Selector.COUNTDOWN));
      /* eslint-disable no-plusplus */

      for (var i = cdownsOnPage.length; i--;) {
        var $countdown = $(cdownsOnPage[i]);
        Countdown.jQueryInterface.call($countdown, $countdown.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Countdown.jQueryInterface;
    $.fn[NAME].Constructor = Countdown;

    $.fn[NAME].noConflict = function CountdownNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Countdown.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return Countdown;
  }(jQuery$1);

  var __assign=undefined&&undefined.__assign||function(){return (__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.decimalMult)/s.decimalMult,s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback();},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+="").split("."))[0],e=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r;}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign({},this.defaults,a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined";}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2;}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing;},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal));},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused;},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal);},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count));},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i;},t.prototype.ensureNumber=function(t){return "number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration;},t}();

  var mrCountup = function ($) {
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */
    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrCountup requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrCountup';
    var VERSION = '1.1.0';
    var DATA_KEY = 'mr.countup';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Options = {
      START: 'start',
      END: 'end',
      DURATION: 'duration',
      GROUPING: 'grouping',
      SEPARATOR: 'separator',
      DECIMAL_CHARACTER: 'decimal-character',
      DECIMAL_PLACES: 'decimal-places',
      PREFIX: 'prefix',
      SUFFIX: 'suffix',
      EASING: 'easing'
    };
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      RESIZE: "resize" + EVENT_KEY
    };
    var Selector = {
      DATA_ATTR: 'countup',
      DATA_COUNTUP: '[data-countup]'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Countup =
    /*#__PURE__*/
    function () {
      function Countup(element) {
        var $element = $(element); // Grab data-attributes

        this.start = parseFloat($element.data(Options.START), 10) || 0;
        this.end = parseFloat($element.data(Options.END), 10) || parseFloat($element.text(), 10);
        this.duration = parseFloat($element.data(Options.DURATION), 10) || 2.5;
        this.grouping = $element.data(Options.GROUPING) === true || false;
        this.separator = $element.data(Options.SEPARATOR) || ',';
        this.decimalCharacter = $element.data(Options.DECIMAL_CHARACTER) || '.';
        this.decimalPlaces = parseInt($element.data(Options.DECIMAL_PLACES), 10) || 0;
        this.prefix = $element.data(Options.PREFIX) || '';
        this.suffix = $element.data(Options.SUFFIX) || ''; // the easing data attribute will only disable easing if false is specified. Defaults to true.

        var easing = $element.data(Options.EASING);
        this.easing = easing === false ? easing : true;
        this.element = element;
        this.initWatcher(element);
        this.startCounting();
      } // getters


      var _proto = Countup.prototype;

      _proto.initWatcher = function initWatcher(element) {
        var _this = this;

        this.CountUp = new CountUp(element, this.end, {
          startVal: this.start,
          decimalPlaces: this.decimalPlaces,
          duration: this.duration,
          useEasing: this.easing,
          useGrouping: this.grouping,
          separator: this.separator,
          decimal: this.decimalCharacter,
          prefix: this.prefix,
          suffix: this.suffix
        });
        var watcher = scrollMonitor.create(element);
        this.watcher = watcher;
        watcher.stateChange(function () {
          _this.startCounting();
        });
      };

      _proto.startCounting = function startCounting() {
        if (this.watcher.isFullyInViewport) {
          if (!this.CountUp.error) {
            this.CountUp.start();
          } else {
            throw new Error(this.CountUp.error);
          }
        }
      };

      Countup.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachCountup() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Countup(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Countup, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Countup;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var countupElements = $.makeArray($(Selector.DATA_COUNTUP));
      /* eslint-disable no-plusplus */

      for (var i = countupElements.length; i--;) {
        var $countup = $(countupElements[i]);
        Countup.jQueryInterface.call($countup, $countup.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Countup.jQueryInterface;
    $.fn[NAME].Constructor = Countup;

    $.fn[NAME].noConflict = function CountupNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Countup.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return Countup;
  }(jQuery$1);

  //

  var mrUtil = function ($) {
    var VERSION = '1.2.0';
    var Tagname = {
      SCRIPT: 'script'
    };
    var Selector = {
      RECAPTCHA: '[data-recaptcha]'
    }; // Activate tooltips

    $('body').tooltip({
      selector: '[data-toggle="tooltip"]',
      container: 'body'
    }); // Activate popovers

    $('body').popover({
      selector: '[data-toggle="popover"]',
      container: 'body'
    }); // Activate toasts

    $('.toast').toast();
    var Util = {
      version: VERSION,
      selector: Selector,
      activateIframeSrc: function activateIframeSrc(iframe) {
        var $iframe = $(iframe);

        if ($iframe.attr('data-src')) {
          $iframe.attr('src', $iframe.attr('data-src'));
        }
      },
      idleIframeSrc: function idleIframeSrc(iframe) {
        var $iframe = $(iframe);
        $iframe.attr('data-src', $iframe.attr('src')).attr('src', '');
      },
      forEach: function forEach(array, callback, scope) {
        if (array) {
          if (array.length) {
            for (var i = 0; i < array.length; i += 1) {
              callback.call(scope, i, array[i]); // passes back stuff we need
            }
          } else if (array[0] || mrUtil.isElement(array)) {
            callback.call(scope, 0, array);
          }
        }
      },
      dedupArray: function dedupArray(arr) {
        return arr.reduce(function (p, c) {
          // create an identifying String from the object values
          var id = JSON.stringify(c); // if the JSON string is not found in the temp array
          // add the object to the output array
          // and add the key to the temp array

          if (p.temp.indexOf(id) === -1) {
            p.out.push(c);
            p.temp.push(id);
          }

          return p; // return the deduped array
        }, {
          temp: [],
          out: []
        }).out;
      },
      isElement: function isElement(obj) {
        return !!(obj && obj.nodeType === 1);
      },
      getFuncFromString: function getFuncFromString(funcName, context) {
        var findFunc = funcName || null; // if already a function, return

        if (typeof findFunc === 'function') return funcName; // if string, try to find function or method of object (of "obj.func" format)

        if (typeof findFunc === 'string') {
          if (!findFunc.length) return null;
          var target = context || window;
          var func = findFunc.split('.');

          while (func.length) {
            var ns = func.shift();
            if (typeof target[ns] === 'undefined') return null;
            target = target[ns];
          }

          if (typeof target === 'function') return target;
        } // return null if could not parse


        return null;
      },
      getScript: function getScript(source, callback) {
        var script = document.createElement(Tagname.SCRIPT);
        var prior = document.getElementsByTagName(Tagname.SCRIPT)[0];
        script.async = 1;
        script.defer = 1;

        script.onreadystatechange = function (_, isAbort) {
          if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = null;
            script.onreadystatechange = null;
            script = undefined;

            if (!isAbort && callback && typeof callback === 'function') {
              callback();
            }
          }
        };

        script.onload = script.onreadystatechange;
        script.src = source;
        prior.parentNode.insertBefore(script, prior);
      }
    };
    return Util;
  }(jQuery$1);

  var mrDropdownGrid = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'mrDropdownGrid';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.dropdownGrid';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME]; // KeyboardEvent.which value for Escape (Esc) key

    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for space key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for tab key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for up arrow key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for down arrow key

    var ARROW_DOWN_KEYCODE = 40; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var RIGHT_MOUSE_BUTTON_WHICH = 3;
    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var ClassName = {
      SHOW: 'show'
    };
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      RESIZE: "resize" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      MOUSE_ENTER: "mouseenter" + EVENT_KEY,
      MOUSE_LEAVE: "mouseleave" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown-grid"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      CONTAINER: '.dropdown-menu',
      CONTENT: '[data-dropdown-content]',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    };
    var Options = {
      HOVER: 'data-hover',
      BODY_HOVER: 'data-dropdown-grid-hover'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var DropdownGrid =
    /*#__PURE__*/
    function () {
      function DropdownGrid(element) {
        this.ticking = false;
        this.isActive = false;
        this.element = element;
        this.getOptions();
        this.parent = DropdownGrid.getParentFromElement(this.element);
        this.menu = this.getMenuElement();
        this.container = this.getContainerElement();
        this.content = this.getContentElement();
        this.isSubmenu = this.hasParentMenu();

        if (this.isSubmenu) {
          this.siblingMenus = this.getSiblingMenus();
        }

        this.submenus = this.getSubmenus();
        this.hover = this.options.hover;
        this.addEventListeners();
        this.setResizeEvent();
      }

      var _proto = DropdownGrid.prototype;

      _proto.getOptions = function getOptions() {
        if (!this.options) {
          this.options = {};
          this.options.hover = (this.element.getAttribute(Options.HOVER) === 'true' || document.body.getAttribute(Options.BODY_HOVER) === 'true') && this.element.getAttribute(Options.HOVER) !== 'false';
        }
      };

      _proto.toggle = function toggle(event) {
        this.getParentMenu();

        if (this.element.disabled || $(this.element).hasClass(ClassName.DISABLED)) {
          return;
        }

        this.isActive = $(this.menu).hasClass(ClassName.SHOW);
        var togglingOff = this.isActive;
        var togglingOn = !this.isActive;

        if (!this.isSubmenu) {
          DropdownGrid.clearMenus();
        }

        if (!this.isSubmenu && togglingOff) {
          return;
        }

        if (!this.isSubmenu && togglingOn && event && event.type === Event.MOUSE_LEAVE) {
          return;
        }

        if (this.isSubmenu && this.isActive) {
          DropdownGrid.clearMenus(null, this.element);
          DropdownGrid.clearMenus(null, this.submenus);
          return;
        }

        if (this.isSubmenu && !this.isActive) {
          DropdownGrid.clearMenus(null, this.siblingMenus);
        }

        var relatedTarget = {
          relatedTarget: this.element
        };
        var showEvent = $.Event(Event.SHOW, relatedTarget);
        $(this.parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && $(this.parent).closest(Selector.NAVBAR_NAV).length === 0) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        this.element.focus();
        this.element.setAttribute('aria-expanded', true);
        $(this.menu).toggleClass(ClassName.SHOW); // Recalculate positions after applying the shown class
        // This is because jQuery can't measure an invisible element.

        this.updatePosition();
        this.isActive = true;
        $(this.parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
      };

      _proto.updatePosition = function updatePosition(winWidth) {
        var windowWidth = winWidth || window.innerWidth;
        var trigger = mrDropdownGrid.getDimensionsFromElement(this.element);
        this.positionContainer(trigger.offsetLeft);
        this.positionContent(windowWidth, trigger.offsetLeft);
      };

      _proto.positionContainer = function positionContainer(offsetLeft) {
        if (this.container) {
          this.container.style.left = "-" + offsetLeft + "px";
        } else {
          throw new TypeError('No element matching .dropdown-menu.container found.');
        }
      };

      _proto.positionContent = function positionContent(windowWidth, offsetLeft) {
        if (this.content) {
          var leftValue; // let topValue;

          var contentRect = mrDropdownGrid.getDimensionsFromElement(this.content);
          var contentWidth = contentRect.width; // If submenu, the left of the content needs to sit to the side of the trigger's content

          if (this.isSubmenu) {
            this.getParentMenu();
            var parentContent = mrDropdownGrid.getDimensionsFromElement(this.parentMenu.content); // Calculate X Offset

            if (parentContent.offsetLeft + parentContent.width + contentWidth <= windowWidth) {
              // Submenu can fit next to parent menu
              leftValue = parentContent.offsetLeft + parentContent.width;
            } else if (parentContent.offsetLeft >= contentWidth) {
              // No room for submenu to fit to the right of parent, sit it to the left instead.
              leftValue = parentContent.offsetLeft - contentWidth;
            } else {
              leftValue = 0;
            } // Calculate Y offset

          } else if (contentWidth + offsetLeft >= windowWidth) {
            // Not a submenu, but if the content won't fit, sit content close to the right boundary
            leftValue = windowWidth - contentWidth;
          } else {
            // Not a submenu, and there is room to fit normally and sit below trigger
            leftValue = offsetLeft;
          }

          var leftString = Math.round(leftValue) + "px";
          this.content.style.left = leftString;
        } else {
          throw new TypeError('No [data-dropdown-content] element was found.');
        }
      };

      _proto.setResizeEvent = function setResizeEvent() {
        var _this = this;

        $(window).on(Event.RESIZE, function () {
          if (!_this.ticking) {
            window.requestAnimationFrame(function () {
              _this.updatePosition();

              _this.ticking = false;
            });
            _this.ticking = true;
          }
        });
      };

      _proto.getMenuElement = function getMenuElement() {
        if (!this.menu) {
          if (this.parent) {
            this.menu = this.parent.querySelector(Selector.MENU);
          }
        }

        return this.menu;
      };

      _proto.getContainerElement = function getContainerElement() {
        if (!this.container) {
          if (this.parent) {
            this.container = this.parent.querySelector("" + Selector.MENU + Selector.CONTAINER);
          }
        }

        return this.container;
      };

      _proto.getContentElement = function getContentElement() {
        if (!this.content) {
          if (this.parent) {
            this.content = this.container.querySelector(Selector.CONTENT);
          }
        }

        return this.content;
      };

      _proto.hasParentMenu = function hasParentMenu() {
        return $(this.element).closest(Selector.CONTENT).length > 0;
      };

      _proto.getParentMenu = function getParentMenu() {
        if (this.isSubmenu && !this.parentMenu) {
          this.parentMenu = $(this.parent).closest(Selector.MENU).siblings(Selector.DATA_TOGGLE).data(DATA_KEY);
        }
      };

      _proto.getSiblingMenus = function getSiblingMenus() {
        return $(this.element).closest(Selector.CONTENT).get(0).querySelectorAll(Selector.DATA_TOGGLE);
      };

      _proto.getSubmenus = function getSubmenus() {
        var children = this.content.querySelectorAll(Selector.DATA_TOGGLE);
        this.isParent = children.length !== 0;
        return children;
      };

      _proto.addEventListeners = function addEventListeners() {
        var _this2 = this;

        $(this.element).on(Event.CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this2.toggle();
        });

        if (this.hover) {
          $(this.parent).on(Event.MOUSE_ENTER + " " + Event.MOUSE_LEAVE, function (event) {
            event.preventDefault();
            event.stopPropagation();

            if ("" + event.type + EVENT_KEY === Event.MOUSE_ENTER && _this2.isActive || "" + event.type + EVENT_KEY === Event.MOUSE_LEAVE && !_this2.isActive) {
              return;
            }

            _this2.toggle(event);
          });
        }
      };

      DropdownGrid.getDimensionsFromElement = function getDimensionsFromElement(element) {
        if (element && mrUtil.isElement(element)) {
          var rect = element.getBoundingClientRect();
          rect.offsetLeft = Math.round(rect.left + window.pageXOffset - document.documentElement.clientLeft);
          return rect;
        } // If not an element, throw an error


        throw new TypeError('Can\'t get a measurement from a non-element');
      };

      DropdownGrid.getParentFromElement = function getParentFromElement(element) {
        return element.parentNode;
      };

      DropdownGrid.clearMenus = function clearMenus(event, specificToggle) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup') && event.which !== TAB_KEYCODE) {
          return;
        }

        var toggles;

        if (specificToggle && typeof specificToggle === 'object') {
          toggles = specificToggle;
        } else {
          toggles = document.querySelectorAll(Selector.DATA_TOGGLE);
        }

        mrUtil.forEach(toggles, function (index, toggle) {
          var parent = DropdownGrid.getParentFromElement(toggle);
          var context = $(toggle).data(DATA_KEY);
          var relatedTarget = {
            relatedTarget: toggle
          };

          if (event && event.type === 'click') {
            relatedTarget.clickEvent = event;
          }

          if (!context) {
            return;
          }

          var dropdownMenu = context.menu;

          if (!$(parent).hasClass(ClassName.SHOW)) {
            return;
          }

          if (event) {
            if ((event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
              return;
            }
          }

          if (event) {
            if (event.type === 'click' && ($.contains(context.content, event.target) || context.content.isSameNode(event.target))) {
              return;
            }
          }

          var hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $(document.body).children().off('mouseover', null, $.noop);
          }

          toggle.setAttribute('aria-expanded', 'false');
          context.isActive = false;
          $(dropdownMenu).removeClass(ClassName.SHOW);
          $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
        });
      };

      DropdownGrid.jQueryInterface = function jQueryInterface(config) {
        return this.each(function jqEachDropdownGrid() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new DropdownGrid(this);
            $element.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      } // eslint-disable-next-line complexity
      ;

      DropdownGrid.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? (event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE) && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = DropdownGrid.getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.SHOW);

        if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
          if (event.which === ESCAPE_KEYCODE) {
            var toggle = parent.querySelector(Selector.DATA_TOGGLE);
            $(toggle).trigger('focus');
          }

          $(this).trigger('click');
          return;
        }

        var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));

        if (items.length === 0) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // Up
          index -= 1;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // Down
          index += 1;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      _createClass(DropdownGrid, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return DropdownGrid;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, DropdownGrid.dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, DropdownGrid.dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, DropdownGrid.clearMenus).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(document).ready(function () {
      var dropdownGridElements = $.makeArray($(Selector.DATA_TOGGLE));
      /* eslint-disable no-plusplus */

      for (var i = dropdownGridElements.length; i--;) {
        var $dropdownGrid = $(dropdownGridElements[i]);
        DropdownGrid.jQueryInterface.call($dropdownGrid, $dropdownGrid.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = DropdownGrid.jQueryInterface;
    $.fn[NAME].Constructor = DropdownGrid;

    $.fn[NAME].noConflict = function DropdownGridNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return DropdownGrid.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return DropdownGrid;
  }(jQuery$1);

  //
  //
  //  fade-page.js
  //
  //
  // Page Transition to fade out when clicking a link which has opted in using class 'fade-page'
  (function () {
    var ATTR_HREF = 'href';
    var EVENT_CLICK = 'click';
    var SELECTOR_FADE = 'fade-page';
    var EFFECT_DELAY = 500;
    var fadePage = document.getElementsByClassName(SELECTOR_FADE);

    function fadePageFunction(event) {
      if (!(event.ctrlKey || event.shiftKey || event.metaKey || event.button && event.button === 1)) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.add(SELECTOR_FADE);
        var href = this.getAttribute(ATTR_HREF);
        setTimeout(function () {
          if (href !== '' && href !== '#') {
            window.location.href = href;
          }
        }, EFFECT_DELAY);
      }
    } // Bind click event


    for (var i = 0; i < fadePage.length; i += 1) {
      fadePage[i].addEventListener(EVENT_CLICK, fadePageFunction, false);
    }
  })();

  //

  (function () {
    $(document).on('shown.bs.modal layoutComplete', function (e) {
      var flickityInstance = $(e.target).find('[data-flickity]');
      flickityInstance.each(function (index, instance) {
        var $instance = $(instance);

        if ($instance.data().flickity.isInitActivated) {
          $instance.flickity('resize');
        }
      });
    });
  })(jQuery$1);

  var mrRecaptchav2 = function ($) {
    // Check mrUtil is present and correct version
    if (!(mrUtil && mrUtil.version >= '1.2.0')) {
      throw new Error('mrUtil >= version 1.2.0 is required.');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrRecaptchav2';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.recaptchav2'; // const EVENT_KEY = `.${DATA_KEY}`;
    // const DATA_API_KEY = '.data-api';

    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var RECAPTCHA_CALLBACK = 'mrRecaptchav2Init';
    var RemoteScript = {
      RECAPTCHAV2: "https://www.google.com/recaptcha/api.js?onload=" + RECAPTCHA_CALLBACK + "&render=explicit"
    };
    var Selector = {
      DATA_RECAPTCHA: '[data-recaptcha]',
      FORM: 'form'
    };
    var Options = {
      INVISIBLE: 'invisible'
    }; // "static" properties

    var instances = [];
    var apiReady = false;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Recaptchav2 =
    /*#__PURE__*/
    function () {
      function Recaptchav2(element) {
        this.element = element;
        this.form = this.getForm();
        this.isReady = false;
        this.isValid = false;
        this.options = $(this.element).data();
        this.invisible = this.options.size === Options.INVISIBLE;
        this.id = null; // Save instance into static property array

        instances.push(this);
      } // getters


      var _proto = Recaptchav2.prototype;

      _proto.init = function init() {
        var _this = this;

        if (this.element.innerHTML.replace(/[\s\xA0]+/g, '') === '') {
          this.id = grecaptcha.render(this.element, {
            sitekey: this.options.sitekey,
            theme: this.options.theme,
            size: this.options.size,
            badge: this.options.badge,
            tabindex: this.options.tabindex,
            callback: function callback() {
              _this.validate();
            },
            'expired-callback': function expiredCallback() {
              _this.invalidate();
            }
          });
          this.isReady = true;
        }
      };

      _proto.validate = function validate() {
        this.isValid = true;

        if (this.invisible && this.form) {
          $(this.form).trigger('submit');
        }
      };

      _proto.invalidate = function invalidate() {
        this.isValid = false;
      };

      _proto.checkValidity = function checkValidity() {
        if (this.isReady && this.isValid) {
          return true;
        }

        return false;
      };

      _proto.execute = function execute() {
        if (this.isReady && this.invisible) {
          grecaptcha.execute(this.id);
        }
      };

      _proto.reset = function reset() {
        if (this.isReady) {
          grecaptcha.reset(this.id);
          this.isValid = false;
        }
      };

      _proto.getForm = function getForm() {
        var closestForm = $(this.element).closest(Selector.FORM);
        return closestForm.length ? closestForm.get(0) : null;
      };

      Recaptchav2.getRecaptchaFromForm = function getRecaptchaFromForm(form) {
        if (mrUtil.isElement(form)) {
          var captchaElement = form.querySelector(Selector.DATA_RECAPTCHA);

          if (captchaElement) {
            var data = $(captchaElement).data(DATA_KEY);
            return data || null;
          }

          return null;
        }

        throw new TypeError('Form argument passed to getRecaptchaFromForm is not an element.');
      };

      Recaptchav2.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachRecaptchav2() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Recaptchav2(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Recaptchav2, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "ready",
        get: function get() {
          return apiReady;
        }
      }, {
        key: "instances",
        get: function get() {
          return instances;
        }
      }, {
        key: "apiReady",
        set: function set(ready) {
          if (ready === true && apiReady === false) {
            mrUtil.forEach(Recaptchav2.instances, function (index, instance) {
              instance.init();
            });
          }

          apiReady = true;
        }
      }]);

      return Recaptchav2;
    }();

    window.mrRecaptchav2Init = function () {
      mrRecaptchav2.apiReady = true;
    };
    /**
     * ------------------------------------------------------------------------
     * Initialise API javascript if recaptcha widgets are found
     * ------------------------------------------------------------------------
     */


    $(document).ready(function () {
      var Recaptchav2Elements = $.makeArray($(Selector.DATA_RECAPTCHA));

      if (Recaptchav2Elements.length > 0) {
        mrUtil.getScript(RemoteScript.RECAPTCHAV2);
        /* eslint-disable no-plusplus */

        for (var i = Recaptchav2Elements.length; i--;) {
          var $Recaptchav2 = $(Recaptchav2Elements[i]);
          Recaptchav2.jQueryInterface.call($Recaptchav2, $Recaptchav2.data());
        }
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Recaptchav2.jQueryInterface;
    $.fn[NAME].Constructor = Recaptchav2;

    $.fn[NAME].noConflict = function Recaptchav2NoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Recaptchav2.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return Recaptchav2;
  }(jQuery);

  var mrFormEmail = function ($) {
    // Check mrUtil is present and correct version
    if (!(mrUtil && mrUtil.version >= '1.2.0')) {
      throw new Error('mrUtil >= version 1.2.0 is required.');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrFormEmail';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.formEmail';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      LOADING: 'btn-loading-animate',
      WAS_VALIDATED: 'was-validated',
      D_NONE: 'd-none'
    };
    var Attribute = {
      ACTION: 'action',
      DISABLED: 'disabled',
      FEEDBACK_DELAY: 'data-feedback-delay',
      SUCCESS_REDIRECT: 'data-success-redirect'
    };
    var Selector = {
      DATA_ATTR: 'form-email',
      DATA_FORM_EMAIL: '[data-form-email]',
      DATA_SUCCESS: '[data-success-message]',
      DATA_ERROR: '[data-error-message]',
      SUBMIT_BUTTON: 'button[type="submit"]',
      SPAN: 'span',
      ALL_INPUTS: 'input,textarea,select'
    };
    var Event = {
      SENT: "sent" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      SUBMIT: 'submit'
    };
    var Options = {
      LOADING_TEXT: 'data-loading-text'
    };
    var Default = {
      LOADING_TEXT: 'Sending',
      FORM_ACTION: 'forms/mail.php',
      FEEDBACK_DELAY: 5000,
      ERROR_TEXT: 'Form submission error'
    };
    var Status = {
      SUCCESS: 'success',
      ERROR: 'error'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var FormEmail =
    /*#__PURE__*/
    function () {
      function FormEmail(element) {
        this.form = element;
        this.action = this.form.getAttribute(Attribute.ACTION) || Default.FORM_ACTION; // Returns an object containing the feedback

        this.feedback = this.getFeedbackElements(); // Get any recaptcha instances in the form - returns array of instances or null

        this.getRecaptcha(); // Get submit button, inner span and loading text.

        this.initSubmitButton(); // const $element = $(element);

        this.setSubmitEvent();
      } // getters


      var _proto = FormEmail.prototype;

      _proto.submitForm = function submitForm() {
        // Hide feedback mesages for fresh submit
        this.hideAllFeedback(); // Submit form if validateForm returns true

        if (this.validateForm()) {
          this.ajaxSubmit();
        }
      };

      _proto.validateForm = function validateForm() {
        var formIsValid = this.form.checkValidity();

        if (this.recaptcha) {
          if (this.recaptcha.invisible) {
            if (formIsValid && !this.recaptcha.checkValidity()) {
              this.recaptcha.execute();
              return false;
            } // invalidate if captcha is found and is not valid, otherwise keep original value

          } else if (this.recaptcha.checkValidity() === false) {
            formIsValid = false;
          }
        }

        if (!formIsValid) {
          // Cancel timeout so error message will stay shown
          clearTimeout(this.feedbackTimeout); // Allow BS validation styles to take effect

          this.form.classList.add(ClassName.WAS_VALIDATED);
          this.showFeedback(Status.ERROR, this.validationErrorMessage);
          return false;
        }

        this.form.classList.remove(ClassName.WAS_VALIDATED);
        return true;
      };

      _proto.ajaxSubmit = function ajaxSubmit() {
        var $form = $(this.form);
        var formData = $form.serializeArray();
        formData.push({
          name: 'url',
          value: window.location.href
        });
        jQuery$1.ajax({
          context: this,
          data: formData,
          dataType: 'json',
          error: this.showFeedback,
          success: this.processResponse,
          type: 'POST',
          url: this.action
        });
        this.toggleFormLoading(true);
      };

      _proto.initSubmitButton = function initSubmitButton() {
        if (!this.submitButton) {
          this.submitButton = this.form.querySelector(Selector.SUBMIT_BUTTON);
        }

        this.submitButtonSpan = this.submitButton.querySelector(Selector.SPAN);
        this.loadingText = this.submitButton.getAttribute(Options.LOADING_TEXT) || Default.LOADING_TEXT;
        this.originalSubmitText = this.submitButtonSpan.textContent;
        return this.submitButton;
      };

      _proto.processResponse = function processResponse(response) {
        var _this = this;

        var success = response.status === Status.SUCCESS; // Form is no longer in a 'loading' state

        this.toggleFormLoading(false); // Recaptcha will need to be solved again

        if (this.recaptcha) {
          this.recaptcha.reset();
        } // Trigger an event so users can fire Analytics scripts upon success


        $(this.form).trigger($.Event(Event.SENT)); // Redirect upon success if data-attribute is set

        var successRedirect = this.form.getAttribute(Attribute.SUCCESS_REDIRECT);

        if (success && successRedirect && successRedirect !== '') {
          window.location = successRedirect;
        } else if (success) {
          this.form.reset(); // Hide all feedback and hold a reference to the timeout
          // to cancel it when necessary.

          this.feedbackTimeout = setTimeout(function () {
            return _this.hideAllFeedback();
          }, this.feedbackDelay);
        } //  Show ERROR feedback message if not redirecting


        if (!successRedirect) {
          this.showFeedback(response.status, response.message);
        } // Detailed error message will be shown in Console if provided


        if (response.errorDetail) {
          /* eslint-disable no-console */
          console.error(response.errorName || Default.ERROR_TEXT, response.errorDetail.indexOf('{') === 0 ? JSON.parse(response.errorDetail) : response.errorDetail);
          /* eslint-enable no-console */
        }
      };

      _proto.showFeedback = function showFeedback(status, text, errorHTTP) {
        // Form is no longer in a 'loading' state
        this.toggleFormLoading(false); // If this is an ajax error from jQuery, 'status' will be
        // an object with statusText property

        if (typeof status === 'object' && status.statusText) {
          clearTimeout(this.feedbackTimeout);
          this.feedback.error.innerHTML = (errorHTTP || text) + ": <em>\"" + this.action + "\"</em> (" + status.status + " " + text + ")";
          this.feedback.error.classList.remove(ClassName.D_NONE);
        } else {
          this.feedback[status].innerHTML = text;
          this.feedback[status].classList.remove(ClassName.D_NONE);
        }
      };

      _proto.hideAllFeedback = function hideAllFeedback() {
        this.feedback.success.classList.add(ClassName.D_NONE);
        this.feedback.error.classList.add(ClassName.D_NONE);
      };

      _proto.getFeedbackElements = function getFeedbackElements() {
        if (!this.feedback) {
          this.feedback = {
            success: this.form.querySelector(Selector.DATA_SUCCESS),
            error: this.form.querySelector(Selector.DATA_ERROR)
          }; // Store the error alert's original text to be used as validation error message

          this.validationErrorMessage = this.feedback.error.innerHTML;
          var feedbackDelay = this.form.getAttribute(Attribute.FEEDBACK_DELAY) || Default.FEEDBACK_DELAY;
          this.feedbackDelay = parseInt(feedbackDelay, 10);
          this.feedbackTimeout = null;
        }

        return this.feedback;
      };

      _proto.getRecaptcha = function getRecaptcha() {
        if (this.form.querySelector(mrUtil.selector.RECAPTCHA)) {
          // Check mrUtil is present and correct version
          if (!mrRecaptchav2) {
            throw new Error('mrRecaptcha.js is required to handle the reCAPTCHA element in this form.');
          } else {
            // Returns an array of mrRecaptcha instances or null
            this.recaptcha = mrRecaptchav2.getRecaptchaFromForm(this.form);
          }
        }
      };

      _proto.toggleFormLoading = function toggleFormLoading(loading) {
        this.toggleSubmitButtonLoading(loading);
        FormEmail.toggleDisabled(this.form.querySelectorAll(Selector.ALL_INPUTS), loading);
      };

      _proto.toggleSubmitButtonLoading = function toggleSubmitButtonLoading(loading) {
        this.toggleSubmitButtonText(loading);
        this.toggleSubmitButtonAnimation(loading);
        FormEmail.toggleDisabled(this.submitButton, loading);
      };

      _proto.toggleSubmitButtonAnimation = function toggleSubmitButtonAnimation(animate) {
        // If animate is true, add the class, else remove it.
        this.submitButton.classList[animate ? 'add' : 'remove'](ClassName.LOADING);
      };

      _proto.toggleSubmitButtonText = function toggleSubmitButtonText(loading) {
        // If loading, set text to loading text, else return to original text.
        this.submitButtonSpan.textContent = loading ? this.loadingText : this.originalSubmitText;
      };

      FormEmail.toggleDisabled = function toggleDisabled(elements, disabled) {
        // If loading, set text to loading text, else return to original text.
        mrUtil.forEach(elements, function (index, element) {
          return element[disabled ? 'setAttribute' : 'removeAttribute'](Attribute.DISABLED, '');
        });
      };

      FormEmail.getInstanceFromForm = function getInstanceFromForm(form) {
        if (mrUtil.isElement(form)) {
          var data = $(form).data(DATA_KEY);
          return data || null;
        }

        throw new TypeError('Form argument passed to getInstanceFromForm is not an element.');
      };

      _proto.setSubmitEvent = function setSubmitEvent() {
        var _this2 = this;

        $(this.form).on(Event.SUBMIT, function (event) {
          event.preventDefault();

          _this2.submitForm();
        });
      };

      FormEmail.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachFormEmail() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new FormEmail(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(FormEmail, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return FormEmail;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var FormEmailElements = $.makeArray($(Selector.DATA_FORM_EMAIL));
      /* eslint-disable no-plusplus */

      for (var i = FormEmailElements.length; i--;) {
        var $FormEmail = $(FormEmailElements[i]);
        FormEmail.jQueryInterface.call($FormEmail, $FormEmail.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = FormEmail.jQueryInterface;
    $.fn[NAME].Constructor = FormEmail;

    $.fn[NAME].noConflict = function FormEmailNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return FormEmail.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return FormEmail;
  }(jQuery$1);

  var mrIonRangeSlider = function ($) {
    /**
     * Check for Ion rangeSlider dependency
     * https://github.com/IonDen/ion.rangeSlider
     */
    if (typeof $.fn.ionRangeSlider !== 'function') {
      throw new Error('mrIonRangeSlider requires ion.rangeSlider.js (https://github.com/IonDen/ion.rangeSlider)');
    } // Check mrUtil is present and correct version


    if (!(mrUtil && mrUtil.version >= '1.2.0')) {
      throw new Error('mrUtil >= version 1.2.0 is required.');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrIonRangeSlider';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.ionRangeSlider';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ION_RANGE_SLIDER_KEY = 'ionRangeSlider';
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CHANGE: 'input'
    };
    var Selector = {
      DATA_ATTR: 'ion-rangeslider',
      DATA_ION_RANGESLIDER: '[data-ion-rangeslider]',
      INPUT: 'INPUT',
      TEXT: 'text'
    };
    var Options = {
      SKIN_DEFAULT: 'theme'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var IonRangeSlider =
    /*#__PURE__*/
    function () {
      function IonRangeSlider(element) {
        var $element = $(element);
        this.options = $element.data();
        this.element = element;
        this.fromElement = null;
        this.toElement = null;
        this.unitElement = null;
        this.initRangeSlider();
      } // getters


      var _proto = IonRangeSlider.prototype;

      _proto.initRangeSlider = function initRangeSlider() {
        var options = this.options;

        if (options.fromSelector) {
          this.fromElement = document.querySelectorAll(options.fromSelector);
          this.setFromUpdateEvent(this.fromElement);
        }

        if (options.toSelector) {
          this.toElement = document.querySelectorAll(options.toSelector);
          this.setToUpdateEvent(this.toElement);
        }

        if (options.unitSelector && options.unitSingle && options.unitPlural) {
          this.unitElement = document.querySelectorAll(options.unitSelector);
        }

        $(this.element).ionRangeSlider({
          skin: Options.SKIN_DEFAULT,
          onStart: mrUtil.getFuncFromString(options.onStart),
          onFinish: mrUtil.getFuncFromString(options.onFinish),
          onChange: this.handleChange,
          scope: this,
          onUpdate: mrUtil.getFuncFromString(options.onUpdate)
        });
        this.rangeSlider = $(this.element).data(ION_RANGE_SLIDER_KEY);
      } // HandleChange then also calls the user's callback
      ;

      _proto.handleChange = function handleChange(data) {
        if (this.fromElement && this.fromElement.length > 0) {
          mrIonRangeSlider.updateValue(this.fromElement, data.from_value || data.from);
        }

        if (this.toElement && this.toElement.length > 0) {
          mrIonRangeSlider.updateValue(this.toElement, data.to_value || data.to);
        }

        if (this.unitElement && this.unitElement.length > 0) {
          var value = parseInt(data.from_value, 10) || data.value;
          mrIonRangeSlider.updateValue(this.unitElement, value > 1 ? this.options.unitPlural : this.options.unitSingle);
        }

        var userChangeFunction = mrUtil.getFuncFromString(this.options.onChange);

        if (userChangeFunction) {
          userChangeFunction(data);
        }
      } // Takes a collection of "To" elements and attaches
      // a change event handler to update the rangeslider when user inputs a value
      ;

      _proto.setToUpdateEvent = function setToUpdateEvent(collection) {
        var _this = this;

        mrUtil.forEach(collection, function (index, element) {
          if (element.tagName.toUpperCase() === Selector.INPUT && element.type === Selector.TEXT) {
            element.addEventListener(Event.CHANGE, function () {
              _this.rangeSlider.update({
                to: element.value
              });
            });
          }
        });
      } // Takes a collection of "From" elements and attaches
      // a change event handler to update the rangeslider when user inputs a value
      ;

      _proto.setFromUpdateEvent = function setFromUpdateEvent(collection) {
        var _this2 = this;

        mrUtil.forEach(collection, function (index, element) {
          if (element.tagName.toUpperCase() === Selector.INPUT && element.type === Selector.TEXT) {
            element.addEventListener(Event.CHANGE, function () {
              _this2.rangeSlider.update({
                from: element.value
              });
            });
          }
        });
      };

      IonRangeSlider.updateValue = function updateValue(collection, value) {
        mrUtil.forEach(collection, function (index, element) {
          var updateElement = element; // If element is an input, set the value instead of textContent

          var updateMethod = element.tagName.toUpperCase() === Selector.INPUT ? 'value' : 'textContent';
          updateElement[updateMethod] = value;
        });
      };

      IonRangeSlider.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachIonRangeSlider() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new IonRangeSlider(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(IonRangeSlider, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return IonRangeSlider;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var ionRangeSliderElements = $.makeArray($(Selector.DATA_ION_RANGESLIDER));
      /* eslint-disable no-plusplus */

      for (var i = ionRangeSliderElements.length; i--;) {
        var $ionRangeSlider = $(ionRangeSliderElements[i]);
        IonRangeSlider.jQueryInterface.call($ionRangeSlider, $ionRangeSlider.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = IonRangeSlider.jQueryInterface;
    $.fn[NAME].Constructor = IonRangeSlider;

    $.fn[NAME].noConflict = function IonRangeSliderNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return IonRangeSlider.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return IonRangeSlider;
  }(jQuery$1);

  var mrIsotope = function ($) {
    /**
     * Check for isotope dependency
     * isotope - https://github.com/metafizzy/isotope
     */
    if (typeof Isotope$1 === 'undefined') {
      throw new Error('mrIsotope requires isotope.pkgd.js (https://github.com/metafizzy/isotope)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrIsotope';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.isotope';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Css = {
      ACTIVE: 'active'
    };
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      FILTER_CLICK: 'click touchstart',
      SORTER_CLICK: 'click touchstart'
    };
    var Options = {
      DEFAULT_LAYOUT: 'masonry',
      ORIGINAL_ORDER: 'original-order'
    };
    var Selector = {
      FILTER_INITIALISED: '.js-filter-inited',
      DATA_ATTR: 'isotope',
      ISOTOPE_ID: 'data-isotope-id',
      DATA_ISOTOPE_COLLECTION: '[data-isotope-collection]',
      DATA_ISOTOPE_ITEM: '[data-isotope-item]',
      DATA_ISOTOPE_FILTERS: '[data-isotope-filters]',
      DATA_ISOTOPE_SORTERS: '[data-isotope-sorters]',
      CATEGORY: 'data-category',
      FILTER: 'data-filter',
      SORTER: 'data-sort',
      PRIMARY_SORTER: 'data-primary-sort',
      SECOND_SORTER: 'data-secondary-sort',
      SORT_SELECTOR: 'data-sort-selector',
      DATA_CATEGORY: '[data-category]',
      SORT_ASCENDING: 'data-sort-ascending',
      FILTER_ALL: '*'
    }; // returns a selector string for filterable elements matching the provided category

    function getCategoryFilter(filterBy) {
      return filterBy && filterBy !== Selector.FILTER_ALL ? "[" + Selector.CATEGORY + "*=\"" + filterBy + "\"]" : Selector.FILTER_ALL;
    } // returns a nodelist of all filter links matching the provided isotope ID


    function getFilters(isotopeId, exclude) {
      var excludeSelector = exclude ? ":not(" + exclude + ")" : '';
      var filters = document.querySelectorAll(Selector.DATA_ISOTOPE_FILTERS + "[" + Selector.ISOTOPE_ID + "=\"" + isotopeId + "\"] [" + Selector.FILTER + "]" + excludeSelector);
      return filters;
    } // returns a nodelist of all sorter links matching the provided isotope ID


    function getSorters(isotopeId) {
      return document.querySelectorAll(Selector.DATA_ISOTOPE_SORTERS + "[" + Selector.ISOTOPE_ID + "=\"" + isotopeId + "\"] [" + Selector.SORTER + "][" + Selector.SORT_SELECTOR + "],\n      " + Selector.DATA_ISOTOPE_SORTERS + "[" + Selector.ISOTOPE_ID + "=\"" + isotopeId + "\"] [" + Selector.SORTER + "][" + Selector.PRIMARY_SORTER + "][" + Selector.SECOND_SORTER + "]");
    } // returns a nodelist of all sorter links matching the provided sort value


    function getSorter(isotopeId, sortValue) {
      return document.querySelectorAll(Selector.DATA_ISOTOPE_SORTERS + "[" + Selector.ISOTOPE_ID + "=\"" + isotopeId + "\"] [" + Selector.SORTER + "=\"" + sortValue + "\"]");
    } // returns a nodelist of all filter links matching the provided filter value


    function getFilter(isotopeId, filter) {
      return document.querySelectorAll(Selector.DATA_ISOTOPE_FILTERS + "[" + Selector.ISOTOPE_ID + "=\"" + isotopeId + "\"] [" + Selector.FILTER + "=\"" + filter + "\"]");
    } // sets active class of provided elements on or off


    function toggleActive(filters, active) {
      if (filters) {
        mrUtil.forEach(filters, function (index, filter) {
          if (filter && typeof filter.classList !== typeof undefined) {
            if (active) {
              filter.classList.add(Css.ACTIVE);
            } else {
              filter.classList.remove(Css.ACTIVE);
            }
          }
        });
      }
    }
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */


    var IsotopeWrapper =
    /*#__PURE__*/
    function () {
      function IsotopeWrapper(element) {
        var $element = $(element);
        var attributes = $element.data();
        this.element = element;
        this.attributes = attributes;
        this.filters = {};
        this.sorters = {};
        this.activeFilter = null;
        this.activeSorter = null;
        this.isotope = null;
        this.options = {};
        this.options.getSortData = {};
        this.options.sortAscending = {};
        this.initIsotope();
        this.initSorters();
        this.initFilters();
      } // getters


      var _proto = IsotopeWrapper.prototype;

      _proto.initFilters = function initFilters() {
        var _this = this;

        // Get all filter links
        var filters = getFilters(this.attributes.isotopeId, Selector.FILTER_INITIALISED);
        mrUtil.forEach(filters, function (index, filter) {
          var filterValue = filter.attributes[Selector.FILTER] && filter.attributes[Selector.FILTER].value; // Find all other filters matching this value to be de/activated on click

          _this.filters[filterValue] = getFilter(_this.attributes.isotopeId, filterValue); // Set up filter click event

          $(filter).on(Event.FILTER_CLICK, function (event) {
            if (event.preventDefault) {
              event.preventDefault();
            } // Activate appropriate links


            toggleActive(_this.activeFilter, false);
            toggleActive(_this.filters[filterValue], true);
            _this.activeFilter = filters; // Get selectorified filter value unless value is '*' (* does not need to be a selector)

            _this.options.filter = filterValue === '*' ? filterValue : getCategoryFilter(filterValue); // Update isotope with current filter settings

            _this.isotope.arrange(_this.options);
          }); // Add FILTER_INITIALISED class
          // just to make distinguishing old and new filters easier

          filter.classList.add(Selector.FILTER_INITIALISED);
        });
      };

      _proto.initSorters = function initSorters() {
        var _this2 = this;

        // Get all sorters linked to current isotope-id
        var sorters = getSorters(this.attributes.isotopeId);
        var defaultSort = this.attributes.defaultSort || Options.ORIGINAL_ORDER;
        mrUtil.forEach(sorters, function (index, sorter) {
          // Get options from attributes
          // Done this way for brevity (previous way was too wordy)
          var sa = sorter.attributes;
          var ss = sa[Selector.SORTER];
          var ssel = sa[Selector.SORT_SELECTOR];
          var asc = sa[Selector.SORT_ASCENDING];
          var pri = sa[Selector.PRIMARY_SORTER];
          var sec = sa[Selector.SECOND_SORTER]; // Extract options from attributes

          var sortValue = ss && ss.value;
          var sortSelector = ssel && ssel.value; // If secondSort is set, pass in an array rather than a single sort value

          var arraySort = pri && pri.value && sec && sec.value ? [pri.value, sec.value] : null;
          var sortAscending = !(asc && asc.value && asc.value === 'false'); // Store list of other sorters matching this value to be de/activated on click

          _this2.sorters[sortValue] = getSorter(_this2.attributes.isotopeId, sortValue); // Set up sorters click event for this one sorter

          $(sorter).on(Event.SORTER_CLICK, function (event) {
            if (event.preventDefault) {
              event.preventDefault();
            } // Switch active class on sorter links


            toggleActive(_this2.activeSorter, false);
            toggleActive(_this2.sorters[sortValue], true);
            _this2.activeSorter = _this2.sorters[sortValue]; // Pass in the arraySort (primary/secondary) array if it exists
            // otherwise use clicked sortValue

            _this2.options.sortBy = arraySort || sortValue; // Update isotope with curent options

            _this2.isotope.arrange(_this2.options);
          }); // Set sortAscending object with current sortAscending value

          _this2.options.sortAscending[sortValue] = sortAscending; // Only set sortData in isotope if this is a unique sorting ID, not for
          // array sorts (primary/secondary) as they simply use an array to
          // reference existing sort configs

          if (sortValue !== Options.ORIGINAL_ORDER && !arraySort) {
            // Set the sort object in isotope options (will be reinitialised later)
            // Won't be added as a new sortData entry if secondSort is active
            _this2.options.getSortData[sortValue] = sortSelector;
          }
        }); // Set sorting order to default if it exists

        this.options.sortBy = defaultSort; // Set default sorter to active

        this.activeSorter = getSorter(this.attributes.isotopeId, defaultSort);
        toggleActive(this.activeSorter, true); // Update isotope with collected sorter data

        this.isotope.updateSortData(); // Update isotope with current sort options

        this.isotope.arrange(this.options);
      };

      _proto.initIsotope = function initIsotope() {
        // Get hash filter from URL
        var hashFilter = window.location.hash.replace('#', '');
        hashFilter = hashFilter !== '' && !this.attributes.ignoreHash ? hashFilter : null; // Determine default filter

        var defaultFilter = hashFilter || this.attributes.defaultFilter || Selector.FILTER_ALL;
        var defaultFilterSelector = getCategoryFilter(defaultFilter); // Default to true, unless found to be explicitly false

        var defaultSortAscending = !this.attributes.sortAscending === false; // Setup initial config

        this.options.itemSelector = Selector.DATA_ISOTOPE_ITEM;
        this.options.layoutMode = this.attributes.layoutMode || Options.DEFAULT_LAYOUT;
        this.options.filter = defaultFilterSelector;
        this.options.sortAscending[Options.ORIGINAL_ORDER] = defaultSortAscending;
        this.isotope = new Isotope$1(this.element, this.options);
        this.activeFilter = getFilter(this.attributes.isotopeId, defaultFilter);
        toggleActive(this.activeFilter, true);
      };

      IsotopeWrapper.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachIsotope() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new IsotopeWrapper(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(IsotopeWrapper, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return IsotopeWrapper;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var isotopeElements = $.makeArray($(Selector.DATA_ISOTOPE_COLLECTION));
      /* eslint-disable no-plusplus */

      for (var i = isotopeElements.length; i--;) {
        var $isotope = $(isotopeElements[i]);
        IsotopeWrapper.jQueryInterface.call($isotope, $isotope.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = IsotopeWrapper.jQueryInterface;
    $.fn[NAME].Constructor = IsotopeWrapper;

    $.fn[NAME].noConflict = function IsotopeWrapperNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return IsotopeWrapper.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return IsotopeWrapper;
  }(jQuery$1);

  //

  (function ($) {
    if (typeof jarallax === 'function') {
      $('.alert-dismissible').on('closed.bs.alert', function () {
        jarallax(document.querySelectorAll('[data-jarallax]'), 'onScroll');
      });
      $(document).on('resized.mr.overlayNav', function () {
        jarallax(document.querySelectorAll('[data-jarallax]'), 'onResize');
      });
      jarallax(document.querySelectorAll('[data-jarallax]'), {
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/
      });
    }
  })(jQuery$1);

  var mrMapStyle = [{
    featureType: 'administrative.country',
    elementType: 'labels.text',
    stylers: [{
      lightness: '29'
    }]
  }, {
    featureType: 'administrative.province',
    elementType: 'labels.text.fill',
    stylers: [{
      lightness: '-12'
    }, {
      color: '#796340'
    }]
  }, {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{
      lightness: '15'
    }, {
      saturation: '15'
    }]
  }, {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [{
      visibility: 'on'
    }, {
      color: '#fbf5ed'
    }]
  }, {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{
      visibility: 'on'
    }, {
      color: '#fbf5ed'
    }]
  }, {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [{
      visibility: 'on'
    }, {
      lightness: '30'
    }, {
      saturation: '-41'
    }, {
      gamma: '0.84'
    }]
  }, {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'poi.medical',
    elementType: 'geometry',
    stylers: [{
      color: '#fbd3da'
    }]
  }, {
    featureType: 'poi.medical',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#b0e9ac'
    }, {
      visibility: 'on'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{
      hue: '#68ff00'
    }, {
      lightness: '-24'
    }, {
      gamma: '1.59'
    }]
  }, {
    featureType: 'poi.sports_complex',
    elementType: 'all',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'poi.sports_complex',
    elementType: 'geometry',
    stylers: [{
      saturation: '10'
    }, {
      color: '#c3eb9a'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'on'
    }, {
      lightness: '30'
    }, {
      color: '#e7ded6'
    }]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }, {
      saturation: '-39'
    }, {
      lightness: '28'
    }, {
      gamma: '0.86'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#ffe523'
    }, {
      visibility: 'on'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'on'
    }, {
      saturation: '0'
    }, {
      gamma: '1.44'
    }, {
      color: '#fbc28b'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }, {
      saturation: '-40'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      color: '#fed7a5'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [{
      visibility: 'on'
    }, {
      gamma: '1.54'
    }, {
      color: '#fbe38b'
    }]
  }, {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#ffffff'
    }, {
      visibility: 'on'
    }, {
      gamma: '2.62'
    }, {
      lightness: '10'
    }]
  }, {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'on'
    }, {
      weight: '0.50'
    }, {
      gamma: '1.04'
    }]
  }, {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#dee3fb'
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      saturation: '46'
    }, {
      color: '#a4e1ff'
    }]
  }];

  var mrMaps = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'mrMaps';
    var VERSION = '1.1.0';
    var DATA_KEY = 'mr.maps';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      MAP: '[data-maps-api-key]',
      MARKER: 'div.map-marker',
      STYLE: 'div.map-style',
      MARKER_ADDRESS: 'data-address',
      MARKER_LATLNG: 'data-latlong',
      MARKER_IMAGE: 'data-marker-image',
      MARKER_TITLE: 'data-marker-title',
      INFOWindow: 'div.info-window'
    };
    var String = {
      MARKER_TITLE: ''
    };
    var Event = {
      MAP_LOADED: "loaded" + EVENT_KEY
    };
    var Default = {
      MARKER_IMAGE_URL: 'assets/img/map-marker.png',
      MAP: {
        disableDefaultUI: true,
        draggable: true,
        scrollwheel: false,
        zoom: 17,
        zoomControl: false
      }
    }; // mrMapStyle should be defined in a js file included prior to maps.js
    // The data should be an array of style overrides as per snazzymaps.com.

    Default.MAP.styles = typeof mrMapStyle !== typeof undefined ? mrMapStyle : undefined;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Map =
    /*#__PURE__*/
    function () {
      function Map(element) {
        // The current map element
        this.element = element;
        this.$element = $(element);
        this.markers = [];
        this.geocoder = new google.maps.Geocoder();
        this.markerElements = this.$element.find(Selector.MARKER);
        this.styleElement = this.$element.find(Selector.STYLE).first();
        this.initMap();
        this.createMarkers();
      } // version getter


      Map.init = function init() {
        var mapsOnPage = $.makeArray($(Selector.MAP));
        /* eslint-disable no-plusplus */

        for (var i = mapsOnPage.length; i--;) {
          var $map = $(mapsOnPage[i]);
          Map.jQueryInterface.call($map, $map.data());
        }
      };

      var _proto = Map.prototype;

      _proto.initMap = function initMap() {
        var _this = this;

        var mapElement = this.element;
        var mapInstance = this.$element;
        var showZoomControl = typeof mapInstance.attr('data-zoom-controls') !== typeof undefined;
        var zoomControlPos = typeof mapInstance.attr('data-zoom-controls') !== typeof undefined ? mapInstance.attr('data-zoom-controls') : false;
        var latlong = typeof mapInstance.attr('data-latlong') !== typeof undefined ? mapInstance.attr('data-latlong') : false;
        var latitude = latlong ? parseFloat(latlong.substr(0, latlong.indexOf(','))) : false;
        var longitude = latlong ? parseFloat(latlong.substr(latlong.indexOf(',') + 1)) : false;
        var address = mapInstance.attr('data-address') || '';
        var mapOptions = null; // let markerOptions = null;

        var mapAo = {}; // Attribute overrides - allows data attributes on the map to override global options

        try {
          mapAo.styles = this.styleElement.length ? JSON.parse(this.styleElement.html().trim()) : undefined;
        } catch (error) {
          throw new Error(error);
        }

        mapAo.zoom = mapInstance.attr('data-map-zoom') ? parseInt(mapInstance.attr('data-map-zoom'), 10) : undefined;
        mapAo.zoomControl = showZoomControl;
        mapAo.zoomControlOptions = zoomControlPos !== false ? {
          position: google.maps.ControlPosition[zoomControlPos]
        } : undefined;
        mapOptions = jQuery.extend({}, Default.MAP, mapAo);
        this.map = new google.maps.Map(mapElement, mapOptions);
        google.maps.event.addListenerOnce(this.map, 'center_changed', function () {
          // Map has been centered.
          var loadedEvent = $.Event(Event.MAP_LOADED, {
            map: _this.map
          });
          mapInstance.trigger(loadedEvent);
        });

        if (typeof latitude !== typeof undefined && latitude !== '' && latitude !== false && typeof longitude !== typeof undefined && longitude !== '' && longitude !== false) {
          this.map.setCenter(new google.maps.LatLng(latitude, longitude));
        } else if (address !== '') {
          this.geocodeAddress(address, Map.centerMap, this, this.map);
        } else {
          throw new Error('No valid address or latitude/longitude pair provided for map.');
        }
      };

      _proto.geocodeAddress = function geocodeAddress(address, callback, thisMap, args) {
        this.geocoder.geocode({
          address: address
        }, function (results, status) {
          if (status !== google.maps.GeocoderStatus.OK) {
            throw new Error("There was a problem geocoding the address \"" + address + "\".");
          } else {
            callback(results, thisMap, args);
          }
        });
      };

      Map.centerMap = function centerMap(geocodeResults, thisMap) {
        thisMap.map.setCenter(geocodeResults[0].geometry.location);
      };

      Map.moveMarker = function moveMarker(geocodeResults, thisMap, gMarker) {
        gMarker.setPosition(geocodeResults[0].geometry.location);
      };

      _proto.createMarkers = function createMarkers() {
        var _this2 = this;

        Default.MARKER = {
          icon: {
            url: this.$element.attr(Selector.MARKER_IMAGE) || Default.MARKER_IMAGE_URL,
            scaledSize: new google.maps.Size(50, 50)
          },
          title: String.MARKER_TITLE,
          optimised: false
        };
        this.markerElements.each(function (index, marker) {
          var gMarker;
          var $marker = $(marker);
          var markerAddress = $marker.attr(Selector.MARKER_ADDRESS);
          var markerLatLng = $marker.attr(Selector.MARKER_LATLNG);
          var infoWindow = $marker.find(Selector.INFOWindow);
          var markerAo = {
            title: $marker.attr(Selector.MARKER_TITLE)
          };
          markerAo.icon = typeof $marker.attr(Selector.MARKER_IMAGE) !== typeof undefined ? {
            url: $marker.attr(Selector.MARKER_IMAGE),
            scaledSize: new google.maps.Size(50, 50)
          } : undefined;
          var markerOptions = jQuery.extend({}, Default.MARKER, markerAo);
          gMarker = new google.maps.Marker(jQuery.extend({}, markerOptions, {
            map: _this2.map
          }));

          if (infoWindow.length) {
            var gInfoWindow = new google.maps.InfoWindow({
              content: infoWindow.first().html(),
              maxWidth: parseInt(infoWindow.attr('data-max-width') || '250', 10)
            });
            gMarker.addListener('click', function () {
              gInfoWindow.open(_this2.map, gMarker);
            });
          } // Set marker position


          if (markerLatLng) {
            if (/(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/.test(markerLatLng)) {
              gMarker.setPosition(new google.maps.LatLng(parseFloat(markerLatLng.substr(0, markerLatLng.indexOf(','))), parseFloat(markerLatLng.substr(markerLatLng.indexOf(',') + 1))));
              _this2.markers[index] = gMarker;
            }
          } else if (markerAddress) {
            _this2.geocodeAddress(markerAddress, Map.moveMarker, _this2, gMarker);

            _this2.markers[index] = gMarker;
          } else {
            gMarker = null;
            throw new Error("Invalid data-address or data-latlong provided for marker " + (index + 1));
          }
        });
      };

      Map.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachMap() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Map(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Map, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Map;
    }(); // END Class definition

    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */
    // Load Google MAP API JS with callback to initialise when fully loaded


    if (document.querySelector('[data-maps-api-key]') && !document.querySelector('.gMapsAPI')) {
      if ($('[data-maps-api-key]').length) {
        var apiKey = $('[data-maps-api-key]:first').attr('data-maps-api-key') || '';

        if (apiKey !== '') {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=theme.mrMaps.init";
          script.className = 'gMapsAPI';
          document.body.appendChild(script);
        }
      }
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */


    $.fn[NAME] = Map.jQueryInterface;
    $.fn[NAME].Constructor = Map;

    $.fn[NAME].noConflict = function MapNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Map.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return Map;
  }(jQuery);

  var mrOverlayNav = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'mrOverlayNav';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.overlayNav';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      RESIZE: "resize" + EVENT_KEY,
      RESIZED: "resized" + EVENT_KEY,
      IMAGE_LOAD: 'load',
      TOGGLE_SHOW: 'show.bs.collapse',
      TOGGLE_HIDE: 'hide.bs.collapse',
      NOTIFICATION_CLOSE: '',
      ALERT_CLOSE: 'close.bs.alert'
    };
    var Selector = {
      CONTAINER: 'body > div.navbar-container',
      OVERLAY_NAV: 'body > div.navbar-container > nav[data-overlay]',
      NAV: 'nav',
      OVERLAY_SECTION: '[data-overlay]',
      IMAGE: 'img'
    };
    var ClassName = {
      TOGGLED_SHOW: 'navbar-toggled-show'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var OverlayNav =
    /*#__PURE__*/
    function () {
      function OverlayNav(element) {
        this.ticking = false; // Used to debounce resize event

        this.element = element;
        this.navHeight = this.getNavHeight();
        this.container = OverlayNav.getContainerElement();
        this.overlayElement = OverlayNav.getFirstOverlayElement();
        this.setImageLoadEvent();
        this.updateValues();
        this.setResizeEvent();
        this.setToggleEvent();
      } // getters


      var _proto = OverlayNav.prototype;

      _proto.getNavHeight = function getNavHeight() {
        this.navHeight = this.element.getBoundingClientRect().height;
      };

      _proto.updateValues = function updateValues() {
        this.getNavHeight();
        this.updateContainer();
        this.updateOverlayElement();
        $(this.element).trigger($.Event(Event.RESIZED));
      };

      _proto.updateContainer = function updateContainer() {
        if (!this.container) {
          return;
        }

        this.container.style.minHeight = this.navHeight + "px";
        this.container.style.marginBottom = "-" + this.navHeight + "px";
      };

      _proto.updateOverlayElement = function updateOverlayElement() {
        if (!this.overlayElement) {
          return;
        }

        this.overlayElement.style.setProperty('padding-top', this.navHeight + "px", 'important');
      };

      _proto.setResizeEvent = function setResizeEvent() {
        var _this = this;

        $(window).on(Event.RESIZE + " " + Event.ALERT_CLOSE, function () {
          if (!_this.ticking) {
            window.requestAnimationFrame(function () {
              _this.updateValues();

              _this.ticking = false;
            });
            _this.ticking = true;
          }
        });
      };

      _proto.setToggleEvent = function setToggleEvent() {
        var _this2 = this;

        $(this.container).on(Event.TOGGLE_SHOW + " " + Event.TOGGLE_HIDE, function (evt) {
          var action = evt.type + "." + evt.namespace === Event.TOGGLE_SHOW ? 'add' : 'remove';

          _this2.element.classList[action](ClassName.TOGGLED_SHOW);
        });
      };

      _proto.setImageLoadEvent = function setImageLoadEvent() {
        var _this3 = this;

        var images = this.container.querySelectorAll(Selector.IMAGE);
        mrUtil.forEach(images, function (index, image) {
          image.addEventListener(Event.IMAGE_LOAD, function () {
            return _this3.updateValues();
          });
        });
      };

      OverlayNav.getContainerElement = function getContainerElement() {
        if (!this.container) {
          this.container = document.querySelector(Selector.CONTAINER);
        }

        return this.container;
      };

      OverlayNav.getFirstOverlayElement = function getFirstOverlayElement() {
        return document.querySelector(Selector.OVERLAY_SECTION + ":not(" + Selector.NAV + ")");
      };

      OverlayNav.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachoverlayNav() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new OverlayNav(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(OverlayNav, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return OverlayNav;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(document).ready(function () {
      var overlayNavElements = $.makeArray($(Selector.OVERLAY_NAV));
      /* eslint-disable no-plusplus */

      for (var i = overlayNavElements.length; i--;) {
        var $overlayNav = $(overlayNavElements[i]);
        OverlayNav.jQueryInterface.call($overlayNav, $overlayNav.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = OverlayNav.jQueryInterface;
    $.fn[NAME].Constructor = OverlayNav;

    $.fn[NAME].noConflict = function overlayNavNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return OverlayNav.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return OverlayNav;
  }(jQuery$1);

  //
  Plyr.setup('[data-provider],.plyr');

  //

  (function ($) {
    $(document).on('hide.bs.tab', function (evt) {
      $($(evt.target).attr('href')).find('[data-toggle="popover"]').popover('hide');
    });
    $(document).on('hide.bs.collapse', function (evt) {
      $(evt.target).find('[data-toggle="popover"]').popover('hide');
    });
  })(jQuery$1);

  //
  Prism.highlightAll();

  var mrReadingPosition = function ($) {
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */
    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrReadingPosition requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrReadingPosition';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.readingPosition';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Css = {
      HIDDEN: 'reading-position-hidden'
    };
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      RESIZE: 'resize',
      SCROLL: 'scroll'
    };
    var Selector = {
      PROGRESS: 'progress.reading-position',
      DATA_ATTR: 'reading-position',
      DATA_READING_POSITION: '[data-reading-position]',
      VALUE: 'value',
      MAX: 'max'
    };
    var Value = {
      BAR_MAX: 100,
      BAR_MIN: 0
    };
    var progressBars = document.querySelectorAll(Selector.PROGRESS); // const $window = $(window);
    // const $document = $(document);

    var getWindowHeight = function getWindowHeight() {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    var getScrollPosition = function getScrollPosition() {
      return (document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop) || 0;
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */


    var ReadingPosition =
    /*#__PURE__*/
    function () {
      function ReadingPosition(element) {
        this.progressBars = progressBars;
        this.element = element;
        this.top = 0;
        this.bottom = 0;
        this.height = 0;
        this.scrollLength = 0;
        this.articlePositionPercent = 0;
        this.ticking = false;
        this.inView = false;
        this.reading = false;
        this.initWatcher(element);
        this.initBarValues();
        this.setValue(getScrollPosition());
        this.setScrollEvent();
        this.setResizeEvent();
      } // get VERSION


      var _proto = ReadingPosition.prototype;

      _proto.initWatcher = function initWatcher(element) {
        var _this = this;

        var watcher = scrollMonitor.create(element);
        this.watcher = watcher;
        this.recalculateAll();
        watcher.stateChange(function () {
          _this.inView = watcher.isInViewport;
          _this.reading = watcher.isAboveViewport && watcher.isFullyInViewport;

          _this.toggleBars(_this.reading);
        });
      };

      _proto.initBarValues = function initBarValues() {
        mrUtil.forEach(this.progressBars, function (index, bar) {
          bar.setAttribute(Selector.MAX, Value.BAR_MAX);
        });
      };

      _proto.setValue = function setValue(scrollPosition) {
        var _this2 = this;

        this.recalculatePercentage(scrollPosition);
        mrUtil.forEach(this.progressBars, function (index, bar) {
          bar.setAttribute(Selector.VALUE, _this2.articlePositionPercent);
        });
      };

      _proto.toggleBars = function toggleBars(show) {
        mrUtil.forEach(this.progressBars, function (index, bar) {
          if (show) {
            bar.classList.remove(Css.HIDDEN);
          } else {
            bar.classList.add(Css.HIDDEN);
          }
        });
      };

      _proto.setScrollEvent = function setScrollEvent() {
        var _this3 = this;

        window.addEventListener(Event.SCROLL, function () {
          var scrollPosition = getScrollPosition();

          if (!_this3.ticking && _this3.inView && _this3.reading) {
            window.requestAnimationFrame(function () {
              _this3.setValue(scrollPosition);

              _this3.ticking = false;
            });
            _this3.ticking = true;
          }
        });
      };

      _proto.setResizeEvent = function setResizeEvent() {
        var _this4 = this;

        window.addEventListener(Event.RESIZE, function () {
          return _this4.recalculateAll();
        });
      };

      _proto.recalculateAll = function recalculateAll() {
        this.watcher.recalculateLocation();
        this.top = this.watcher.top;
        this.bottom = this.watcher.bottom;
        this.height = this.watcher.height; // Scroll Length is the scrolling viewable area of the article
        // from top of article = top of window to bottom of article = bottom of window.

        this.scrollLength = this.height - getWindowHeight(); // Position percent is how far the view is through the scrollable length in percentage.

        this.recalculatePercentage(getScrollPosition());
      };

      _proto.recalculatePercentage = function recalculatePercentage(scrollPosition) {
        this.articlePositionPercent = !scrollPosition ? 0 : (scrollPosition - this.top) / this.scrollLength * 100;
      };

      ReadingPosition.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachReadingPosition() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new ReadingPosition(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(ReadingPosition, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return ReadingPosition;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      // Proceed to initialise only if a progress bar is found in the document
      if (progressBars.length === 0) {
        return;
      } // Gather articles and loop over, initialising ReadingPosition instance


      var readingPositionElements = $.makeArray($(Selector.DATA_READING_POSITION));
      /* eslint-disable no-plusplus */

      for (var i = readingPositionElements.length; i--;) {
        var $readingPosition = $(readingPositionElements[i]);
        ReadingPosition.jQueryInterface.call($readingPosition, $readingPosition.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = ReadingPosition.jQueryInterface;
    $.fn[NAME].Constructor = ReadingPosition;

    $.fn[NAME].noConflict = function ReadingPositionNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ReadingPosition.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return ReadingPosition;
  }(jQuery);

  //

  var mrSmoothScroll = function ($) {
    var smoothScroll = new SmoothScroll('a[data-smooth-scroll]', {
      offset: $('body').attr('data-smooth-scroll-offset') || 0
    });
    return smoothScroll;
  }(jQuery$1);

  var mrSticky = function ($) {
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */
    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrSticky requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrSticky';
    var VERSION = '1.3.0';
    var DATA_KEY = 'mr.sticky';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var NO_OFFSET = 0;
    var ClassName = {
      FIXED_TOP: 'position-fixed',
      ABSOLUTE_BOTTOM: 'sticky-bottom',
      FIXED_BOTTOM: 'sticky-viewport-bottom',
      SCROLLED: 'scrolled'
    };
    var Css = {
      HEIGHT: 'min-height',
      WIDTH: 'max-width',
      SPACE_TOP: 'top',
      SPACE_BOTTOM: 'bottom'
    };
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      WINDOW_RESIZE: 'resize',
      ALERT_CLOSED: 'closed.bs.alert'
    };
    var Options = {
      BELOW_NAV: 'below-nav',
      TOP: 'top',
      BOTTOM: 'bottom'
    };
    var Selector = {
      DATA_ATTR: 'sticky',
      DATA_STICKY: '[data-sticky]',
      NAV_STICKY: 'body > div.navbar-container [data-sticky="top"]',
      ALERT: '.alert-dismissible'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sticky =
    /*#__PURE__*/
    function () {
      function Sticky(element) {
        var $element = $(element);
        var stickyData = $element.data(Selector.DATA_ATTR);
        var stickyUntil = $element.closest('section') || null;
        this.element = element;
        this.stickBelowNav = stickyData === Options.BELOW_NAV;
        this.stickBottom = stickyData === Options.BOTTOM;
        this.stickyUntil = stickyUntil;
        this.updateNavProperties();
        this.isNavElement = $element.is(this.navElement);
        this.initWatcher($element);
        this.updateCss();
        this.setResizeEvent(); // Run a calculation immediately to show sticky elements if page starts
        // at a half-scrolled position

        this.onWatcherChange($element);
        this.ticking = false; // for debouncing resize event with RequestAnimationFrame
      } // getters


      var _proto = Sticky.prototype;

      _proto.initWatcher = function initWatcher(element) {
        var _this = this;

        var $element = $(element);
        var notNavElement = !this.isNavElement;
        var offset = this.stickBelowNav && this.navIsSticky && notNavElement ? {
          top: this.navHeight
        } : NO_OFFSET;
        offset = this.stickBottom && notNavElement ? {
          bottom: -$element.outerHeight
        } : offset;
        var watcher = scrollMonitor.create(element, offset); // ensure that we're always watching the place the element originally was

        watcher.lock();
        var untilWatcher = this.stickyUntil !== null ? scrollMonitor.create(this.stickyUntil, {
          bottom: -(watcher.height + offset.top)
        }) : null;
        this.watcher = watcher;
        this.untilWatcher = untilWatcher;
        this.navHeight = this.navHeight; // For navs that start at top, stick them immediately to avoid a jump

        if (this.isNavElement && watcher.top === 0 && !this.navIsAbsolute) {
          $element.addClass(ClassName.FIXED_TOP);
        }

        watcher.stateChange(function () {
          _this.onWatcherChange($element);
        });

        if (untilWatcher !== null) {
          untilWatcher.exitViewport(function () {
            // If the element is in a section, it will scroll up with the section
            $element.addClass(ClassName.ABSOLUTE_BOTTOM);
          });
          untilWatcher.enterViewport(function () {
            $element.removeClass(ClassName.ABSOLUTE_BOTTOM);
          });
        }
      };

      _proto.onWatcherChange = function onWatcherChange($element) {
        // Add fixed when element leaves via top of viewport or if nav is sitting at top
        $element.toggleClass(ClassName.FIXED_TOP, this.watcher.isAboveViewport || !this.navIsAbsolute && !this.stickBottom && this.isNavElement && this.watcher.top === 0); // Used to apply styles to the nav based on "scrolled" class
        // independedly of position-fixed because that class is used for more practical reasons
        // such as avoiding a jump on first scroll etc.

        $element.toggleClass(ClassName.SCROLLED, this.watcher.isAboveViewport && this.isNavElement && !this.stickBottom); // Fix to bottom when element enters via bottom of viewport and has data-sticky="bottom"

        $element.toggleClass(ClassName.FIXED_BOTTOM, (this.watcher.isFullyInViewport || this.watcher.isAboveViewport) && this.stickBottom);

        if (!this.stickBottom) {
          $element.css(Css.SPACE_TOP, this.watcher.isAboveViewport && this.navIsSticky && this.stickBelowNav ? this.navHeight : NO_OFFSET);
        }
      };

      _proto.setResizeEvent = function setResizeEvent() {
        var _this2 = this;

        // Closing any alerts above the nav will mean we need to recalculate position.
        $(Selector.ALERT).on(Event.ALERT_CLOSED, function () {
          // An alert above the nav will cause odd sticky behaviour if
          // the alert is dismissed and nav position is not recalculated,
          // as scrollMonitor has locked the position of the watcher.
          // Unlock and recalculate if the nav is in the viewport during alert close event.
          if (_this2.watcher.isInViewport) {
            _this2.watcher.unlock();

            _this2.watcher.recalculateLocation();

            _this2.watcher.lock();
          }

          _this2.onResize();
        });
        $(window).on(Event.WINDOW_RESIZE, function () {
          _this2.onResize();
        });
      };

      _proto.onResize = function onResize() {
        var _this3 = this;

        if (!this.ticking) {
          window.requestAnimationFrame(function () {
            _this3.updateCss();

            _this3.ticking = false;
          });
          this.ticking = true;
        }
      };

      _proto.updateCss = function updateCss() {
        var $element = $(this.element); // Fix width by getting parent's width to avoid element spilling out when pos-fixed

        $element.css(Css.WIDTH, $element.parent().width());
        this.updateNavProperties();
        var elemHeight = $element.outerHeight();
        var notNavElement = !this.isNavElement; // Set a min-height to prevent "jumping" when sticking to top
        // but not applied to the nav element itself unless it is overlay (absolute) nav

        if (!this.navIsAbsolute && this.isNavElement || notNavElement) {
          $element.parent().css(Css.HEIGHT, elemHeight);
        }

        if (this.navIsSticky && notNavElement) {
          $element.css(Css.HEIGHT, elemHeight);
        }
      };

      _proto.updateNavProperties = function updateNavProperties() {
        var $navElement = this.navElement || $(Selector.NAV_STICKY).first();
        this.navElement = $navElement;
        this.navHeight = $navElement.outerHeight();
        this.navIsAbsolute = $navElement.css('position') === 'absolute';
        this.navIsSticky = $navElement.length > 0;
      };

      Sticky.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachSticky() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sticky(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sticky, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sticky;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var stickyElements = $.makeArray($(Selector.DATA_STICKY));
      /* eslint-disable no-plusplus */

      for (var i = stickyElements.length; i--;) {
        var $sticky = $(stickyElements[i]);
        Sticky.jQueryInterface.call($sticky, $sticky.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Sticky.jQueryInterface;
    $.fn[NAME].Constructor = Sticky;

    $.fn[NAME].noConflict = function StickyNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sticky.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return Sticky;
  }(jQuery$1);

  var mrTwitterFetcher = function ($) {
    /**
     * Check for twitterFetcher dependency
     * twitterFetcher - https://github.com/jasonmayes/Twitter-Post-Fetcher
     */
    if (typeof twitterFetcher === 'undefined') {
      throw new Error('mrTwitterFetcher requires twitterFetcher.js (https://github.com/jasonmayes/Twitter-Post-Fetcher)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrTwitterFetcher';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.twitterFetcher';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      RESIZE: "resize" + EVENT_KEY,
      READY: "ready" + EVENT_KEY,
      APPEND: "tweetAppended" + EVENT_KEY
    };
    var Selector = {
      DATA_ATTR: 'twitter-fetcher',
      DATA_TWITTER_FETCHER: '[data-twitter-fetcher]',
      DATA_TWITTER: 'data-twitter',
      USER: '.user',
      TWEET: '.tweet',
      TIME_POSTED: '.timePosted',
      INTERACT: '.interact'
    };
    var Defaults = {
      USERNAME: 'twitter',
      MAX_TWEETS: 6
    };
    var Options = {
      USERNAME: 'username',
      MAX_TWEETS: 'max-tweets',
      FLICKITY: 'flickity',
      SLIDER: 'twitterFlickity',
      ISOTOPE: 'isotope'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var TwitterFetcher =
    /*#__PURE__*/
    function () {
      function TwitterFetcher(element) {
        var $element = $(element);
        this.element = element;
        this.element.id = "tweets-" + new Date().getTime();
        this.username = $element.data(Options.USERNAME).replace('@', '') || Defaults.USERNAME;
        this.maxTweets = parseInt($element.data(Options.MAX_TWEETS), 10) || Defaults.MAX_TWEETS; // Check if data-twitter-slider is options object, plain attribute or not present.

        this.slider = this.element.getAttribute(Selector.DATA_TWITTER + "-" + Options.FLICKITY) !== null;
        this.slider = this.slider && typeof $element.data(Options.SLIDER) === 'object' ? $element.data(Options.SLIDER) : this.slider; // Check if data-twitter-isotope is present.

        this.isotope = this.element.getAttribute(Selector.DATA_TWITTER + "-" + Options.ISOTOPE) !== null;
        this.initTwitterFeed();
      } // getters


      var _proto = TwitterFetcher.prototype;

      _proto.initTwitterFeed = function initTwitterFeed() {
        var _this = this;

        this.config = {
          profile: {
            screenName: this.username
          },
          domId: this.element.id,
          maxTweets: this.maxTweets,
          enableLinks: true,
          showUser: true,
          showTime: true,
          dateFunction: '',
          showRetweet: false,
          customCallback: function customCallback(tweets) {
            var $element = $(_this.element);
            var html;
            var template = $element.children().first().detach();
            var x = tweets.length;
            var n = 0;

            while (n < x) {
              var tweetContent = $('<div>').append($(tweets[n]));
              var templateClone = template.clone();
              templateClone.find(Selector.TWEET).html(tweetContent.find(Selector.TWEET).html());
              templateClone.find(Selector.USER).html(tweetContent.find(Selector.USER).html());
              templateClone.find(Selector.TIME_POSTED).html(tweetContent.find(Selector.TIME_POSTED).html());
              templateClone.find(Selector.INTERACT).html(tweetContent.find(Selector.INTERACT).html());
              $element.append(templateClone);
              n += 1; // Fire an event when each tweet is added to the div

              var appendEvent = $.Event(Event.APPEND);
              appendEvent.appendedElement = templateClone;
              appendEvent.mrTwitterFetcher = _this;
              $(_this.element).trigger(appendEvent);
            }

            if (_this.slider === true || typeof _this.slider === 'object') {
              // Check for Flickity dependency
              if (typeof Flickity === 'undefined') {
                throw new Error('mrTwitterFetcher requires flickity.js (https://github.com/metafizzy/flickity)');
              } else {
                $element.data('flickity', new Flickity(_this.element, _this.slider));
              }
            } else if (_this.isotope === true) {
              // Check for Isotope dependency
              if (typeof Isotope === 'undefined') {
                throw new Error('mrTwitterFetcher requires isotope.js (https://github.com/metafizzy/isotope)');
              } else {
                $(_this.element).mrIsotope();
              }
            } // Fire an event for tweets ready


            var readyEvent = $.Event(Event.READY);
            readyEvent.mrTwitterFetcher = _this;
            $(_this.element).trigger(readyEvent);
            return html;
          }
        };
        twitterFetcher.fetch(this.config);
      };

      TwitterFetcher.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachTwitterFetcher() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new TwitterFetcher(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(TwitterFetcher, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return TwitterFetcher;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var twitterFetcherElements = $.makeArray($(Selector.DATA_TWITTER_FETCHER));
      /* eslint-disable no-plusplus */

      for (var i = twitterFetcherElements.length; i--;) {
        var $twitterFetcher = $(twitterFetcherElements[i]);
        TwitterFetcher.jQueryInterface.call($twitterFetcher, $twitterFetcher.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = TwitterFetcher.jQueryInterface;
    $.fn[NAME].Constructor = TwitterFetcher;

    $.fn[NAME].noConflict = function TwitterFetcherNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TwitterFetcher.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return TwitterFetcher;
  }(jQuery$1);

  var mrTypedText = function ($) {
    /**
     * Check for typedText dependency
     * typedText - https://github.com/mattboldt/typed.js/
     */
    if (typeof Typed !== 'function') {
      throw new Error('mrTypedText requires typed.js (https://github.com/mattboldt/typed.js/)');
    }
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */


    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrTypedText requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'mrTypedText';
    var VERSION = '1.0.0';
    var DATA_KEY = 'mr.typedText';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var Selector = {
      TYPED_TEXT: '[data-typed-text]'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var TypedText =
    /*#__PURE__*/
    function () {
      function TypedText(element) {
        // The current map element
        this.element = element;
        var $element = $(element);
        this.Typed = new Typed(this.element, $element.data());
        this.initWatcher(element);
      } // getters


      TypedText.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachTypedText() {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new TypedText(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      var _proto = TypedText.prototype;

      _proto.initWatcher = function initWatcher(element) {
        var _this = this;

        var watcher = scrollMonitor.create(element);
        watcher.stateChange(function () {
          // Stop the Typed animation when the element leaves the viewport
          if (watcher.isInViewport) {
            _this.Typed.start();
          } else {
            _this.Typed.stop();
          }
        });
      } // END Class definition
      ;

      _createClass(TypedText, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return TypedText;
    }();
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var cdownsOnPage = $.makeArray($(Selector.TYPED_TEXT));
      /* eslint-disable no-plusplus */

      for (var i = cdownsOnPage.length; i--;) {
        var $typedText = $(cdownsOnPage[i]);
        TypedText.jQueryInterface.call($typedText, $typedText.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = TypedText.jQueryInterface;
    $.fn[NAME].Constructor = TypedText;

    $.fn[NAME].noConflict = function TypedTextNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TypedText.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */


    return TypedText;
  }(jQuery$1);

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Medium Rare JavaScript requires jQuery. jQuery must be included before theme.js.');
    }
  })();

  exports.mrCountdown = mrCountdown;
  exports.mrCountup = mrCountup;
  exports.mrDropdownGrid = mrDropdownGrid;
  exports.mrFormEmail = mrFormEmail;
  exports.mrIonRangeSlider = mrIonRangeSlider;
  exports.mrIsotope = mrIsotope;
  exports.mrMaps = mrMaps;
  exports.mrMapsStyle = mrMapStyle;
  exports.mrOverlayNav = mrOverlayNav;
  exports.mrReadingPosition = mrReadingPosition;
  exports.mrSmoothScroll = mrSmoothScroll;
  exports.mrSticky = mrSticky;
  exports.mrTwitterFetcher = mrTwitterFetcher;
  exports.mrTypedText = mrTypedText;
  exports.mrUtil = mrUtil;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=theme.js.map
