import { GetVotoByIdUseCase } from "@application/use-cases/votos";
import { VotoRepository } from "@infra/database/repositories";

export const makeGetVotoByIdUseCase = (): GetVotoByIdUseCase => {
  return new GetVotoByIdUseCase(new VotoRepository());
};
