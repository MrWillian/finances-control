import { object as yupObject, string as yupString } from 'yup';

export const validationSchema = yupObject().shape({
  description: yupString()
    .min(4, 'Informe uma descrição de no mínimo 4 caracteres')
    .required('Informe a descrição da movimentação'),
  date: yupString()
    .required('Informe a data da movimentação'),
  value: yupString()
    .required('Informe o valor da movimentação'),
});
