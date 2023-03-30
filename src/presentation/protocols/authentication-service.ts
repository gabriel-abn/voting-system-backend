export namespace Auth {
  export type Params = {
    email: string;
    password: string;
  };
  export type Result = string;
}

export interface IAuthService {
  generateToken(email: string, password: string): Promise<string>;
  auth(params: Auth.Params): Promise<Auth.Result>;
}
