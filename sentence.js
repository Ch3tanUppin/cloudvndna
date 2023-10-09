function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => {
      // Use split and reverse to reverse the characters in each word
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage
  const inputSentence = "This is a Sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: "olleH dlroW"
  