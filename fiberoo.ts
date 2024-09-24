function fib() {
  const fibArray:number[] = [0, 1];
  for (let i = 2; i < 50; i++) {
    let fibNew: number = 0;
    fibNew = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(fibNew);
  }
}

console.log(fib);
