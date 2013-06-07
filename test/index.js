
var bindAll = require('../');

describe('bind-all', function () {

  it('should bind all', function () {

    function X () {
      this.x = 4;
    }

    X.prototype.y = function () {
      return this.x;
    };

    var x = bindAll(new X());
    x.y.apply(this).should.eql(4);
    x.x.should.eql(4);
    x.y().should.eql(4);
  });
});