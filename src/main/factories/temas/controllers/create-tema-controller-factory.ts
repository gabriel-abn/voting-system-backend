import { CreateTema } from "@application/use-cases/temas";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { CreateTemaController } from "@presentation/controllers/temas";
import { makeCreateTemaUseCase } from "../use-cases";

export const makeCreateTemaController = (): Controller => {
  return new CreateTemaController(
    makeCreateTemaUseCase(),
    new ParamsValidator<CreateTema.Params>()
  );
};
