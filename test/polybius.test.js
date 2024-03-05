// Write your tests here!
const { polybius } = require('./polybiusModule'); // Import the polybius function from your module
const expect = require('chai').expect;

describe('Polybius Square', () => {
  it('Translates the letters i and j to 42 when encoding', () => {
    expect(polybius("message")).to.equal("23513434112251");
    expect(polybius("message")).to.equal(polybius("mes42age"));
  });

  it('Translates 42 to (i/j) when decoding', () => {
    expect(polybius("23513434112251", false)).to.equal("message");
    expect(polybius("23 51 34 34 11 22 51", false)).to.equal("me ss ag e");
  });

  it('Ignores capital letters', () => {
    expect(polybius("Message")).to.equal("23513434112251");
    expect(polybius("MESSAGE")).to.equal("23513434112251");
  });

  it('Maintains spaces in the message', () => {
    expect(polybius("message")).to.equal("23513434112251");
    expect(polybius("a message")).to.equal("1 23513434112251");
    expect(polybius("a message ")).to.equal("1 23513434112251 ");
  });
});
