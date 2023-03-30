import { ApplicationError } from "@application/common";
import {
  GetUserById,
  GetUserByIdUseCase,
} from "@application/use-cases/user/get-user-by-id-use-case";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
} from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class GetUserByIdController implements Controller {
  constructor(
    private readonly paramsValidation: IParamsValidation,
    private readonly getUserById: GetUserByIdUseCase
  ) {}

  async handle(request: GetUserById.Params): Promise<HttpResponse> {
    try {
      const error = this.paramsValidation.validate(request);

      if (error) {
        return badRequest(error);
      }

      request.id = Number(request.id);

      const user = await this.getUserById.execute(request);

      return ok(user);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
