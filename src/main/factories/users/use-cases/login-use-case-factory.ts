import { LoginUseCase } from "@application/use-cases/user";
import { UserRepository } from "@infra/database/repositories";
import { TokenGenerator } from "@infra/services";

export const makeLoginUseCase = (): LoginUseCase => {
  return new LoginUseCase(new UserRepository(), new TokenGenerator());
};
