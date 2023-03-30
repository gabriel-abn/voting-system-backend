import { ApplicationError } from "@application/common";
import { IVotoRepository } from "@application/protocols/repostiories";
import { VotoProps } from "@domain/votos";

export namespace EditVoto {
  export type Params = {
    id: number;
    voto: VotoProps;
  };
  export type Result = VotoProps;
}

export class EditVotoUseCase {
  constructor(private readonly votosRepository: IVotoRepository) {}

  async execute(params: EditVoto.Params): Promise<EditVoto.Result> {
    const { id, voto } = params;

    const exist = await this.votosRepository.findById(id);

    if (!exist) {
      throw new ApplicationError("Voto não encontrado");
    }

    const votoUpdated = await this.votosRepository.update(id, voto);
    return votoUpdated;
  }
}
