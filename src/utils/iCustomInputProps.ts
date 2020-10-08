import { FieldType } from "./FieldType";
import { CapitalizeType } from "./CapitalizeType";

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
