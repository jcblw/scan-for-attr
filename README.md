# Scan For Attr

This finds the top level attributes of a given segments of a dom tree.

## Usage

```javascript
var scan = require('scan-for-attr');

scan('data-block', document.body);
// return an array or null depending if any are found
```

This will find the first dom node with the attribute 'data-block'. The idea is that you may want to stop there and do something with that node. This intended to be used recursively so if you need lower level attribute just pass the DOM node into the function again and it will scan for more.
