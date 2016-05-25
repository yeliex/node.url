/**
 * Created by yeliex on 16/5/25.
 */

const parserUrl = function (url) {
    var that = require("url").parse(url);
    that.params = (!that.query) ? {} : (function (query) {
        var list = {};
        for (let items of query) {
            item = items.split("=");
            list[item[0]] = item[1];
        }
        return list;
    }(that.query.split("&")));
    return that;
};

String.prototype.parseUrl = function () {
    return parserUrl(this.toString());
};

module.exports = parserUrl;