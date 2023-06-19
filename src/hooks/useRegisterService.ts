import { useFormik } from "formik";
import React from "react";
import { RegisterService } from "../services/RegisterService";
import { api } from "../services/api";

const serviceApi = new RegisterService()

export const useRegisterService = () => {
 const registerServiceForm = useFormik({
    initialValues:{
        nomeServico: "",
        precoServico: "",
        descricaoServico: "",
        categoriaServico: "",

    },onSubmit: async (values) => {
        try{
            await serviceApi.registerService({
                nomeServico: values.nomeServico,
                precoServico: values.precoServico,
                descricaoServico: values.descricaoServico,
                categoriaServico: values.categoriaServico,
            })
            alert("Serviço cadastrado com sucesso!")
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