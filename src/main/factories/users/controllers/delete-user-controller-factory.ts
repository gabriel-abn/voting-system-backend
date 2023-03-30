import { Controller } from "@presentation/common";
import { DeleteUserController } from "@presentation/controllers/user";
import { makeDeleteUserUseCase } from "../use-cases";

export const makeDeleteUserController = (): Controller => {
  return new DeleteUserController(makeDeleteUserUseCase());
};
