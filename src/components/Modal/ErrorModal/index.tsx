import React from "react";
import { Backdrop } from "../styles";
import * as S from "./styles";
import { Button } from "../../Button";

interface ErrorModalProps {
  close(): void;
  title: string;
  label: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  close,
  title,
  label,
}) => {
  return (
    <>
      <Backdrop onClick={close} />
      <S.InfoContainer>
        <div className="containerInfo">
          <span className="title">{title}</span>
          <span className="label">{label}</span>
          <div className="btnContainer">
            <Button model="alternative" onClick={() => close()}>Ok</Button>
          </div>
        </div>
      </S.InfoContainer>
    </>
  );
};
