import { ApplicationError } from "@application/common";
import { ITemaRepository } from "@application/protocols/repostiories";
import { IUUIDService } from "@application/protocols/services";
import { Tema } from "@domain/tema";

export namespace CreateTema {
  export interface Params {
    nome: string;
    descricao: string;
    ordem: number;
  }
  export interface Result {
    id: number;
    nome: string;
  }
}

export class CreateTemaUseCase {
  constructor(private readonly temaRepository: ITemaRepository, private readonly uuidService: IUUIDService) {}

  async execute(params: CreateTema.Params): Promise<CreateTema.Result> {
    const exists = await this.temaRepository.findByName(params.nome);
    if (exists) {
      throw new ApplicationError("Tema already exists");
    }

    const id = this.uuidService.generate();

    const tema = Tema.create(
      {
        nome: params.nome,
        descricao: params.descricao,
        ordem: params.ordem,
      },
      id
    );

    const newTema = await this.temaRepository.create(tema);

    return {
      id,
      nome: newTema.nome,
    };
  }
}
