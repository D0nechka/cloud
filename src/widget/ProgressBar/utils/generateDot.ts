import type { FC } from "react";
import { DotCheckIcon, DotSelectIcon, DotIcon } from "src/shared/ui";

export const generateDot = (currentNum: number, number: number): FC => {
  if(currentNum === number) {
    return DotSelectIcon;
  } else if (currentNum > number) {
    return DotCheckIcon;
  } else {
    return DotIcon;
  }
};