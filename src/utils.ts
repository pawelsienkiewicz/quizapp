export const randomize = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
