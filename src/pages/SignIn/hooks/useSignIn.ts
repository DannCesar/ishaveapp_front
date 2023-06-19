import { useFormik } from "formik";
import { UserService } from "../../../services/UserService";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// instanciação da classe do UserService
const userApi = new UserService();

//Validação dos campos no formulário
const schema = yup.object().shape({
  emailUsuario: yup
    .string()
    .email("E-mail inválido,insira email válido")
    .required("Campo obrigatório"),
  senhaUsuario: yup.string().required("Campo obrigatório"),
});

export const useSignIn = () => {
  const navigate = useNavigate()
  
  //recarregar a página após realizar requisição
  // useEffect(() => {
  //   if (loading) {
  //     window.location.reload();
  //   }
  // }, [loading]);
  //form
  const formSignIn = useFormik({
    initialValues: {
      emailUsuario: "",
      senhaUsuario: "",
    },
    onSubmit: async (values) => {
     
      //preenchimento dos campos do formulário
      try {
        const data = await userApi.loginUser({
          emailUsuario: values.emailUsuario,
          senhaUsuario: values.senhaUsuario,
        });
<<<<<<< HEAD
        
=======
>>>>>>> da29395c89041550f4aa59335d43a2ac2b5f96f9
        
        //Aparentemente funciona, mas talvez tenha uma maneira mais elegante de lidar com isso
        if(data.idSession > 0){
          localStorage.setItem("ishaveappId",data.idSession.toString())
          window.location.reload()
<<<<<<< HEAD
          localStorage.setItem("ishaveappId",data.idSession.toString())
=======
          navigate('/')

         

>>>>>>> da29395c89041550f4aa59335d43a2ac2b5f96f9
        }else{
          alert(data.message)
        }
        
      } catch (error) {
        console.log(error);
        alert(
          "Erro ao realizar login, tente novamente mais tarde,se persistir entre em contato com o suporte!"
        );
        
      }
    },
    validationSchema: schema,
  });
  return {
    formSignIn,
    
  };
};
