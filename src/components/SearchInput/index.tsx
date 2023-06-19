import React, { HTMLAttributes } from "react";
import * as S from "./styles"

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
    value: string;
}

export const SearchInput: React.FC<SearchInputProps> =(props) => {
    return(
        <>
            <S.Container>
                <input type="text" {...props} placeholder="Insira sua busca..."/>
            </S.Container>
        </>
    )
}