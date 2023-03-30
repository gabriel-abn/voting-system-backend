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

      const tema = await this.editTema.execute(request);

      return ok(tema);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
