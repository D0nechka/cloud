
const funcReplaceForMaskPhone = (value: string): RegExpMatchArray | null => 
  value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

export const getPhoneMask = (value: string): string => {
  let x: RegExpMatchArray | null = null;

  if(value.length > 1) {
    const filterValue = value.split("+7");
    filterValue.splice(0, 1);

    x = funcReplaceForMaskPhone(filterValue.join(""));
  } else {
    x = funcReplaceForMaskPhone(value);
  }

  if(x) {
    if (value.length <= 7) {
      return `+7 (${x[1]}`;
    } else if (x[1].length && !x[2].length) {
      return `+7 (${x[1]})`;
    } else if (x[2].length && !x[3].length) {
      return `+7 (${x[1]}) ${x[2]}`;
    } else if (x[3].length && !x[4].length) {
      return `+7 (${x[1]}) ${x[2]}-${x[3]}`;
    } else {
      return `+7 (${x[1]}) ${x[2]}-${x[3]}-${x[4]}`;
    }
  } else {
    return "";
  }
};