import { Tema, TemaProps } from "@domain/tema";

export interface ITemaRepository {
  create(tema: Tema): Promise<{ props: TemaProps; id: number }>;
  findById(id: number): Promise<{ props: TemaProps; id: number }>;
  findByName(name: string): Promise<{ props: TemaProps; id: number }>;
  update(tema: Tema): Promise<TemaProps>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<TemaProps[]>;
}
