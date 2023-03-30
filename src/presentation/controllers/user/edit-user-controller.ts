import { ApplicationError } from "@application/common";
import { EditUser, EditUserUseCase } from "@application/use-cases/user/edit-user-use-case";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
} from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class EditUserController implements Controller {
  constructor(
    private readonly editUser: EditUserUseCase,
    private readonly validation: IParamsValidation
  ) {}

  async handle(request: EditUser.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const { id, name, email, password } = request;
      const user = await this.editUser.execute({ id, name, email, password });

      return ok(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
