// Write your tests here!
const { caesar } = require('./caesarModule'); // Import the caesar function from your module
const expect = require('chai').expect;

describe('Caesar Cipher', () => {
  it('Returns false if the shift value is equal to 0, less than -25, greater than 25, or not present', () => {
    expect(caesar("message", 0)).to.be.false;
    expect(caesar("message", -30)).to.be.false;
    expect(caesar("message", 30)).to.be.false;
    expect(caesar("message")).to.be.false;
  });

  it('Ignores capital letters', () => {
    expect(caesar("aBcDe", 3)).to.equal("dEfGh");
  });

  it('Handles shifts that go past the end of the alphabet', () => {
    expect(caesar("xyz", 3)).to.equal("abc");
  });

  it('Maintains spaces and other nonalphabetic symbols in the message', () => {
    expect(caesar("hello world!", 5)).to.equal("mjqqt btwqi!");
    expect(caesar("abc123!@#", 2)).to.equal("cde123!@#");
  });

  it('Maintains spaces and other nonalphabetic symbols after decoding', () => {
    expect(caesar("mjqqt btwqi!", -5, false)).to.equal("hello world!");
    expect(caesar("cde123!@#", -2, false)).to.equal("abc123!@#");
  });
});