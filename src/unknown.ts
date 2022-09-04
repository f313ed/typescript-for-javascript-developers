export {};

const kausu = (): number => 43;

let numberAny: any = kausu();
let numberUnknown: unknown = kausu();

let sumAny = numberAny + 10;

// console.log(
//   typeof numberUnknown
// );
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

