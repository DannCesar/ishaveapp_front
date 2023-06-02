import { useFormik } from "formik";
import { UserService } from "../../../services/UserService";

const userApi = new UserService()

export const useSignIn = () =>{
const formSignIn = useFormik({
    initialValues:{
        emailUsuario: '',
        senhaUsuario: '',
    },onSubmit: async (values)=> {
        try{
            await  userApi.loginUser(
                values.emailUsuario,
               values.senhaUsuario,
            );
            alert('Realizado cadastro com sucesso!')
        }catch(error){
            alert ('Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!')
        }
    }
   
})
    return{
        formSignIn
    }
}