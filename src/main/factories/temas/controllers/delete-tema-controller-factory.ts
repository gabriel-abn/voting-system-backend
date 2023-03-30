import { Controller } from "@presentation/common";
import { DeleteTemaController } from "@presentation/controllers/temas";
import { makeDeleteTemaUseCase } from "../use-cases";

export const makeDeleteTemaController = (): Controller => {
  return new DeleteTemaController(makeDeleteTemaUseCase());
};
