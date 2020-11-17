import React, { useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import { validationSchema } from './validationSchema';

import { Input as CustomInput } from '../../components/Input';
import { SimpleForm, Button } from '../../components/FormBasicComponents';

import { AuthController, StorageController } from '../../controllers';
import { CredentialsTypes } from '../../../core/lib/adapters/redux/store/ducks/credentials/types';
import { iNavigationProps, CapitalizeType, FieldType } from '../../utils';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const RegisterForm: React.FC<iNavigationProps> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  let authController = new AuthController();
  let storageController = new StorageController();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  async function handleRegister(values: FormValues) {
    setIsLoading(true);

    values.phoneNumber = values.phoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
    await (authController.register(values.name, values.email, values.phoneNumber, values.password)).then(user => {
      if (user.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar se registrar, tente novamente!', [{ style: "cancel" }]);
        setIsLoading(false);
        return;
      }
      storageController.setItem('@finances/user', user.data);
      dispatch({ type: CredentialsTypes.SET_TOKEN, token: user.data.access_token });
      setIsLoading(false);
      navigation.navigate('MainStack');
      values.email = '';
      values.name = '';
      values.password = '';
      values.phoneNumber = '';
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
        leftIcon={ <Icon style={{marginRight: 10}} name={'person'} size={25} color="#2D142C" /> }
        placeholder="Nome"
        value={values.name}
        onChangeText={value => setFieldValue("name", value)}
        onBlur={() => { { setFieldTouched('name')}}}
        editable={!isSubmitting}
        errorStyle={{ color: 'red' }}
        errorMessage={touched.name && errors.name ? errors.name : undefined} />

      <Input 
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={ <Icon style={{marginRight: 10}} name={'mail'} size={25} color="#2D142C" /> }
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

      <CustomInput 
        containerStyle={{marginTop: 0, marginBottom: 0, marginLeft: 10, marginRight: 10, paddingLeft: 10}}
        style={{fontSize: 16}}
        name="Telefone" 
        value={values.phoneNumber} 
        icon="call" 
        onChangeText={value => setFieldValue("phoneNumber", value)}
        onBlur={() => { { setFieldTouched('phoneNumber')}}}
        type={FieldType.PHONENUMBER} />
      
      {touched.phoneNumber && errors.phoneNumber ? 
        <Text style={{ fontSize: 12, color: 'red', marginLeft: 15}}>{errors.phoneNumber}</Text> : <Text></Text>}

      <Input 
        containerStyle={[styles.container, {marginTop: 10}]}
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

      <Button name="Cadastrar" isLoading={isLoading} onPress={handleSubmit} />
    </SimpleForm>
  );

  return (
    <Formik 
      initialValues={{name: '', email: '', phoneNumber: '', password: ''}} 
      onSubmit={handleRegister} validationSchema={validationSchema}>
      {(formikBag: FormikProps<FormValues>) => renderForm(formikBag)}
    </Formik>
  );
}

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    minWidth: '100%', 
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
