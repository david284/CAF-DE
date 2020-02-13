describe("test cbus", function() {

  beforeEach(function() {
  });

  it("should return CAN", function() {
    expect(cbusProtocol(1)).toEqual("CAN");
  });

});
