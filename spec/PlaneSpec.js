describe('Plane', function() {
  it('is flying when created', function(){
    var plane = new Plane();
    expect(plane.isFlying()).toBe(true);
  });

  it('can land', function() {
    var plane = new Plane();

    plane.land();

    expect(plane.isFlying()).toBe(false);

  });

  it('can take off', function() {
    var plane = new Plane();

    plane.land();
    plane.takeOff();

    expect(plane.isFlying()).toBe(true);
  });

  it('cannot take off if already flying', function() {
    var plane = new Plane();

    expect(function() {plane.takeOff() }).toThrow(new Error('you are already flying'));
  });

  it('cannot land unless it is flying', function() {
    var plane = new Plane();

    plane.land();
    expect(function() {plane.land() }).toThrow(new Error('you are already landed'));
  });


});

