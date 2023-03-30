import { ApplicationError } from "@application/common";
import { ITemaRepository } from "@application/protocols/repostiories";

export namespace DeleteTema {
  export type Params = {
    id: number;
  };
  export type Result = boolean;
}

export class DeleteTemaUseCase {
  constructor(private readonly repository: ITemaRepository) {}

  async execute(data: DeleteTema.Params): Promise<DeleteTema.Result> {
    const exists = await this.repository.findById(data.id);

    if (!exists) {
      throw new ApplicationError("Tema não encontrado");
    }

    return await this.repository.delete(exists.id);
  }
}
