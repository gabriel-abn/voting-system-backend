import { GetAllTemasUseCase } from "@application/use-cases/temas";
import { TemaRepository } from "@infra/database/repositories";

export const makeGetAllTemasUseCase = (): GetAllTemasUseCase => {
  return new GetAllTemasUseCase(new TemaRepository());
};
