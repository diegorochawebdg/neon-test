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

    this.deleteItem = document.querySelectorAll('[data-js="delete"]');
    this.clickDelete();
  }

  _createClass(ExcludeItem, [{
    key: "clickDelete",
    value: function clickDelete() {
      var cardItem = document.querySelectorAll('[data-js="item"]');
      Array.prototype.forEach.call(this.deleteItem, function (element, index) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          Array.prototype.forEach.call(cardItem, function (el, ind) {
            if (index === ind) {
              el.classList.add('remove');
              setTimeout(function () {
                el.parentNode.removeChild(el);
              }, 500);
            }
          });
          var item = document.querySelectorAll('[data-js="item"]');

          if (item.length <= 1) {
            for (var i = 0; i < item.length; i++) {
              item[i].parentNode.classList.add('empty');
              item[i].previousSibling.classList.remove('icon--hide');
            }
          }
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
    _classCallCheck(this, NeonCarousel);

    this.indicatorItem = document.querySelectorAll('[data-js="dot"]');
    this.carouselItem = document.querySelectorAll('[data-js="slide"]');
    this.indicatorIndex();
  }

  _createClass(NeonCarousel, [{
    key: "hasClass",
    value: function hasClass(el, elClass) {
      return (' ' + el.className + ' ').indexOf(' ' + elClass + ' ') > -1;
    }
  }, {
    key: "getItemStyle",
    value: function getItemStyle() {
      for (var i = 0; i < this.carouselItem.length; i++) {
        if (this.hasClass(this.carouselItem[i], 'active')) return window.getComputedStyle(this.carouselItem[i], null);
      }
    }
  }, {
    key: "itemStyles",
    value: function itemStyles() {
      var itemMargin = parseInt(this.getItemStyle().marginLeft.replace('px', '')) + parseInt(this.getItemStyle().marginRight.replace('px', ''));
      var itemWidth = parseInt(this.getItemStyle().width.replace('px', ''));
      return itemMargin + itemWidth;
    }
  }, {
    key: "removeActive",
    value: function removeActive(el) {
      for (var i = 0; i < this.indicatorItem.length; i++) {
        el.classList.remove('active');
      }
    }
  }, {
    key: "indicatorIndex",
    value: function indicatorIndex() {
      var _this = this;

      var _loop = function _loop(i) {
        var card = _this.carouselItem[i];
        var indicator = _this.indicatorItem[i];
        indicator.addEventListener('click', function () {
          for (var _i = 0; _i < _this.indicatorItem.length; _i++) {
            _this.indicatorItem[_i].classList.remove('active');
          }

          if (i === parseInt(card.getAttribute('data-carousel'))) {
            indicator.classList.add('active');
            document.querySelector('.carousel__wrapper').style.marginLeft = '-' + _this.itemStyles() * i + 'px';
          }
        });
      };

      for (var i = 0; i < this.indicatorItem.length; i++) {
        _loop(i);
      }
    }
  }]);

  return NeonCarousel;
}();

var _default = NeonCarousel;
exports.default = _default;

},{}]},{},[1]);
