const parserUrl = function (url) {
  const that = require("url").parse(url);
  that.params = (!that.query) ? {} : (function (query) {
    const list = {};
    query.forEach((items) => {
      const item = items.split("=");
      list[item[0]] = item[1];
    });
    return list;
  }(that.query.split("&")));
  return that;
};

String.prototype.parseUrl = function () {
  return parserUrl(this.toString());
};

if (typeof module === 'object') {
  module.exports = parserUrl;
}
