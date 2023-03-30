import { IVotoRepository } from "@application/protocols/repostiories";
import { VotoProps } from "@domain/votos";

export namespace GetAllVotos {
  export type Result = VotoProps[];
}

export class GetAllVotosUseCase {
  constructor(private readonly votosRepository: IVotoRepository) {}

  async execute(): Promise<GetAllVotos.Result> {
    return await this.votosRepository.getAll();
  }
}
