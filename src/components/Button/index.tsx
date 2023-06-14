import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    model?: "main" | "alternative";
    height?: number;
    width?: number;
    loading?:boolean
  }
export const Button: React.FC<ButtonProps> = ({
    model = "main",
    height,
    type = "button",
    onClick = () => {},
    loading = false,
    ...rest
}) => {
    return(
        <ButtonContainer
        model={model}
        height={height}
        type={type}
        onClick={loading? () => {} : (e) => onClick(e)}
        {...rest}
        />
          
    );
};