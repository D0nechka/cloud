import type { FC } from "react";
import type { IconPropsSquare } from "src/shared/types/icons";

export const ArrowDownIcon: FC<IconPropsSquare> = ({
  size = 20,
  className
}) => (
  <svg 
    width={size}
    height={size}
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4.35355 9.05848C4.15829 8.86321 4.15829 8.54663 4.35355 8.35137L5.05683 7.64809C5.25194 7.45298 5.56823 7.45281 5.76355 7.6477L9.64683 11.5225C9.84201 11.7173 10.158 11.7173 10.3532 11.5225L14.2364 7.6477C14.4318 7.45281 14.7481 7.45298 14.9432 7.64809L15.6464 8.35137C15.8417 8.54663 15.8417 8.86321 15.6464 9.05848L10.3536 14.3514C10.1583 14.5466 9.84171 14.5466 9.64645 14.3514L4.35355 9.05848Z" fill="black" fillOpacity="0.24"/>
  </svg>
);