import { ITemaRepository } from "@application/protocols/repostiories";
import { TemaProps } from "@domain/tema";

export namespace GetAllTemas {
  export type Params = void;
  export type Result = TemaProps[];
}

export class GetAllTemasUseCase {
  constructor(private readonly repository: ITemaRepository) {}

  async execute(): Promise<GetAllTemas.Result> {
    return await this.repository.getAll();
  }
}
