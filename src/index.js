'use strict';

/*
  scanForAttr
  ==============
  a simple utility to scan a dom for a certain selector and stops at top level ones;
*/

const scanForAttr =
module.exports = (selector = '', elem = document.body) => {
  const elems = [];
  if (elem.children) {
    for (let i = 0; i < elem.children.length; i += 1) {
      const el = elem.children[i];
      const attr = el.getAttribute(selector);

      if (attr) {
        elems.push(el);
      } else {
        const _elems = scanForAttr(selector, el);
        if (_elems) {
          for (let i = 0; i < _elems.length; i += 1) {
            elems.push(_elems[i]);
          }
        }
      }
    }
  }
  return elems.length ? elems : null;
};
