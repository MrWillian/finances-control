import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';

import { FlashMessage } from '../FlashMessage';
import { Button, Title } from '../FormBasicComponents/';
import { Input as CustomInput } from '../Input';

import { FieldType } from '../../utils';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { createAccount, loadRequest } from '../../../core/lib/adapters/redux/store/ducks/accounts/actions';
import { validationSchema } from './validationSchema';

import { Container } from './styles';

interface FormValues {
  name: string;
  description: string;
  amount: string;
}

const SheetForm: React.FC = () => {
  const [flashMessage, setFlashMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function handleCreate(values: FormValues) {
    setIsLoading(true);
    const account = {
      name: values.name,
      description: values.description,
      amount: values.amount,
    }
    const response = dispatch(createAccount(account, token));
    
    if (response.payload.data) {
      setFlashMessage(true);
      setTimeout(() => { 
        setFlashMessage(false); 
        dispatch(loadRequest(token));
        navigation.navigate('Main');
        setIsLoading(false);
      }, 3000);
    }
  }

  const renderForm = ({ 
    values, handleSubmit, setFieldValue, touched, errors, setFieldTouched, isSubmitting
  }: FormikProps<FormValues>) => (
    <Container>
      <Title style={{marginLeft: 10}}>Crie uma conta...</Title>
      <Input 
        containerStyle={[styles.container, { marginTop: 10 }]}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={ <Icon style={{marginRight: 10}} name='logo-buffer' size={15} color="#2D142C" /> }
        placeholder="Nome"
        value={values.name}
        onChangeText={value => setFieldValue('name', value)}
        onBlur={() => { { setFieldTouched('name')}}}
        editable={!isSubmitting}
        errorStyle={{ color: 'red' }}
        errorMessage={touched.name && errors.name ? errors.name : undefined} />

      <Input 
        containerStyle={[styles.container]}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={ <Icon style={{marginRight: 10}} name='ios-newspaper' size={15} color="#2D142C" /> }
        placeholder="Descrição"
        value={values.description}
        onChangeText={value => setFieldValue('description', value)}
        onBlur={() => { { setFieldTouched('description')}}}
        editable={!isSubmitting}
        errorStyle={{ color: 'red' }}
        errorMessage={touched.description && errors.description ? errors.description : undefined} />
      
      <CustomInput 
        containerStyle={{marginTop: 0, marginBottom: 0, marginLeft: 10, marginRight: 10, paddingLeft: 5}}
        style={styles.input}
        name="Valor R$" 
        icon="md-logo-usd"
        value={values.amount} 
        includeRawValueInChangeText={true}
        onChangeText={(amount, rawAmount) => setFieldValue("amount", rawAmount)}
        onBlur={() => { { setFieldTouched('amount')}}}
        type={FieldType.MONEY} />

      {touched.amount && errors.amount ? 
        <Text style={{ fontSize: 12, color: 'red', marginLeft: 15}}>{errors.amount}</Text> : <Text></Text>}

      <Button name="Registrar" isLoading={isLoading} onPress={handleSubmit} />
      
    </Container>
  );

  return (
    <>
      <Formik 
        initialValues={{name: '', description: '', amount: ''}} 
        onSubmit={handleCreate} validationSchema={validationSchema}>
        {(formikBag: FormikProps<FormValues>) => renderForm(formikBag)}
      </Formik>
      
      {flashMessage ? <FlashMessage message={'Conta criada com sucesso...'} /> : null}
    </>
  );
}

export default SheetForm;

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
