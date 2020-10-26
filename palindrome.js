// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;


  //Returns content processed for a palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return processedContent === this.processedContent().reverse();
  }
}

