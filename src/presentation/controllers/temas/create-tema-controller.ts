import { ApplicationError } from "@application/common";
import { CreateTema, CreateTemaUseCase } from "@application/use-cases/temas";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
} from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class CreateTemaController implements Controller {
  constructor(
    private readonly createTema: CreateTemaUseCase,
    private readonly validation: IParamsValidation
  ) {}

  async handle(request: CreateTema.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const tema = await this.createTema.execute(request);

      return ok(tema);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
