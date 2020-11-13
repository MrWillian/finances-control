import { FieldType } from "../enums/FieldType";
import { CapitalizeType } from "../enums/CapitalizeType";

export interface iCustomInputProps {
  name: string;
  value: string;
  icon?: string;
  containerStyle?: {};
  style?: {};
  onChangeText(operation?: any, rawValue?: any): any;
  onBlur?: (operation?: any) => any;
  showPassword?: boolean;
  type?: FieldType;
  focus?: boolean;
  autoCapitalize?: CapitalizeType;
  includeRawValueInChangeText?: boolean;
  textContentType?: string;
  keyboardType?: string;
  autoCorrect?: boolean;
  autoCompleteType?: string;
  ref?: any;
}
