import { Login } from "@application/use-cases/user";
import { AuthService, ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { LoginController } from "@presentation/controllers/user";

export const makeLoginController = (): Controller => {
  return new LoginController(new AuthService(), new ParamsValidator<Login.Params>());
};
