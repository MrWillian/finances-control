import { FieldType } from "./FieldType";

export interface iCustomInputProps {
  name: string;
  value: string;
  icon?: string;
  onChangeText(value: any, rawValue: any): any;
  showPassword?: boolean;
  type?: FieldType;
  focus?: boolean;
  includeRawValueInChangeText?: boolean;
}
