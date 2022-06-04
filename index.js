function isPalindrome(word) {
  //Intake string as parameter and reverse string by each letter
  const reverseWord = word.split('').reverse().join('')
  //return string to see if equal to reversed string
  return reverseWord === word
}


/* 
  Add your pseudocode here
  //Create function of palindrome requiring a string
  //intake string, reverse by each letter
  //If word is the same backwards
  //return = true
  //Else
  // return = false
*/

/*
  Add written explanation of your solution here
*/

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
