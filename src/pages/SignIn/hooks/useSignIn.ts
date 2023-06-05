import { useFormik } from "formik";
import { UserService } from "../../../services/UserService";
import * as yup from 'yup';

// instanciação da classe do UserService
const userApi = new UserService();

//Validação dos campos no formulário
const schema = yup.object().shape({
  emailUsuario: yup.string().email("E-mail inválido,insira email válido").required("Campo obrigatório"),
  senhaUsuario: yup.string().required("Campo obrigatório"),
});

//form
export const useSignIn = () => {
  const formSignIn = useFormik({
    initialValues: {
      emailUsuario: "",
      senhaUsuario: "",
    },
    onSubmit: async (values) => {
      //preenchimento dos campos do formulário
      try {
        await userApi.loginUser({
          emailUsuario: values.emailUsuario,
          senhaUsuario: values.senhaUsuario,
        });
        alert("Realizado cadastro com sucesso!");
      } catch (error) {
        alert(
          "Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!"
        );
      }
    },
    validationSchema:schema
  });
  return {
    formSignIn,
  };
};
