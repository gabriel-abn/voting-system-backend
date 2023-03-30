import { EditUserUseCase } from "@application/use-cases/user";
import { UserRepository } from "@infra/database/repositories";

export const makeEditUserUseCase = (): EditUserUseCase => {
  return new EditUserUseCase(new UserRepository());
};
