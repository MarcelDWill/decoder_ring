// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
 // Define the standard alphabet
 const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // Validate the alphabet
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    // Create a cipher object for encoding/decoding
    const cipher = {};
    if (encode) {
      for (let i = 0; i < 26; i++) {
        cipher[standardAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }

    // Encode/decode the input string
    let result = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter] || letter; // Return original letter if not found
    });

    return result.join("");
  }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
