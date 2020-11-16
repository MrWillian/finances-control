import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import { Input } from "react-native-elements";
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { FlashMessage } from '../FlashMessage';
import { Button, Title } from '../FormBasicComponents';
import { Input as CustomInput } from '../Input';

import { FieldType } from '../../utils';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { loadRequest } from '../../../core/lib/adapters/redux/store/ducks/accounts/actions';
import { loadRequest as loadRequestCategories } from '../../../core/lib/adapters/redux/store/ducks/transactionCategories';
import { validationSchema } from './validationSchema';

import { Account } from '../../../core/lib/adapters/redux/store/ducks/accounts/types';
import { TransactionCategory } from '../../../core/lib/adapters/redux/store/ducks/transactionCategories';

import { Container, Scroll, InputContainer, Label } from './styles';
import { createTransaction, Transaction } from '../../../core/lib/adapters/redux/store/ducks/transactions';

interface FormValues {
  description: string;
  date: string;
  value: string;
  type: string;
  account_id: string;
  category_id?: string;
}

const TransactionForm: React.FC = () => {
  const accounts = useSelector<ApplicationState, Account[]>(state => state.accounts.data);
  const transactionCategories = 
    useSelector<ApplicationState, TransactionCategory[]>(state => state.transactionCategories.data);
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);

  const [selectedAccount, setSelectedAccount] = useState<React.ReactText>(accounts[0]?.name);
  const [selectedCategory, setSelectedCategory] = useState<React.ReactText>(transactionCategories[0]?.name);
  const [type, setType] = useState<React.ReactText>('expense');
  const [flashMessage, setFlashMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => { 
    dispatch(loadRequest(token));
    dispatch(loadRequestCategories(token));
  }, []);

  function handleCreate(values: FormValues) {
    const transaction: Transaction = {
      account_id: search(selectedAccount, accounts)?.id,
      category_id: search(selectedCategory, transactionCategories)?.id,
      date: values.date.slice(0, 10).replace('/', '-'),
      description: values.description,
      type: type.toString(),
      value: +values.value,
    }

    setIsLoading(true);
    const response = dispatch(createTransaction(transaction, token));
    
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

  const search = (nameKey: React.ReactText, myArray: Array<Account | TransactionCategory>) => {
    for (var i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) 
        return myArray[i];
    }
  }

  const renderForm = ({
    values, handleSubmit, setFieldValue, touched, errors, setFieldTouched, isSubmitting
  }: FormikProps<FormValues>) => (
    <Scroll>
      <Container>
        <Title style={{marginTop: -15, marginLeft: 10, fontSize: 16}}>Crie uma movimentação para sua conta...</Title>

        <Picker
          selectedValue={selectedAccount}
          style={{ height: 50,width: '65%', marginTop: 15, alignSelf: 'center', color: '#6269F1' }}
          dropdownIconColor="#6269F1"
          onValueChange={(itemValue) => setSelectedAccount(itemValue)}
          mode="dropdown">
          {accounts[0] !== undefined ?
            accounts.map((account, index) => <Picker.Item key={index} label={account.name} value={account.name} />)
            :
            <Picker.Item label="Crie uma conta..." value="Nenhuma conta criada" />
          }
        </Picker>

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
        
        <InputContainer>
          <Label>Tipo</Label>
          <Picker
            selectedValue={type}
            style={{ height: 50, width: '45%', elevation: 10, alignSelf: 'center', color: '#FFFFFF' }}
            dropdownIconColor="#FFFFFF"
            onValueChange={(itemValue) => setType(itemValue)}
            mode="dropdown">
            <Picker.Item label="Despesa" value="expense" />
            <Picker.Item label="Lucro" value="profit" />
          </Picker>
        </InputContainer>

        {type === 'expense' ?
          <InputContainer>
            <Label>Categoria</Label>
            <Picker
              selectedValue={selectedCategory}
              style={{ height: 50, width: '50%', elevation: 10, alignSelf: 'center', color: '#FFFFFF' }}
              dropdownIconColor="#FFFFFF"
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
              mode="dropdown">
              {transactionCategories !== undefined ?
                transactionCategories.map((category, index) => 
                  <Picker.Item key={index} label={category.name} value={category.name} />)
                :
                <Picker.Item label="Nenhuma categoria..." value="null" />
              }
            </Picker>
          </InputContainer>
          : (<></>)
        }

        <CustomInput 
          containerStyle={{marginTop: 0, marginBottom: 0, marginLeft: 10, marginRight: 10, paddingLeft: 5}}
          style={styles.input}
          name="Data" 
          icon="calendar"
          value={values.date} 
          onChangeText={(value) => setFieldValue('date', value)}
          onBlur={() => setFieldTouched('date')}
          type={FieldType.DATETIME} />
        
        {touched.date && errors.date ? 
          <Text style={{ fontSize: 12, color: 'red', marginLeft: 15}}>{errors.date}</Text> : <Text></Text>}
        
        <CustomInput 
          containerStyle={{marginTop: 5, marginBottom: 0, marginLeft: 10, marginRight: 10, paddingLeft: 5}}
          style={styles.input}
          name="Valor R$" 
          icon="md-logo-usd"
          value={values.value}
          includeRawValueInChangeText={true}
          onChangeText={(value, rawValue) => setFieldValue("value", rawValue)}
          onBlur={() => setFieldTouched('value')}
          type={FieldType.MONEY} />

        {touched.value && errors.value ? 
          <Text style={{ fontSize: 12, color: 'red', marginLeft: 15}}>{errors.value}</Text> : <Text></Text>}

        <Button name="Criar" isLoading={isLoading} onPress={handleSubmit} />
        
      </Container>
    </Scroll>
  );

  return (
    <>
      <Formik 
        initialValues={{
          description: '', date: new Date().toISOString(),
          value: '', type: '', account_id: '', category_id: ''
        }}
        onSubmit={handleCreate} validationSchema={validationSchema}>
        {(formikBag: FormikProps<FormValues>) => renderForm(formikBag)}
      </Formik>
      
      {flashMessage ? <FlashMessage message={'Movimentação criada com sucesso...'} /> : null}
    </>
  );
}

export default TransactionForm;

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