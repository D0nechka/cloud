import type { FC } from "react";
import type { IconPropsSquare } from "src/shared/types/icons";

export const DotSelectIcon: FC<IconPropsSquare> = ({
  size = 16,
  className
}) => (
  <svg 
    width={size}
    height={size}
    viewBox="0 0 16 16" 
    fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width={size} height={size} rx="8" fill="#5558FA"/>
    <circle cx="8.00002" cy="7.9999" r="1.6" fill="white"/>
  </svg>
);