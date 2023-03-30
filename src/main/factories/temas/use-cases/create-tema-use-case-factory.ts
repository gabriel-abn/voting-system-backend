import { CreateTemaUseCase } from "@application/use-cases/temas";
import { TemaRepository } from "@infra/database/repositories";
import { UUIDService } from "@infra/services";

export const makeCreateTemaUseCase = (): CreateTemaUseCase => {
  return new CreateTemaUseCase(new TemaRepository(), new UUIDService());
};
