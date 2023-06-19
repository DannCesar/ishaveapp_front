import { useFormik } from "formik";
import React from "react";
import { ClientService } from "../services/ClientService";

const clientApi = new ClientService();

export const useRegisterClient = () => {
  const registerClientForm = useFormik({
    initialValues: {
      cpfCliente: "",
      nomeCliente: "",
      dataNascCliente: "",
      telCliente: "",
      emailCliente: "",
    },
    onSubmit: async (values) => {
      try {
        await clientApi.cadClient({
          cpfCliente: values.cpfCliente,
          nomeCliente: values.nomeCliente,
          dataNascCliente: values.dataNascCliente,
          telCliente: values.telCliente,
          emailCliente: values.emailCliente,
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
