import { RegisterUser } from "@application/use-cases/user";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { RegisterUserController } from "@presentation/controllers/user";
import { makeRegisterUserUseCase } from "../use-cases";

export const makeRegisterUserController = (): Controller => {
  return new RegisterUserController(
    makeRegisterUserUseCase(),
    new ParamsValidator<RegisterUser.Params>()
  );
};
