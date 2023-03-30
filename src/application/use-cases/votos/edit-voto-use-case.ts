import { ApplicationError } from "@application/common";
import { ITemaRepository, IVotoRepository } from "@application/protocols/repostiories";
import { VotoProps } from "@domain/votos";

export namespace EditVoto {
  export type Params = {
    id: number;
    voto: VotoProps;
  };
  export type Result = VotoProps;
}

export class EditVotoUseCase {
  constructor(
    private readonly votosRepository: IVotoRepository,
    private readonly temaRepository: ITemaRepository
  ) {}

  async execute(params: EditVoto.Params): Promise<EditVoto.Result> {
    const { id, voto } = params;

    const exist = await this.votosRepository.findById(id);

    if (!exist) {
      throw new ApplicationError("Voto não encontrado");
    }

    const tema = await this.temaRepository.findById(voto.temaId);

    if (!tema) {
      throw new ApplicationError("Tema não encontrado");
    }

    const votoUpdated = await this.votosRepository.update(id, voto);
    return votoUpdated;
  }
}
