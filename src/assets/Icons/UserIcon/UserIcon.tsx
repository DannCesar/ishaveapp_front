import React from "react";

export interface IconProps {
  onClick: () => void
}

export const UserIcon: React.FC<IconProps> = ({onClick,...rest}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="84"
      fill="#000000"
      viewBox="0 0 256 256"
      onClick={onClick}
      {...rest}
    >
      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
    </svg>
  );
};
