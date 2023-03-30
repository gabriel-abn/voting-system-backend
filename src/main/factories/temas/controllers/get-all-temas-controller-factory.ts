import { Controller } from "@presentation/common";
import { GetAllTemasController } from "@presentation/controllers/temas";
import { makeGetAllTemasUseCase } from "../use-cases";

export const makeGetAllTemasController = (): Controller => {
  return new GetAllTemasController(makeGetAllTemasUseCase());
};
