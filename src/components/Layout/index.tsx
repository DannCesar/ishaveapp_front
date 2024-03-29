import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { HomeIcon } from "../../assets/Icons/HomeIcon/HomeIcon";
import { UserIcon } from "../../assets/Icons/UserIcon/UserIcon";
import { SccisorsIcon } from "../../assets/Icons/SccissorsIcon/SccisorsIcon";
import { ScheduleIcon } from "../../assets/Icons/ScheduleIcon/ScheduleIcon";
import { SignOutIcon } from "../../assets/Icons/SignOutIcon/SignOutIcon";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
import { useQuery } from "react-query";
import profile from "../../assets/defaultPerfil.png"
import ishave from "../../assets/artIShave/letIsahve.png"


const userApi = new UserService();

interface LayoutProps {
  children: React.ReactNode;
  usuario: {
    nomeUsuario: string;
    empresa: {
      idEmpresa: number;
      cnpjEmpresa: string;
      nomeEmpresa: string;
      telEmpresa: string;
      enderecoId: number;
      fotoEmpresa: string;
    };
  };
}

export const Layout: React.FC<LayoutProps> = ({
  usuario,
  children,
  ...props
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
    const {data} = useQuery("usuario", async() =>{
      return  await userApi.getHome()
    })

  useEffect(
    () => {
      //Obtendo Valor do localStorage
      const userLocalStorage = localStorage.getItem("ishaveappId");
      //Verificando se o valor existe
      if (userLocalStorage) {
        setUser(userLocalStorage);
      }
    },
    // Quando a condição do array estiver vazia,significa que quando for carregada a página será executada
    []
  );

  // Função assincrona para deletar o idSession / Valor do localstorage
  const signOut = () => {
    localStorage.removeItem("ishaveappId");
    navigate("/");
    window.location.reload();
  };

  const changeScreen = () => {
    navigate("/");
  };
  return (
    <S.Container>
      <S.NavigationLayout>
        <h2>IShaveApp</h2>
        <div className="navigation">
          <HomeIcon onClick={() => navigate("/")} />
          Inicio
        </div>
        <div className="navigation">
          <SccisorsIcon onClick={() => navigate("/servicos")} />
          Serviços
        </div>
        <div className="navigation">
          <ScheduleIcon onClick={() => navigate("/agendamento")} />
          Agendamento
        </div>
      </S.NavigationLayout>
      <S.Sidebar>
        <S.AvatarContainer fotoEmpresa={data?.usuario?.empresa?.fotoEmpresa}/>
        <img src={profile} alt="avatar" />
        <div className="nameUserContainer"><h3>{data?.usuario?.nomeUsuario}</h3></div>
        <div className="signOutContainer">
          <SignOutIcon onClick={() => signOut()} />
        </div>
      </S.Sidebar>
      <S.ContentContainer {...props}>
        <div>{children}</div>
      </S.ContentContainer>
    </S.Container>
  );
};
