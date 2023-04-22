import React from "react";
import { useNavigate } from "react-router-dom";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <h1>IShaveApp</h1>
        </div>
        <div>
            <h2>Bem vindo</h2>
            <span>Insira seu email e senha para efetuar login</span>
        </div>
      </div>
    </>
  );
};
