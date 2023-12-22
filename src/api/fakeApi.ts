export const makeOperation = (
  value: number,
  additional: number,
): Promise<number> =>
  new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(value + additional);
    }, 1000);
  });

  export const returnInput = (
    input: number,
  ): Promise<number> =>
    new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(input);
      }, 100);
    });