import { ApplicationError } from "@application/common";
import { EditVoto, EditVotoUseCase } from "@application/use-cases/votos";
import { Controller, HttpResponse, badRequest, ok, serverError } from "@presentation/common";
import { IParamsValidation } from "@presentation/protocols";

export class EditVotoController implements Controller {
  constructor(
    private readonly editVoto: EditVotoUseCase,
    private readonly validator: IParamsValidation
  ) {}

  async handle(request: EditVoto.Params): Promise<HttpResponse> {
    try {
      const params = this.validator.validate(request);

      if (params) {
        return badRequest(params);
      }

      request.id = Number(request.id);

      const voto = await this.editVoto.execute(request);

      return ok(voto);
    } catch (error) {
      if (error instanceof ApplicationError) {
        return badRequest(error);
      }

      return serverError(error);
    }
  }
}
