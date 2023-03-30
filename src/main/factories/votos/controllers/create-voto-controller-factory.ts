import { CreateVoto } from "@application/use-cases/votos";
import { ParamsValidator } from "@infra/validation";
import { Controller } from "@presentation/common";
import { CreateVotoController } from "@presentation/controllers/votos";
import { makeCreateVotoUseCase } from "../use-cases";

export const makeCreateVotoController = (): Controller => {
  return new CreateVotoController(
    makeCreateVotoUseCase(),
    new ParamsValidator<CreateVoto.Params>()
  );
};
