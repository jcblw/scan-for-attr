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
