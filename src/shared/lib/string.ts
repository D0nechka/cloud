export const countCharacters = (value: string) => {
  const characterCount = value.replace(/\s/g, "").length;
  return characterCount;
};