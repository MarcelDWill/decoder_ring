// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
 
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // Check if the shift value is valid
    if (!isValidShift(shift)) return false;

    // Define the standard alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Helper function to check if the shift value is valid
    function isValidShift(shift) {
        return shift !== 0 && shift >= -25 && shift <= 25;
    }

    // Helper function to encode or decode characters
    const substituteChar = (char) => {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) return char;
        let shiftedIndex = index + (encode ? shift : -shift);
        if (shiftedIndex >= 26) shiftedIndex -= 26;
        if (shiftedIndex < 0) shiftedIndex += 26;
        return alphabet[shiftedIndex];
    };

    // Encode or decode the input string
    return input.split("").map(char => {
        return char.match(/[a-zA-Z]/) ? substituteChar(char) : char;
    }).join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
