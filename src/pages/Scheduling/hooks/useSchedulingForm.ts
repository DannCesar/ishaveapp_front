import { useFormik } from "formik";

export const useSchedulingForm = () => {
  const schedulingForm = useFormik({
    initialValues: {
        horario:"",
        data:"",
        idCliente: "",
        idServices:""
    },
    onSubmit: async (values) => {
      try {
       
        alert("Realizado agendamento com sucesso!");
      } catch (error) {
        console.log(error);
        alert(
          "Erro ao realizar agendamento, tente novamente mais tarde,se persistir entre em contato com o suporte!"
        );
      }
    },
  });
  return {
    schedulingForm,
  };
};
