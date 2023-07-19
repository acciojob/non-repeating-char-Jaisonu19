//your JS code here. If required.
function findFirstNonRepeatedCharacter(inputString) {
  const charCount = {};
  
  // Count occurrences of each character in the input string
  for (const char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (const char of inputString) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Input taken using prompt()
const userInput = prompt("Enter a string:");
const result = findFirstNonRepeatedCharacter(userInput);

if (result !== null) {
  alert("The first non-repeated character is: " + result);
} else {
  alert("No non-repeated character found in the input string.");
}
