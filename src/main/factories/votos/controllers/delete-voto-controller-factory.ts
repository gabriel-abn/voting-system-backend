import { Controller } from "@presentation/common";
import { DeleteVotoController } from "@presentation/controllers/votos";
import { makeDeleteVotoUseCase } from "../use-cases";

export const makeDeleteVotoController = (): Controller => {
  return new DeleteVotoController(makeDeleteVotoUseCase());
};
