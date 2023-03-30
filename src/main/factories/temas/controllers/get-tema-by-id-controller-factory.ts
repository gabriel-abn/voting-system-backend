import { GetTemaById } from "@application/use-cases/temas";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { GetTemaByIdController } from "@presentation/controllers/temas";
import { makeGetTemaByIdUseCase } from "../use-cases";

export const makeGetTemaByIdController = (): Controller => {
  return new GetTemaByIdController(
    makeGetTemaByIdUseCase(),
    new ParamsValidator<GetTemaById.Params>()
  );
};
