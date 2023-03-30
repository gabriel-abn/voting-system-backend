import { EditVoto } from "@application/use-cases/votos";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { EditVotoController } from "@presentation/controllers/votos";
import { makeEditVotoUseCase } from "../use-cases";

export const makeEditVotoController = (): Controller => {
  return new EditVotoController(makeEditVotoUseCase(), new ParamsValidator<EditVoto.Params>());
};
