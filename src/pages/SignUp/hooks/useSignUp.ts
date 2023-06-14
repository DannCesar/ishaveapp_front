import { useFormik } from "formik";
import { UserService } from "../../../services/UserService";
import { useEffect, useState } from "react";

//instanciação da classe UserService
const userApi = new UserService();

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  //recarregar a página após realizar requisição
//   useEffect(() => {
//     if (loading) {
//       window.location.reload();
//     }
//   }, [loading]);
  //form
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
      setLoading(true);
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
        setLoading(false);
      }
    },
  });
  return {
    formSignUp,
    loading,
  };
};
