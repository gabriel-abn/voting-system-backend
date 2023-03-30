import { ApplicationError } from "@application/common";
import { DeleteVoto, DeleteVotoUseCase } from "@application/use-cases/votos";
import { Controller, HttpResponse, notFound, ok, serverError } from "@presentation/common";

export class DeleteVotoController implements Controller {
  constructor(private readonly deleteVoto: DeleteVotoUseCase) {}

  async handle(request: DeleteVoto.Params): Promise<HttpResponse> {
    try {
      const response = await this.deleteVoto.execute(request);

      return ok(response);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
