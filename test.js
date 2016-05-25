/**
 * Created by yeliex on 16/5/25.
 */
const url = require("./index");
const str = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

console.log(str.parseUrl());
console.log(url(str).params);