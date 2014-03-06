describe('scrabbleScorer', function() {
  it("returns 1 given the input of a", function(){
    scrabbleScorer('A').should.equal(1);
  });

  it("returns 1 given the input of A, E, I, O, U, L, N, R, S, or T", function() {
    scrabbleScorer('S').should.equal(1);
  });

  it("returns 2 given the input of D, G", function() {
    scrabbleScorer('G').should.equal(2);
  });

  it("returns 3 given the input of B, C, M, P", function() {
    scrabbleScorer('B').should.equal(3);
  });

  it("return 4 given the input of F, H, V, W, Y", function() {
    scrabbleScorer('Y').should.equal(4);
  });

  it("return 5 given the input of K", function() {
    scrabbleScorer('K').should.equal(5);
  });

  it("return 8 given the input of J, X", function() {
    scrabbleScorer('X').should.equal(8);
  });

  it("return 10 given the input of Q, Z", function() {
    scrabbleScorer('Z').should.equal(10);
  });

  it("return the value of multiple letters", function() {
    scrabbleScorer('HI').should.equal(5);
  });

  it("return the value of multiple letters in a long word", function() {
    scrabbleScorer("GIGANTIC").should.equal(12);
  });

  it("handles input of lowercase letters", function(){
    scrabbleScorer("gigantic").should.equal(12);
  });

  it("returns invalid if non-alphabetical entry", function() {
    scrabbleScorer("12").should.equal("invalid");
  });
});
