import { ApplicationError } from "@application/common";
import { IVotoRepository } from "@application/protocols/repostiories";
import { VotoProps } from "@domain/votos";

export namespace GetVotoById {
  export type Params = {
    id: number;
  };
  export type Result = VotoProps;
}

export class GetVotoByIdUseCase {
  constructor(private readonly votosRepository: IVotoRepository) {}

  async execute(params: GetVotoById.Params): Promise<GetVotoById.Result> {
    const { id } = params;

    const voto = await this.votosRepository.findById(id);

    if (!voto) {
      throw new ApplicationError("Voto não encontrado");
    }

    return voto;
  }
}
