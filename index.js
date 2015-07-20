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
