import { GetTemaByIdUseCase } from "@application/use-cases/temas";
import { TemaRepository } from "@infra/database/repositories";

export const makeGetTemaByIdUseCase = (): GetTemaByIdUseCase => {
  return new GetTemaByIdUseCase(new TemaRepository());
};
