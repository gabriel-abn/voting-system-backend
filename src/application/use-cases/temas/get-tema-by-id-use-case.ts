import { ITemaRepository } from "@application/protocols/repostiories";
import { TemaProps } from "@domain/tema";

export namespace GetTemaById {
  export type Params = {
    id: number;
  };
  export type Result = { props: TemaProps; id: number };
}

export class GetTemaByIdUseCase {
  constructor(private readonly repository: ITemaRepository) {}

  async execute(data: GetTemaById.Params): Promise<GetTemaById.Result> {
    return await this.repository.findById(data.id).then((tema) => {
      return {
        id: tema.id,
        props: {
          ...tema.props,
        },
      };
    });
  }
}
