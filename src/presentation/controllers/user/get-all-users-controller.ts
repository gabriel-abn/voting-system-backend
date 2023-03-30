import { ApplicationError } from "@application/common";
import { GetAllUsersUseCase } from "@application/use-cases/user/get-all-users-use-case";
import { Controller, HttpResponse, notFound, ok, serverError } from "@presentation/common";

export class GetAllUsersController implements Controller {
  constructor(private readonly getAllUsers: GetAllUsersUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.getAllUsers.execute();

      return ok(users);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
