# Scan For Attr

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/scan-for-attr.svg)](https://greenkeeper.io/)

This finds the top level attributes of a given segments of a dom tree.

## Usage

```javascript
var scan = require('scan-for-attr');

scan('data-block', document.body);
// return an array or null depending if any are found
```

This will find the first dom node with the attribute 'data-block'. The idea is that you may want to stop there and do something with that node. This intended to be used recursively so if you need lower level attribute just pass the DOM node into the function again and it will scan for more.

## Building

The actual development file is in `src/index.js` it is then transcompiled to es5. You can do this by running `npm run dist`

## Examples

To get a fresh build of the examples run `npm run exmaples`. Then just open up the index.html in the directory.
