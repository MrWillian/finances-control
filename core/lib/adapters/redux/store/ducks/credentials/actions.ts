import { action } from 'typesafe-actions';
import { CredentialsTypes, Credential } from './types';

export const setToken = (token: Credential) => action(CredentialsTypes.SET_TOKEN, { token });

export const getToken = () => action(CredentialsTypes.GET_TOKEN);
