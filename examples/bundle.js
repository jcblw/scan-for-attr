(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var scan = require('../index');
var baseEl = scan('data-block', document.body)[0];
var childrenEls = scan('data-block', baseEl);

appendText('Base Block', baseEl);

childrenEls.forEach(function(el) {
  appendText('Children Blocks', el);
});

function appendText(text, el) {
  var span = document.createElement('span');
  span.innerText = text;
  el.appendChild(span);
}

console.log(baseEl, childrenEls);

},{"../index":2}],2:[function(require,module,exports){
'use strict';

/*
  scanForAttr
  ==============
  a simple utility to scan a dom for a certain selector and stops at top level ones;
*/

var scanForAttr = module.exports = function () {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var elem = arguments.length <= 1 || arguments[1] === undefined ? document.body : arguments[1];

  var elems = [];
  if (elem.children) {
    for (var i = 0; i < elem.children.length; i += 1) {
      var el = elem.children[i];
      var attr = el.getAttribute(selector);

      if (attr) {
        elems.push(el);
      } else {
        var _elems = scanForAttr(selector, el);
        if (_elems) {
          for (var _i = 0; _i < _elems.length; _i += 1) {
            elems.push(_elems[_i]);
          }
        }
      }
    }
  }
  return elems.length ? elems : null;
};

},{}]},{},[1]);
