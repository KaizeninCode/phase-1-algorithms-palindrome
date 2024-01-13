function isPalindrome(word) {
  // Write your algorithm here

  //remove non-alphanumeric characters and convert the string to lowercase
  word = word.replace(/\W/g, '').toLowerCase();

  //.split to split the string into its requisite individual characters
  //.reverse to reverse their order
  //.join to join them back into a string
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  a function isPalindrome that takes one argument which is a string
  should return true if the string is a palindrome and false otherwise

*/

/*
  Add written explanation of your solution here
  First, we remove any non-alphanumeric characters from the input string. This is necessary because palindromes ignore non-alphanumeric characters. This is done using the regular expression (regex) /\W/g to match all non-alphanumeric characters.
  After removing the non-alphanumeric characters, we convert the string to lowercase. This ensures that the function treats uppercase and lowercase letters as the same.
  Finally, we check if the string is the same when reversed. If it is, the function should return true. Otherwise, it should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
