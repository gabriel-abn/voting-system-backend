import { Entity } from "./common/entity";

export type VotoProps = {
  userId: number;
  temaId: number;
  opcao: number;
  data: Date;
};

export class Voto extends Entity<VotoProps> {
  private constructor(props: VotoProps, id: number) {
    super(props, id);
  }

  static create(props: VotoProps, id: number): Voto {
    return new Voto(props, id);
  }
}
