import { object as yupObject, string as yupString } from 'yup';

export const validationSchema = yupObject().shape({
  name: yupString()
    .min(4, 'Informe um nome de no mínimo 4 caracteres')
    .required('Informe o nome da conta'),
  description: yupString()
    .required('Informe a descrição da conta'),
  amount: yupString()
    .required('Informe o valor da conta'),
});
