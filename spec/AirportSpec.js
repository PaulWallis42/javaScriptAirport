describe('Airport', function() {
  // beforeEach(){
  //   var luton = new Airport();
  // };

  it('has no planes when created', function() {
    var luton = new Airport();
    expect(luton.planes).toEqual([]);
  });

  it('can park a plane', function(){
    var luton = new Airport();
    luton.park('a plane');
    expect(luton.planes).toEqual(['a plane']);
  });

});