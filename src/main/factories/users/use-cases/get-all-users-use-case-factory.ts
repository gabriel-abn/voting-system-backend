import { GetAllUsersUseCase } from "@application/use-cases/user";
import { UserRepository } from "@infra/database/repositories";

export const makeGetAllUsersUseCase = (): GetAllUsersUseCase => {
  return new GetAllUsersUseCase(new UserRepository());
};
