export enum CredentialsTypes {
  SET_TOKEN = '@credentials/SET_TOKEN',
  GET_TOKEN = '@credentials/GET_TOKEN',
}

export interface Credential {
  token: string;
}

export interface CredentialsState {
  readonly token: string;
}
