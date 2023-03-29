import { Entity } from "./common/entity";

export type TemaProps = {
  nome: string;
  descricao: string;
  ordem: number;
};

export class Tema extends Entity<TemaProps> {
  private constructor(props: TemaProps, id: number) {
    super(props, id);
  }

  static create(props: TemaProps, id: number): Tema {
    return new Tema(props, id);
  }
}
