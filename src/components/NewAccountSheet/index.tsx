import React from 'react';
import { Dimensions } from 'react-native';
import SheetForm from '../SheetForm';

import { 
  BottomSheetContent, BottomSheetTitle, Indicator
} from './styles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NewAccountSheet = () => {

  return (
    <BottomSheetContent 
      windowHeight={windowHeight} 
      windowWidth={windowWidth}>
      <Indicator />
      <BottomSheetTitle>Registre uma conta...</BottomSheetTitle>
      <SheetForm />
    </BottomSheetContent>
  );
};

export default NewAccountSheet;
