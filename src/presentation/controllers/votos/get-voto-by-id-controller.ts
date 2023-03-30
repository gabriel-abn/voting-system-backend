import { ApplicationError } from "@application/common";
import { GetVotoById, GetVotoByIdUseCase } from "@application/use-cases/votos";
import { Controller, HttpResponse, notFound, ok, serverError } from "@presentation/common";

export class GetVotoByIdController implements Controller {
  constructor(private readonly getVotoById: GetVotoByIdUseCase) {}

  async handle(request: GetVotoById.Params): Promise<HttpResponse> {
    try {
      request.id = Number(request.id);

      const voto = await this.getVotoById.execute(request);

      return ok(voto);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
