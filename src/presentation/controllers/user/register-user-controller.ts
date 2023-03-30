import { ApplicationError } from "@application/common";
import {
  RegisterUser,
  RegisterUserUseCase,
} from "@application/use-cases/user/register-user-use-case";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
} from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class RegisterUserController implements Controller {
  constructor(
    private readonly registerUser: RegisterUserUseCase,
    private readonly validation: IParamsValidation
  ) {}

  async handle(request: RegisterUser.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const { name, email, password } = request;
      const user = await this.registerUser.execute({ name, email, password });

      return ok(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
