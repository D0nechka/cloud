import type { FC } from "react";
import type { IconPropsSquare } from "src/shared/types/icons";

export const DotIcon: FC<IconPropsSquare> = ({
  size = 16,
  className
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="-6.10352e-05" width={size} height={size} rx="8" fill="#A6A6A6"/>
  </svg>
);