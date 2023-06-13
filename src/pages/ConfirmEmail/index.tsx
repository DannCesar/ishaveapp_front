import React, { useEffect } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
import queryString from 'query-string';

const confirmEmailApi = new UserService()

export const ConfirmEmail: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      const reqConfirmEmail = async () => {
        try{
    
          const params = queryString.parse(location.search)
          await confirmEmailApi.confirmEmail(params.d, params.v)
           
        }catch(error){
          console.log(error)
        }
      }
      reqConfirmEmail()
    },[])
  return (
    <>
      <S.Container>
        <S.ConfirmEmailModal>
          <div className="infoModal">
            <h3>Email confirmado com sucesso!</h3>
          </div>
          <div className="btnContainer">
            <Button model="alternative" onClick={() => navigate('/')}>Acessar login</Button>
          </div>
        </S.ConfirmEmailModal>
      </S.Container>
    </>
  );
};
