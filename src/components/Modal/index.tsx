import React from "react";
import * as S from "./styles"

interface ModalProps{
    close(): void;
}

export const Modal: React.FC<ModalProps> = ({
    close
}) => {
    return(
        <>
            <S.Backdrop onClick={close}/>
            <S.InfoModal>
                
            </S.InfoModal>
        </>
    )
}