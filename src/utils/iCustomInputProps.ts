import { FieldType } from "./FieldType";

export interface iCustomInputProps {
  name: string;
  value: string;
  icon?: string;
  onChangeText(operation: any): any;
  showPassword?: boolean;
  type?: FieldType;
  focus?: boolean;
}
