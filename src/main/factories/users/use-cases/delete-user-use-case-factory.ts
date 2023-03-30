import { DeleteUserUseCase } from "@application/use-cases/user";
import { UserRepository } from "@infra/database/repositories";

export const makeDeleteUserUseCase = (): DeleteUserUseCase => {
  return new DeleteUserUseCase(new UserRepository());
};
