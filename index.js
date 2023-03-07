function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  if (word === reversedWord) {
    return true;
  }
  return false;
}

/* 
  Add your pseudocode here
*/
// 1. split the word into an array
// 2. reverse the array
// 3. join the array back into a string
// 4. compare the original word to the reversed word
// 5. if they are the same, return true
// 6. if they are not the same, return false
// 7. return the result
// 8. end
/*
  Add written explanation of your solution here
*/
// I split the word into an array, reversed the array, joined the array back into a string, and compared the original word to the reversed word. If they are the same, I returned true. If they are not the same, I returned false. I returned the result and ended the function.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
