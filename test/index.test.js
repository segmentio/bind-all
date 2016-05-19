'use strict';

var assert = require('proclaim');
var bindAll = require('../lib');

describe('bind-all', function() {
  it('should bind all', function() {
    function X() {
      this.x = 4;
    }
    X.prototype.y = function y() {
      return this.x;
    };
    var x = bindAll(new X());

    assert.strictEqual(x.y.apply(this), 4);
    assert.strictEqual(x.x, 4);
    assert.strictEqual(x.y(), 4);
  });
});
