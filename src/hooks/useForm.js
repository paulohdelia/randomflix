import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [valores, setValores] = useState(valoresIniciais);

  const setValor = (chave, valor) => {
    setValores({ ...valores, [chave]: valor });
  };

  const handleChange = (event) => {
    setValor(event.target.getAttribute('name'), event.target.value);
  };

  const clearForm = (defaultValues) => {
    setValores(defaultValues);
  };

  return {
    handleChange,
    valores,
    clearForm,
  };
};

export default useForm;
