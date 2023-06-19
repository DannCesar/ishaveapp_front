import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { FormRegisterModal } from "../../components/FormRegisterClientModal";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import { RegisterServiceModal } from "../../components/RegisterServiceModal";

export const Service: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  return (
    <>
      {modalCad && <RegisterServiceModal close={() => setModalCad(false)} />}

      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              <SearchInput></SearchInput>
              <Button model="alternative">Consultar</Button>
            </div>
            <div className="btnContainer">
              <Button model="main" onClick={() => setModalCad(true)}>
                Cadastrar Serviço
              </Button>
            </div>
          </S.Header>
          <S.Content>
            
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
