import { ApplicationError } from "@application/common";
import { DeleteUser, DeleteUserUseCase } from "@application/use-cases/user/delete-user-use-case";
import { Controller, HttpResponse, notFound, ok, serverError } from "@presentation/common";

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUser: DeleteUserUseCase) {}

  async handle(request: DeleteUser.Params): Promise<HttpResponse> {
    try {
      request.id = Number(request.id);
      const response = await this.deleteUser.execute(request);

      return ok(response);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
