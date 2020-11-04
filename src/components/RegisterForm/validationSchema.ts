import { object as yupObject, string as yupString } from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = yupObject().shape({
  name: yupString()
    .min(4, 'Informe um nome de no mínimo 4 caracteres')
    .required('Informe seu nome'),
  email: yupString()
    .email('Digite um email válido')
    .required('Informe seu email'),
  phoneNumber: yupString()
    // .matches(phoneRegExp, 'Número de telefone ')
    .required('Informe seu número de telefone'),
  password: yupString()
    .min(8, 'Informe uma senha de no mínimo 8 caracteres')
    .required('Informe sua senha'),
});
