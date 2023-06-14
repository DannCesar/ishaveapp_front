import { useFormik } from "formik";
import React from "react";

export const useScheduling = () => {
 const schedulingForm = useFormik({
    initialValues:{
        cpf: "",
        nome: "",
        sobrenome: "",
        telefone: "",
        email: ""

    },onSubmit: async (values) => {
        try{

        }catch(error){
            console.log(error)
            alert( "Erro ao realizar cadastro, tente novamente mais tarde,se persistir entre em contato com o suporte!")
        }
    }
 })
    return{
        schedulingForm
    }
}