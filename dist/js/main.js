(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ExcludeItem = _interopRequireDefault(require("./modules/ExcludeItem"));

var _NeonCarousel = _interopRequireDefault(require("./modules/NeonCarousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  new _ExcludeItem.default();
  new _NeonCarousel.default();
};

window.addEventListener('load', function () {
  new Main();
});

},{"./modules/ExcludeItem":2,"./modules/NeonCarousel":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ExcludeItem =
/*#__PURE__*/
function () {
  function ExcludeItem() {
    _classCallCheck(this, ExcludeItem);

    this.deleteButtons = document.querySelectorAll('.expenses-list__internal-list-remove-item');
    this.deleteItem();
  }

  _createClass(ExcludeItem, [{
    key: "deleteItem",
    value: function deleteItem() {
      Array.prototype.forEach.call(this.deleteButtons, function (element, index) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          element.parentNode.classList.add('remove');
          setTimeout(function () {
            element.parentNode.remove();
          }, 1000);
        });
      });
    }
  }]);

  return ExcludeItem;
}();

var _default = ExcludeItem;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NeonCarousel =
/*#__PURE__*/
function () {
  function NeonCarousel() {
    var _this = this;

    _classCallCheck(this, NeonCarousel);

    //vars
    this.resizeTimeout;
    this.currentSlide = 0;
    this.carouselItem = document.querySelectorAll('.expenses-list__list-item');
    this.indicatorItem = document.querySelectorAll('.expenses-list__slider-dot');
    this.sliderItemWidth = window.getComputedStyle(this.carouselItem[0]).width; //add events

    this.setCarouselWidth();
    this.dots(); //update the slider width on window resize

    window.addEventListener('resize', function () {
      window.clearTimeout(_this.resizeTimeout);
      _this.resizeTimeout = window.setTimeout(function () {
        _this.setCarouselWidth();

        _this.setCarouselMargin();
      }, 100);
    });
  }

  _createClass(NeonCarousel, [{
    key: "dots",
    value: function dots() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var indicator = _this2.indicatorItem[i];
        indicator.addEventListener('click', function () {
          Array.from(_this2.indicatorItem).map(function (i) {
            return i.classList.remove('active');
          });
          indicator.classList.add('active');
          _this2.currentSlide = i;

          _this2.setCarouselMargin();
        });
      };

      for (var i = 0; i < this.indicatorItem.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "setCarouselWidth",
    value: function setCarouselWidth() {
      document.querySelector('.expenses-list__list').style.width = window.getComputedStyle(this.carouselItem[0]).width.split('px')[0] * this.carouselItem.length + 'px';
    }
  }, {
    key: "setCarouselMargin",
    value: function setCarouselMargin() {
      document.querySelector('.expenses-list__list').style.marginLeft = '-' + window.getComputedStyle(this.carouselItem[0]).width.split('px')[0] * this.currentSlide + 'px';
    }
  }]);

  return NeonCarousel;
}();

var _default = NeonCarousel;
exports.default = _default;

},{}]},{},[1]);
