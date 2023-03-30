import { GetUserById } from "@application/use-cases/user";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { GetUserByIdController } from "@presentation/controllers/user";
import { makeGetUserByIdUseCase } from "../use-cases";

export const makeGetUserByIdController = (): Controller => {
  return new GetUserByIdController(
    new ParamsValidator<GetUserById.Params>(),
    makeGetUserByIdUseCase()
  );
};
