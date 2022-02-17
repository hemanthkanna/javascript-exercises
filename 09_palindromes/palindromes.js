const palindromes = function (string) {
let  arraySplit = string.split('');
console.log(arraySplit);
let  arrayReverse = arraySplit.reverse();
console.log(arrayReverse);
let reversedString = arrayReverse.join('');
console.log(reversedString);

if (string === reversedString) {
  return true;
}
};

// Do not edit below this line
module.exports = palindromes;
