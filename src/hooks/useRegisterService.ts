import { useFormik } from "formik";
import React from "react";
import { RegisterService } from "../services/RegisterService";
import { api } from "../services/api";
import {useState} from "react"

const serviceApi = new RegisterService()

export const useRegisterService = () => {
const [successModal,setSuccessModal] = useState(false)
const [errorModal,setErrorModal] = useState(false)
 const registerServiceForm = useFormik({
    initialValues:{
        nomeServico: "",
        precoServico: 0,
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
            setSuccessModal(true)
        }catch(error){
            console.log(error)
           setErrorModal(true)
        }
    }
 })
    return{
        registerServiceForm,
        setSuccessModal,
        successModal,
        setErrorModal,
        errorModal
    }
}