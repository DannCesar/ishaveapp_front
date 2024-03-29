import styled from "styled-components";

//Tipagem do componente Button
interface ButtonContainerProps{
    model: "main"|"alternative";
    height?: number;
    width?:number
}

//Estilização do componente
export const ButtonContainer = styled.button<ButtonContainerProps>`
background-color: ${({theme,model}) => model === "main" ? theme.colors.ice: theme.colors.brown };
color: ${({theme,model}) =>  theme.colors.black};
border-radius: ${({theme}) => theme.borderRadius.button};
height: ${(props) => props.height || "30px" };
min-width: 100px;
cursor: pointer;
border: 1px solid;
padding: 8px 12px;
display: flex;
align-items: center;
justify-content: center;
`;