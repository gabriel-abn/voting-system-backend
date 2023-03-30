import { CreateVotoUseCase } from "@application/use-cases/votos";
import { UserRepository, VotoRepository } from "@infra/database/repositories";
import { UUIDService } from "@infra/services";

export const makeCreateVotoUseCase = (): CreateVotoUseCase => {
  return new CreateVotoUseCase(new VotoRepository(), new UserRepository(), new UUIDService());
};
