var es = require("event-stream");

module.exports = function bufferize (size) {
  var buffer = [];
  return es.through(function (data) {
    buffer.push(data);
    if (buffer.length === size) {
      this.emit("data", buffer);
      buffer = [];
    }
  },
  function () {
    this.emit("data", buffer);
    this.emit('end');
  });
};
