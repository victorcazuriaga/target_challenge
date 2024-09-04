// The function receives a string and returns the number of times the letter 'a' appears in it.
// regex is used to match the letter 'a' in any case.
const countLetterA = (string) => {
    const regex = /[aáàâäãåæAÁÀÂÄÃÅÆ]/g;
    const matches = string.match(regex); 
    const count =  matches ? matches.length : 0;  // if there are no matches, return 0
      
    return `A letra 'a' aparece ${count} vezes na string`;  
  };  
  
module.exports = {countLetterA};  