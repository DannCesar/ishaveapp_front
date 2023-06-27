import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
import queryString from 'query-string';

const confirmEmailApi = new UserService()

export const ConfirmEmail: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [message, setMessage] = useState("");

    useEffect(() => {
      const reqConfirmEmail = async () => {
        try{

          const params = queryString.parse(location.search)
          const res = await confirmEmailApi.confirmEmail(params.d, params.v)
          //Verifica se o usuario está registrado
          if(res.registered){
            setMessage('Email confirmado com sucesso!')
            console.log(res.message)
          }else{//Verifica se a URL expirou. 
            if(res.expired){
              setMessage(res.message)
            }
            console.log(res.message)
          }
    
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
            <h3>{message}</h3>
          </div>
          <div className="btnContainer">
            <Button model="alternative" onClick={() => navigate('/')}>Acessar login</Button>
          </div>
        </S.ConfirmEmailModal>
      </S.Container>
    </>
  );
};
