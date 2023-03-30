import { Voto, VotoProps } from "@domain/votos";

export interface IVotoRepository {
  create(voto: Voto): Promise<boolean>;
  findByTemaAndUsuario(
    idTema: number,
    idUsuario: number
  ): Promise<{ props: VotoProps; id: number }>;
  findById(id: number): Promise<VotoProps>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<VotoProps[]>;
  update(id: number, voto: VotoProps): Promise<VotoProps>;
}
