
# bindAll

  Component for creating singletons from objects

## Installation

    $ component install segmentio/bind-all

## API

```javascript

function User () {
  this.x = 4;
}

User.prototype.y = function () {
  return this.x;
};


var user = bindAll(new User());

user.y.apply(this); // 4

```

## License

  MIT
