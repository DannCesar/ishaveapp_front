import { useFormik } from "formik";
import { UserService } from "../../../services/UserService";
import { useEffect, useState } from "react";
import { cnpj } from "cpf-cnpj-validator";
import * as Yup from "yup";

//Instanciação da classe UserService
const userApi = new UserService();

// Validação dos campos
const schema = Yup.object().shape({
  nomeEmpresa: Yup.string().required("Campo obrigatório"),
  cnpjEmpresa: Yup.string()
    .required("Campo obrigatório")
    .test("oneOfRequired", "Informe um CNPJ válido", (item) => {
      if (item) return cnpj.isValid(item);
    }),
  telEmpresa: Yup.string().required("Campo obrigatório"),
  emailUsuario: Yup.string().required("Campo obrigatório"),
  senhaUsuario: Yup.string().required("Campo obrigatório"),
  cep: Yup.string().required("Campo obrigatório"),
  logradouro: Yup.string().required("Campo obrigatório"),
  numEmpresa: Yup.string().required("Campo obrigatório"),
  bairro: Yup.string().required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  uf: Yup.string().required("Campo obrigatório"),
});

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const formSignUp = useFormik({
    initialValues: {
      nomeEmpresa: "",
      cnpjEmpresa: "",
      telEmpresa: "",
      emailUsuario: "",
      senhaUsuario: "",
      cep: "",
      logradouro: "",
      numEmpresa: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
    onSubmit: async (values) => {
      //preenchimento dos campos do formulário
      try {
        await userApi.createUser({
          nomeEmpresa: values.nomeEmpresa,
          cnpjEmpresa: values.cnpjEmpresa,
          telEmpresa: values.telEmpresa,
          emailUsuario: values.emailUsuario,
          senhaUsuario: values.senhaUsuario,
          cep: values.cep,
          logradouro: values.logradouro,
          numEmpresa: values.numEmpresa,
          bairro: values.bairro,
          cidade: values.cidade,
          uf: values.uf,
        });
        alert("Realizado cadastro com sucesso!");
      } catch (error) {
        alert(
          "Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!"
        );
      }
    },
    validationSchema: schema,
  });
  return {
    formSignUp,
    loading,
  };
};
