import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import { validationSchema } from './validationSchema';

import { AuthController, StorageController } from '../../controllers';
import { CredentialsTypes } from '../../../core/lib/adapters/redux/store/ducks/credentials/types';
import { iNavigationProps, CapitalizeType } from '../../utils';
import { SimpleForm, Title, Button } from '../../components/FormBasicComponents';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<iNavigationProps> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  let authController = new AuthController();
  let storageController = new StorageController();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  async function handleLogin(values: FormValues) {
    setIsLoading(true);
  
    await (authController.login(values.email, values.password)).then(user => {
      if (user.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login, tente novamente!', [
          { style: "cancel" }
        ]);
        setIsLoading(false);
        return;
      }
      storageController.setItem('@finances/user', user.data);
      dispatch({ type: CredentialsTypes.SET_TOKEN, token: user.data.access_token });
      setIsLoading(false);
      navigation.navigate('MainStack');
    });
  }

  const renderForm = ({ 
    values, handleSubmit, setFieldValue, touched, errors, setFieldTouched, isSubmitting
  }: FormikProps<FormValues>) => (
    <SimpleForm>
      <Input 
        containerStyle={[styles.container, { marginTop: 10 }]}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={{ type: 'Ionicons', name: 'mail', color: '#2D142C', size: 25 }}
        placeholder="Email"
        value={values.email}
        onChangeText={value => setFieldValue("email", value)}
        onBlur={() => { { setFieldTouched('email')}}}
        textContentType='emailAddress'
        keyboardType='email-address'
        editable={!isSubmitting}
        autoCapitalize={CapitalizeType.NONE}
        autoCorrect={false}
        autoCompleteType='email'
        errorStyle={{ color: 'red' }}
        errorMessage={touched.email && errors.email ? errors.email : undefined} />

      <Input 
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={{ type: 'Ionicons', name: 'lock', color: '#2D142C', size: 25 }}
        rightIcon={
          <Icon 
            style={{ marginRight: 10 }} name={showPassword ? 'eye-off' : 'eye'} size={30} color="#2D142C"
            onPress={toggleShowPassword} />
        }
        placeholder="Senha"
        secureTextEntry={!showPassword}
        autoCapitalize={CapitalizeType.NONE}
        value={values.password}
        onChangeText={value => setFieldValue("password", value)}
        onBlur={() => setFieldTouched('password')}
        editable={!isSubmitting}
        errorStyle={{ color: 'red' }}
        errorMessage={touched.password && errors.password ? errors.password : undefined} />

      <Button name="Entrar" isLoading={isLoading} onPress={handleSubmit} />
    </SimpleForm>
  );

  return (
    <Formik initialValues={{email: "", password: ""}} onSubmit={handleLogin} validationSchema={validationSchema}>
      {(formikBag: FormikProps<FormValues>) => renderForm(formikBag)}
    </Formik>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    minWidth: '90%', 
    elevation: 10,
  },
  inputContainer: {
    backgroundColor: '#FFF', 
    paddingLeft: 10, 
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
  }
});
