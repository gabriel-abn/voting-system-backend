import { ApplicationError } from "@application/common";
import { CreateVoto, CreateVotoUseCase } from "@application/use-cases/votos";
import { Controller, HttpResponse, badRequest, ok, serverError } from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class CreateVotoController implements Controller {
  constructor(
    private readonly createVoto: CreateVotoUseCase,
    private readonly validator: IParamsValidation
  ) {}

  async handle(request: CreateVoto.Params): Promise<HttpResponse> {
    try {
      const params = this.validator.validate(request);

      if (params) {
        return badRequest(params);
      }

      const voto = await this.createVoto.execute(request);

      return ok(voto);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return badRequest(error);
      }

      return serverError(error);
    }
  }
}
