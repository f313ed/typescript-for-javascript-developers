export {};

// 例外 never 呼び元に戻ってこない
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}



let foo: void  = undefined;
let bar: never = error('only me');
