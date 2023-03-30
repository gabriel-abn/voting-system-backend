import { RegisterUserUseCase } from "@application/use-cases/user";
import { UserRepository } from "@infra/database/repositories";
import { PasswordService, UUIDService } from "@infra/services";

export const makeRegisterUserUseCase = (): RegisterUserUseCase => {
  return new RegisterUserUseCase(new UserRepository(), new PasswordService(10), new UUIDService());
};
