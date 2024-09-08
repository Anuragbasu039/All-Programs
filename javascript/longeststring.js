function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let substring = "";
  
    for (let char of s) {
      const index = substring.indexOf(char);
      if (index !== -1) {
        substring = substring.slice(index + 1);
      }
      substring += char;
      maxLength = Math.max(maxLength, substring.length);
    }
  
    return maxLength;
  }
  
  // Test cases
  console.log(lengthOfLongestSubstring("aaabacda")); // Output: 4
  console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
  console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 
  

 /*  function longestsubstring(s) {
    let maxLength = 0;
    let start = 0; 
    const charIndexMap = {}; 
  
    for (let end = 0; end < s.length; end++) {
      const char = s[end];
  
      
      if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
        start = charIndexMap[char] + 1;
      }
  
      charIndexMap[char] = end;
  
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  // Test cases
  console.log(longestsubstring("abcabcbb")); // Output: 3
  console.log(longestsubstring("bbbbb"));    // Output: 1 */
/*   console.log(longestsubstring("pwwkew"));   // Output: 3
   */