import { DeleteVotoUseCase } from "@application/use-cases/votos";
import { VotoRepository } from "@infra/database/repositories";

export const makeDeleteVotoUseCase = (): DeleteVotoUseCase => {
  return new DeleteVotoUseCase(new VotoRepository());
};
