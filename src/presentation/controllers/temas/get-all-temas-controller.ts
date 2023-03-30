import { GetAllTemasUseCase } from "@application/use-cases/temas";
import { Controller, HttpResponse, ok, serverError } from "@presentation/common";

export class GetAllTemasController implements Controller {
  constructor(private readonly getAllTemas: GetAllTemasUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const temas = await this.getAllTemas.execute();

      return ok(temas);
    } catch (error) {
      return serverError(error);
    }
  }
}
