import type { FC } from "react";
import type { IconPropsSquare } from "src/shared/types/icons";

export const CloseIcon: FC<IconPropsSquare> = ({
  size = 28,
  className
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width={size} height={size} rx="14" fill="black" fillOpacity="0.04"/>
    <path d="M9.40385 8.6965C9.59911 8.50123 9.91569 8.50123 10.111 8.6965L14.0002 12.5857L17.8892 8.69665C18.0845 8.50138 18.4011 8.50138 18.5963 8.69665L19.3034 9.40375C19.4987 9.59902 19.4987 9.9156 19.3034 10.1109L15.4144 13.9999L19.3033 17.8889C19.4986 18.0841 19.4986 18.4007 19.3033 18.596L18.5962 19.3031C18.401 19.4984 18.0844 19.4984 17.8891 19.3031L14.0002 15.4141L10.111 19.3032C9.91577 19.4985 9.59919 19.4985 9.40393 19.3032L8.69682 18.5961C8.50156 18.4009 8.50156 18.0843 8.69682 17.889L12.5859 13.9999L8.69674 10.1107C8.50148 9.91545 8.50148 9.59886 8.69674 9.4036L9.40385 8.6965Z" fill="#B3B3B3"/>
  </svg>
);