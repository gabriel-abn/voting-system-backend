import { EditVotoUseCase } from "@application/use-cases/votos";
import { TemaRepository, VotoRepository } from "@infra/database/repositories";

export const makeEditVotoUseCase = (): EditVotoUseCase => {
  return new EditVotoUseCase(new VotoRepository(), new TemaRepository());
};
