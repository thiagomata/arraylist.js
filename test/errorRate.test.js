const List = require('../index');
describe('errorRate', () => {

  it('error rate should be zero to identical lists', () => {
    let from = new List(1,2,5,3,7,3,1,7,4,2,6,4);
    let to   = from.copy();
    expect(from.errorRate(to).sum()).toBe(0);
  });

  it('error rate should be the squared diff', () => {
    let from = new List(1,2,5,3,7,3,1,7,4,2,6,4);
    let to   = new List(1,1,1,1,1,1,1,1,1,1,1,1);
    var result = new List();
    for( var i = 0; i < from.length; i++ ) {
      var x = from[i];
      var y = to[i];
      var v = x - y;
      result.push( v * v );
    }
    var sum = result.sum();
    var num = Math.sqrt( sum );
    expect(Math.sqrt(from.errorRate(to).sum())).toBe(num);
  });

  it('error rate using group functions', () => {
    let from = new List(1,2,5,3,7,3,1,7,4,2,6,4);
    let to   = new List(1,1,1,1,1,1,1,1,1,1,1,1);

    expect(
      from.errorRate(to).equals(
        from.diff( to ).squared()
      )
    ).toBe(
      true
    );
  });

});
