import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import { Input } from "react-native-elements";

// import Input from '../../components/Input';
import { SimpleForm, Title, Button } from '../../components/FormBasicComponents';
import { BottomInfo, BottomInfoText, BottomInfoLink } from '../../components/BottomInfoComponents';
import { BackgroundGradient } from '../../components/Gradients';

import { CredentialsTypes } from '../../../core/lib/adapters/redux/store/ducks/credentials/types';
import { iNavigationProps, FieldType, CapitalizeType } from '../../utils';
import { AuthController, StorageController } from '../../controllers';

import { Container } from './styles';
import { validationSchema } from './validationSchema';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC<iNavigationProps> = ({ navigation }) => {
	// const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  let authController = new AuthController();
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user');
      if (!(user === undefined || user === null)) 
        navigation.navigate('MainStack');
    }
    getUserStorage();
  }, []);

  const renderForm = ({ 
    values, handleSubmit, setFieldValue, touched, errors, setFieldTouched, isSubmitting
  }: FormikProps<FormValues>) => (
    <SimpleForm>
      <Input 
        containerStyle={{minWidth: '90%',  marginTop: 10, elevation: 10 }}
        inputContainerStyle={{ backgroundColor: '#FFF', paddingLeft: 10, borderRadius: 10 }}
        inputStyle={{fontSize: 16}}
        leftIcon={{ type: 'Ionicons', name: 'mail', color: '#2D142C', size: 25 }}
        placeholder="Email"
        value={values.email} 
        // icon="mail" 
        onChangeText={value => setFieldValue("email", value)}
        onBlur={() => { { setFieldTouched('email')}}}
        // focus={true}
        // type={FieldType.TEXT}
        textContentType='emailAddress'
        keyboardType='email-address'
        editable={!isSubmitting}
        autoCapitalize={CapitalizeType.NONE}
        autoCorrect={false}
        autoCompleteType='email'
        errorStyle={{ color: 'red' }}
        errorMessage={touched.email && errors.email ? errors.email : undefined} />

      <Input 
        containerStyle={{minWidth: '90%', elevation: 10 }}
        inputContainerStyle={{ backgroundColor: '#FFF', paddingLeft: 10, borderRadius: 10 }}
        inputStyle={{fontSize: 16}}
        leftIcon={{ type: 'Ionicons', name: 'lock', color: '#2D142C', size: 25 }}
        placeholder="Senha"
        secureTextEntry
        autoCapitalize={CapitalizeType.NONE}
        value={values.password}  
        // icon="lock-closed" 
        onChangeText={value => setFieldValue("password", value)}
        onBlur={() => setFieldTouched('password')}
        editable={!isSubmitting}
        errorStyle={{ color: 'red' }}
        errorMessage={touched.password && errors.password ? errors.password : undefined}
        // type={FieldType.PASSWORD} 
      />

      <Button name="Entrar" isLoading={isLoading} onPress={handleSubmit} />
    </SimpleForm>
  );

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

  return (
    <BackgroundGradient>
      <Container>
        <Title>Faça login com seu email e senha...</Title>

        <Formik initialValues={{email: "", password: ""}} onSubmit={handleLogin} validationSchema={validationSchema}>
          {(formikBag: FormikProps<FormValues>) => renderForm(formikBag)}
        </Formik>

        <BottomInfo>
          <BottomInfoText>Não tem uma conta?</BottomInfoText>
          <BottomInfoLink navigation={navigation} route="Register">
            Criar!
          </BottomInfoLink>
        </BottomInfo>
      </Container>
    </BackgroundGradient>
  );
}

export default Login;
