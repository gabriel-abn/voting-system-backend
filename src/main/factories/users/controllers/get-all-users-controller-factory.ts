import { Controller } from "@presentation/common";
import { GetAllUsersController } from "@presentation/controllers/user";
import { makeGetAllUsersUseCase } from "../use-cases";

export const makeGetAllUsersController = (): Controller => {
  return new GetAllUsersController(makeGetAllUsersUseCase());
};
