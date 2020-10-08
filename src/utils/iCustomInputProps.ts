import { FieldType } from "./FieldType";

export interface iCustomInputProps {
  name: string;
  value: string;
  icon?: string;
  onChangeText(operation?: any, rawValue?: any): any;
  showPassword?: boolean;
  type?: FieldType;
  focus?: boolean;
  autoCapitalize?: string;
  includeRawValueInChangeText?: boolean;
  textContentType?: string;
  keyboardType?: string;
  autoCorrect?: boolean;
  autoCompleteType?: string;
}
