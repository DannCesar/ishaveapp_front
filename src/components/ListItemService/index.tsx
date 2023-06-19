import React from "react";
import * as S from "./styles"

export const ListItemService: React.FC = () => {
    return(
        <>
            <S.Container>
                <div className="list">
                    <span>Serviço</span>
                    <span>Preço</span>
                    <span>Descrição</span>
                    <span>Categoria</span>
                </div>
            </S.Container>
        </>
    )
}