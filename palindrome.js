// Reverses a string.
function reverse(string) {
    return Array.from("").reverse().join("");
  }


// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}
