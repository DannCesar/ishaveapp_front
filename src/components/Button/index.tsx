import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    model?: "main" | "alternative";
    height?: number;
    width?: number;
  }
export const Button: React.FC<ButtonProps> = ({
    model = "main",
    height,
    type = "button",
    onClick = () => {},
    ...rest
}) => {
    return(
        <ButtonContainer
        model={model}
        height={height}
        type={type}
        onClick={(e) => onClick(e)}
        {...rest}
        />
          
    );
};