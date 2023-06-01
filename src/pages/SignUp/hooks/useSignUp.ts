import { useFormik } from 'formik';
import { UserService } from '../../../services/UserService';

const userApi = new UserService()

export const UseSignUp = () =>{
const formSignUp = useFormik({
    initialValues:{
        nomeEmpresa:'',
        cnpjEmpresa: '',
        telEmpresa: '',
        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: '',
        cep: '',
        logradouro: '',
        numeroEmpresa: '',
        bairro: '',
        cidade: '',
        uf: ''

    },onSubmit: async (values)=> {
        try{
            await  userApi.crateUser({
               nomeEmpresa: values.nomeEmpresa,
               cnpjEmpresa: values.cnpjEmpresa,
               telEmpresa: values.telEmpresa,
               nomeUsuario: values.nomeUsuario,
               emailUsuario: values.emailUsuario,
               senhaUsuario: values.senhaUsuario,
               cep: values.cep,
               logradouro: values.logradouro,
               numeroEmpresa: values.numeroEmpresa,
               bairro: values.bairro,
               cidade: values.cidade,
               uf: values.uf
            })
        }catch(error){
            alert ('Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!')
        }
    }
   
})
    return{
        formSignUp
    }
}