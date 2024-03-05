// Write your tests here!
const { substitution } = require('./substitutionModule'); // Import the substitution function from your module
const expect = require('chai').expect;

describe('Substitution Cipher', () => {
  it('Returns false if the given alphabet is not exactly 26 characters long', () => {
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.not.equal(false);
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswa")).to.equal(false);
  });

  it('Correctly translates the given phrase based on the given alphabet', () => {
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("ykrrpik");
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq", false)).to.equal("ykrrpik");
  });

  it('Returns false if there are any duplicate characters in the given alphabet', () => {
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.not.equal(false);
    expect(substitution("message", "plmoknijbuhvyaq")).to.equal(false);
  });

  it('Maintains spaces in the message', () => {
    expect(substitution("a message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("p ykrrpik");
    expect(substitution("a message ", "plmoknijbuhvygctfxrdzeswaq")).to.equal("p ykrrpik ");
  });

  it('Ignores capital letters', () => {
    expect(substitution("Message", "plmoknijbuhvygctfxrdzeswaq")).to.equal("ykrrpik");
    expect(substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq")).to.equal("ykrrpik");
  });
});
