# node.url

[![npm](https://img.shields.io/npm/v/node.url.svg?style=flat-square)](https://www.npmjs.com/package/node.url)

url paraser for javascript

## Installation
```
$ npm install node.url
```

## Usage
```javascript
const url = require("node.url");
const str = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

console.log(str.parseUrl());
console.log(url(str));

// Result:
{
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
  params: { 
    query: 'string'
  } 
 }
```