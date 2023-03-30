import { ApplicationError } from "@application/common";
import { Login } from "@application/use-cases/user/login-use-case";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
  unauthorized,
} from "@presentation/common";
import { IAuthService, IParamsValidation } from "@presentation/protocols";

export class LoginController implements Controller {
  constructor(
    private readonly authentication: IAuthService,
    private readonly validation: IParamsValidation
  ) {}

  async handle(request: Login.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const { email, password } = request;
      const accessToken = await this.authentication.auth({ email, password });

      if (!accessToken) {
        return unauthorized();
      }

      return ok({ accessToken });
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
