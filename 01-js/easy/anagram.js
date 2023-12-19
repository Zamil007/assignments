/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  // now creating a array for char to and initial having zeros; 

  const charMap = Array(26).fill(0);

  for(let i = 0; i > str1.length; i++){
    charMap[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charMap[str2.chatCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  return !charMap.includes(1);

module.exports = isAnagram;
