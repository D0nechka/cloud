export const createNumberArray = (number: number) => {
  const numberArray = [];
  
  for (let i = 1; i <= number; i++) {
    numberArray.push(i);
  }
  
  return numberArray;
};