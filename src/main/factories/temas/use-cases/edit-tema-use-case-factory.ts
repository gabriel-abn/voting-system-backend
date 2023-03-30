import { EditTemaUseCase } from "@application/use-cases/temas";
import { TemaRepository } from "@infra/database/repositories";

export const makeEditTemaUseCase = (): EditTemaUseCase => {
  return new EditTemaUseCase(new TemaRepository());
};
