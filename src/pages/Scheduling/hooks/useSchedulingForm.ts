import { useFormik } from "formik";
import { useState } from "react";
import { SchedulingService } from "../../../services/SchedulingService";

const schedulingApi = new SchedulingService()

export const useSchedulingForm = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const schedulingForm = useFormik({
    initialValues: {
        data:"",
        idCliente: 0,
        idServices:1,
        observacao:""
    },
    onSubmit: async (values) => {
      try {
            await schedulingApi.registerScheduling({
              data:new Date(values.data).toISOString(),
              idCliente: values.idCliente,
              idServices: values.idServices,
              observacao: values.observacao
            })
        setSuccessModal(true)
      } catch (error) {
        console.log(error);
       setErrorModal(true)
      }
    },
  });
  return {
    schedulingForm,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
  };
};
