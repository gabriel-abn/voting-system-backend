import { ITemaRepository } from "@application/protocols/repostiories";
import { TemaProps } from "@domain/tema";

export namespace GetTemaById {
  export type Params = number;
  export type Result = TemaProps;
}

export class GetTemaByIdUseCase {
  constructor(private readonly repository: ITemaRepository) {}

  async execute(id: GetTemaById.Params): Promise<GetTemaById.Result> {
    return await this.repository.findById(id).then((tema) => tema.props);
  }
}
