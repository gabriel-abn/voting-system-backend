import { EditTema } from "@application/use-cases/temas";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { EditTemaController } from "@presentation/controllers/temas";
import { makeEditTemaUseCase } from "../use-cases";

export const makeEditTemaController = (): Controller => {
  return new EditTemaController(makeEditTemaUseCase(), new ParamsValidator<EditTema.Params>());
};
