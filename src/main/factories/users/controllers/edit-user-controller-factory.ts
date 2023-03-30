import { EditUser } from "@application/use-cases/user";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { EditUserController } from "@presentation/controllers/user";
import { makeEditUserUseCase } from "../use-cases";

export const makeEditUserController = (): Controller => {
  return new EditUserController(makeEditUserUseCase(), new ParamsValidator<EditUser.Params>());
};
