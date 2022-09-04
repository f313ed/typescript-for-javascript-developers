export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.May);
console.log(Months[4], Months.December);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#FFFFFF',
  GREEN = '#000800',
  BLUE = '#0000FF',
  BLACK = '#000000'
}
let green = COLORS.GREEN


enum COLORS {
  YELLOW = '#FFFF00'
}
console.log(
  COLORS.YELLOW
);