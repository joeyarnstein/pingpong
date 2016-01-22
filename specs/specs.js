describe("pingpong", function() {
  it("will return an array count from 1 up to a number passed through the argument", function(){
    expect(pingpong(2)).to.eql([1,2])
  });

  it("will return a string 'ping' for the number 3 when countTo is more than or equal to 3", function() {
    expect(pingpong(4)).to.eql([1, 2, 'ping', 4])
  });

  it("will return a string 'pong' for the number 5", function(){
    expect(pingpong(5)).to.eql([1, 2, 'ping', 4, 'pong'])
  });

  it("will return a string 'ping' for (the multiples of 3) 6, 9", function(){
    expect(pingpong(9)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping'])
  });

  it("will return a string 'pong' for the number 10", function(){
    expect(pingpong(10)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong'])
  });

  it("will, up to the number 15, return a string 'ping' for all multples of 3, pong for all multiples of 5, and return 'pingpong' for the number 15", function(){
    expect(pingpong(15)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong'])
  });

  it("will return 'pingpong' for the all multiples of 15", function(){
    expect(pingpong(45)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong", 16, 17, "ping", 19, "pong", "ping", 22, 23, "ping", "pong", 26, "ping", 28, 29, "pingpong", 31, 32, "ping", 34, "pong", "ping", 37, 38, "ping", "pong", 41, "ping", 43, 44, "pingpong"])
  });
});
