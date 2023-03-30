import { GetAllVotosUseCase } from "@application/use-cases/votos";
import { Controller, HttpResponse, ok, serverError } from "@presentation/common";

export class GetAllVotosController implements Controller {
  constructor(private readonly getAllVotos: GetAllVotosUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const votos = await this.getAllVotos.execute();

      return ok(votos);
    } catch (error) {
      return serverError(error);
    }
  }
}
