import { Auth, IAuthService } from "@presentation/protocols";

export class AuthService implements IAuthService {
  async generateToken(email: string, password: string): Promise<string> {
    // TODO Implement a method that generates a token based on the email and password
    return "token";
  }
  async auth(params: Auth.Params): Promise<string> {
    const { email, password } = params;
    const token = await this.generateToken(email, password);
    return token;
  }
}
