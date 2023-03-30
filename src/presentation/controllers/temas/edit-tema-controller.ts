import { ApplicationError } from "@application/common";
import { EditTema, EditTemaUseCase } from "@application/use-cases/temas";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
} from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class EditTemaController implements Controller {
  constructor(
    private readonly editTema: EditTemaUseCase,
    private readonly validation: IParamsValidation
  ) {}

  async handle(request: EditTema.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      request.id = Number(request.id);

      const tema = await this.editTema.execute({
        id: request.id,
        nome: request.nome,
        descricao: request.descricao,
        ordem: request.ordem,
      });

      return ok(tema);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
