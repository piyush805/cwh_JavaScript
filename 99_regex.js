//Regular expression are a pattern to match character combinations in strings
//Go to regexr.com for learning and playing with regular expression

const sentence = "Harry is a very very nice awesome very nice boy"

console.log(sentence.replace("very","VERY"));//changes first occurence

const regex1 = /very/g//change occurence of "very" globally(all)
console.log(sentence.replace(regex1,"VERY"));

// dot (.) means any character expect new line 

//  w - word
//  d - digit
//  s - whitespace
//  ^ - negate 
//  [character set] - matching including that character set 
//  {} - capturing group 
//  */+/? - quanitfiers meaning 0 or more/1 or more/ 0 or 1
/{abc}*/ //= meaning 0 or more occurence of "abc"
//  {4} - exactly 4 occurence