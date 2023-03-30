import { GetAllVotosUseCase } from "@application/use-cases/votos";
import { VotoRepository } from "@infra/database/repositories";

export const makeGetAllVotosUseCase = (): GetAllVotosUseCase => {
  return new GetAllVotosUseCase(new VotoRepository());
};
