import { useFormik } from "formik";
import { UserService } from "../../../services/UserService";
import { useEffect, useState } from "react";
import { cnpj } from "cpf-cnpj-validator";
import * as yup from "yup";

//Instanciação da classe UserService
const userApi = new UserService();

// Validação dos campos
// const schema = yup.object().shape({
//   nomeEmpresa: yup.string().required("Campo obrigatório"),
//   cnpjEmpresa: yup
//     .string()
//     .required("Campo obrigatório")
//     .test("oneOfRequired", "Informe um CNPJ válido", (item) => {
//       if (item) return cnpj.isValid(item);
//     }),
//   telEmpresa: yup.string().required("Campo obrigatório"),
//   emailUsuario: yup.string().required("Campo obrigatório"),
//   senhaUsuario: yup
//     .string()
//     .required("Campo obrigatório")
//     .min(8, "A senha precisa conter pelo menos 8 caracteres"),
//   // confirmarSenha: yup.string().required("Campo obrigatório").oneOf([yup.ref("senhaUsuario")], "As senham precisam ser iguais"),
//   cep: yup.string().required("Campo obrigatório"),
//   logradouro: yup.string().required("Campo obrigatório"),
//   numEmpresa: yup.string().required("Campo obrigatório"),
//   bairro: yup.string().required("Campo obrigatório"),
//   cidade: yup.string().required("Campo obrigatório"),
//   uf: yup.string().required("Campo obrigatório"),
// });

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
    // validationSchema: schema,
  });
  return {
    formSignUp,
    loading,
  };
};
