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

      request.id = Number(request.id);

      const user = await this.editUser.execute(request);

      return ok(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
