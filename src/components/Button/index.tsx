import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

//Tipagem
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    model?: "main" | "alternative";
    height?: number;
    width?: number;
    loading?:boolean
  }
  //Componente e propriedades
export const Button: React.FC<ButtonProps> = ({
    model = "main",
    height,
    type = "button",
    onClick = () => {},
    loading = false,
    ...rest
}) => {

    //Retorno HTML
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