import { GetUserByIdUseCase } from "@application/use-cases/user";
import { UserRepository } from "@infra/database/repositories";

export const makeGetUserByIdUseCase = (): GetUserByIdUseCase => {
  return new GetUserByIdUseCase(new UserRepository());
};
