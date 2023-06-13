import { useFormik } from 'formik';
import { UserService } from '../../../services/UserService';

//instanciação da classe UserService
const userApi = new UserService()

export const useSignUp = () =>{
    //form
const formSignUp = useFormik({
    initialValues:{
        nomeEmpresa:'',
        cnpjEmpresa: '',
        telEmpresa: '',
        emailUsuario: '',
        senhaUsuario: '',
        cep: '',
        logradouro: '',
        numEmpresa: '',
        bairro: '',
        cidade: '',
        uf: ''

    },onSubmit: async (values)=> {
        //preenchimento dos campos do formulário
        try{
            await  userApi.createUser({
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
               uf: values.uf
            });
            alert('Realizado cadastro com sucesso!')
        }catch(error){
            alert ('Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!')
        }
    }
   
})
    return{
        formSignUp
    }
}