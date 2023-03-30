import { ApplicationError } from "@application/common";
import { DeleteTema, DeleteTemaUseCase } from "@application/use-cases/temas";
import { Controller, HttpResponse, notFound, ok, serverError } from "@presentation/common";

export class DeleteTemaController implements Controller {
  constructor(private readonly deleteTema: DeleteTemaUseCase) {}

  async handle(request: DeleteTema.Params): Promise<HttpResponse> {
    try {
      request.id = Number(request.id);
      const response = await this.deleteTema.execute(request);

      return ok(response);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
