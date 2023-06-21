import { useFormik } from "formik";
import React from "react";
import { ClientService } from "../services/ClientService";

const clientApi = new ClientService();

export const useRegisterClient = () => {
  const registerClientForm = useFormik({
    initialValues: {
      nome: "",
      sobrenome: "",
      telefone: "",
      cpf: "",
      email: "",
      dataNasc: "",
    },
    onSubmit: async (values) => {
      try {
        await clientApi.cadClient({
          nome: values.nome,
          sobrenome: values.sobrenome,
          telefone: values.telefone,
          cpf: values.cpf,
          email: values.email,
          dataNasc: values.dataNasc,
        });
        alert("Realizado cadastro com sucesso!");
      } catch (error) {
        console.log(error);
        alert(
          "Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!"
        );
      }
    },
  });
  return {
    registerClientForm,
  };
};
