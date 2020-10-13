import { FieldType } from "../enums/FieldType";
import { CapitalizeType } from "../enums/CapitalizeType";

export interface iCustomInputProps {
  name: string;
  value: string;
  icon?: string;
  onChangeText(operation?: any, rawValue?: any): any;
  showPassword?: boolean;
  type?: FieldType;
  focus?: boolean;
  autoCapitalize?: CapitalizeType;
  includeRawValueInChangeText?: boolean;
  textContentType?: string;
  keyboardType?: string;
  autoCorrect?: boolean;
  autoCompleteType?: string;
}
