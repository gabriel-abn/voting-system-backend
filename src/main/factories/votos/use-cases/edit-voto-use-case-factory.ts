import { EditVotoUseCase } from "@application/use-cases/votos";
import { VotoRepository } from "@infra/database/repositories";

export const makeEditVotoUseCase = (): EditVotoUseCase => {
  return new EditVotoUseCase(new VotoRepository());
};
