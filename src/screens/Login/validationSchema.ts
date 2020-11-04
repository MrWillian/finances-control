import { object as yupObject, string as yupString } from 'yup';

export const validationSchema = yupObject().shape({
  email: yupString()
    .email('Digite um email válido')
    .required('Informe um email'),
  password: yupString()
    .min(8, 'Informe uma senha de no mínimo 8 caracteres')
    .required('Informe uma senha'),
});
