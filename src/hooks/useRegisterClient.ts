import { useFormik } from "formik";
import React from "react";
import { ClientService } from "../services/ClientService";
import { useState } from "react";

const clientApi = new ClientService();

export const useRegisterClient = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const registerClientForm = useFormik({
    initialValues: {
      nome: "",
      sobrenome: "",
      telefone: "",
      cpf: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        await clientApi.cadClient({
          nome: values.nome,
          sobrenome: values.sobrenome,
          telefone: values.telefone,
          cpf: values.cpf,
          email: values.email,
        });
        setSuccessModal(true);
      } catch (error) {
        console.log(error);
        setErrorModal(true);
      }
    },
  });
  return {
    registerClientForm,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
  };
};
