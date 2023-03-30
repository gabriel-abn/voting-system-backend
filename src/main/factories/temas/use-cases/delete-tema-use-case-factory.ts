import { DeleteTemaUseCase } from "@application/use-cases/temas";
import { TemaRepository } from "@infra/database/repositories";

export const makeDeleteTemaUseCase = (): DeleteTemaUseCase => {
  return new DeleteTemaUseCase(new TemaRepository());
};
