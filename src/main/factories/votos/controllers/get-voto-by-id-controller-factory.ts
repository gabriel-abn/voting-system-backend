import { Controller } from "@presentation/common";
import { GetVotoByIdController } from "@presentation/controllers/votos";
import { makeGetVotoByIdUseCase } from "../use-cases";

export const makeGetVotoByIdController = (): Controller => {
  return new GetVotoByIdController(makeGetVotoByIdUseCase());
};
