import { ApplicationError } from "@application/common";
import { GetTemaById, GetTemaByIdUseCase } from "@application/use-cases/temas";
import {
  Controller,
  HttpResponse,
  badRequest,
  notFound,
  ok,
  serverError,
} from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class GetTemaByIdController implements Controller {
  constructor(
    private readonly getTemaByIdUseCase: GetTemaByIdUseCase,
    private readonly validator: IParamsValidation
  ) {}

  async handle(request: GetTemaById.Params): Promise<HttpResponse> {
    try {
      const error = this.validator.validate(request);

      if (error) {
        return badRequest(error);
      }

      request.id = Number(request.id);

      const tema = await this.getTemaByIdUseCase.execute(request);

      return ok(tema);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
