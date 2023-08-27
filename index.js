function isPalindrome(word) {
  // Write your algorithm here
  const string = word.toLowerCase();
  console.log(string);
  const arr1 = string.split("");
  console.log(arr1);
  const arr2 = [...arr1].reverse();
  const originalString = arr1.join("");
  const reverseString = arr2.join("");

  if (originalString === reverseString) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("MADAM"));

/* 
  Add your pseudocode here

 Get the word 
Split it 
Make a copy 
Reverse the copy 
Test if it is equal to the reverse copy return true 
Else false 

*/

/*
  Add written explanation of your solution here

  The function will take a word
The word needs to be tested if it equals its reversed it return true else it returns false

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
