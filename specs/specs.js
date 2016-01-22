describe("pingpong", function() {
  it("will return an array count from 1 up to a number passed through the argument", function(){
    expect(pingpong(2)).to.eql([1,2])
  });

  it("will return a string 'ping' for the number 3 when countTo is more than or equal to 3", function() {
    expect(pingpong(4)).to.eql([1, 2, 'ping', 4])
  });

  it("will return a string 'ping' for (the multiple of 3) 6", function(){
    expect(pingpong(7)).to.eql([1, 2, 'ping', 4, 5, 'ping', 7])
  });
});
