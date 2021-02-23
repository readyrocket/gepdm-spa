import { ReactNode } from 'react';

import { TResponse } from '../../@types/request.type';

export type AuthContextData = {
  signed: boolean,
  token?: string,
  loading: boolean,
  SignIn(email: string, password: string): Promise<TResponse>,
  SignOut(): void,
};

export type ContextProps = {
  children: ReactNode,
};
