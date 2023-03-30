import { ApplicationError } from "@application/common";
import { IVotoRepository } from "@application/protocols/repostiories";

export namespace DeleteVoto {
  export type Params = {
    id: number;
  };
  export type Result = boolean;
}

export class DeleteVotoUseCase {
  constructor(private readonly votosRepository: IVotoRepository) {}

  async execute(params: DeleteVoto.Params): Promise<DeleteVoto.Result> {
    const voto = await this.votosRepository.findById(params.id);

    if (!voto) {
      throw new ApplicationError("Voto não encontrado");
    }

    const deleted = await this.votosRepository.delete(params.id);
    return deleted;
  }
}
