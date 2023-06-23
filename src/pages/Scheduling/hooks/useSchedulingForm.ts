import { useFormik } from "formik";
import { useState } from "react";

export const useSchedulingForm = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const schedulingForm = useFormik({
    initialValues: {
        data:"",
        idCliente: "",
        idServices:""
    },
    onSubmit: async (values) => {
      try {
       
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
