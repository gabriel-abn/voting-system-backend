import { Controller } from "@presentation/common";
import { GetAllVotosController } from "@presentation/controllers/votos";
import { makeGetAllVotosUseCase } from "../use-cases";

export const makeGetAllVotosController = (): Controller => {
  return new GetAllVotosController(makeGetAllVotosUseCase());
};
