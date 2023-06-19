import React from "react";
import * as S from "./styles"

export const ListItemClient: React.FC = () => {
    return(
        <>
            <S.Container>
                <div className="list">
                    <span>Cliente</span>
                    <span>Telefone</span>
                    <span>Email</span>
                    <span>Data de Nascimento</span>
                   
                </div>
            </S.Container>
        </>
    )
}