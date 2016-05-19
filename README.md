# bind-all

[![CircleCI](https://circleci.com/gh/segmentio/bind-all.svg?style=shield&circle-token=44eaf068f6a17612b53bb64b107cd3b7c1c776e6)](https://circleci.com/gh/segmentio/bind-all)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/bind-all/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/bind-all)

Create singletons from objects.

## Installation

```sh
$ npm install bind-all
```

## API

```js
function User() {
  this.x = 4;
}

User.prototype.y = function y() {
  return this.x;
};

var user = bindAll(new User());

user.y.apply(this); // 4
```
