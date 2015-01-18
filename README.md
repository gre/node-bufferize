# node-bufferize


## Example

```
var bufferize = require("bufferize");
var es = require("event-stream");
var fs = require("fs");

fs.createReadStream("dictionary.txt", { encoding: 'utf8' })
  .pipe(es.split())
  // A stream event per word in the dictionary
  .pipe(bufferize(512))
  // A stream event per 512 word in the dictionary (array of words)
  .pipe(...)
  ...
```
