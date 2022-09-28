const possibleBonus = (a, b) => {
  for (let i = 1; i <= 6; i++) {
    a += 1;
    if (a == b) {
      return true
    }
  }
  return false
};

console.log(possibleBonus(3, 7));
console.log(possibleBonus(5, 3));
console.log(possibleBonus(1, 9));