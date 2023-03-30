import { ApplicationError } from "@application/common";
import { ITemaRepository } from "@application/protocols/repostiories";
import { Tema, TemaProps } from "@domain/tema";

export namespace EditTema {
  export type Params = {
    id: number;
    nome: string;
    descricao: string;
    ordem: number;
  };
  export type Result = TemaProps;
}

export class EditTemaUseCase {
  constructor(private readonly temaRepository: ITemaRepository) {}

  async execute(params: EditTema.Params): Promise<EditTema.Result> {
    const exists = await this.temaRepository.findById(params.id);

    if (!exists) throw new ApplicationError("Tema not found");

    const tema = Tema.create(
      {
        nome: params.nome,
        descricao: params.descricao,
        ordem: params.ordem,
      },
      exists.id
    );

    return await this.temaRepository.update(tema);
  }
}
