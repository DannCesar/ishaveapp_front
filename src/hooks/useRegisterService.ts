import { useFormik } from "formik";
import React from "react";

export const useRegisterService = () => {
 const registerServiceForm = useFormik({
    initialValues:{
        nomeServico: "",
        precoServico: "",
        descricaoServico: "",
        categoriaServico: "",

    },onSubmit: async (values) => {
        try{

        }catch(error){
            console.log(error)
            alert( "Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!")
        }
    }
 })
    return{
        registerServiceForm
    }
}