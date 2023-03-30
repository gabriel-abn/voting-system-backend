import { RepositoryError } from "@application/common";
import { ITemaRepository } from "@application/protocols/repostiories";
import { Tema, TemaProps } from "@domain/tema";
import { PrismaClient } from "@prisma/client";
import { prismaService } from "../prisma/prisma-service";

export class TemaRepository implements ITemaRepository {
  constructor(private db: PrismaClient = prismaService) {}
  async create(tema: Tema): Promise<{ props: TemaProps; id: number }> {
    const [props, id] = tema.getProps();

    const result = await this.db.temas
      .create({
        data: {
          id,
          nome: props.nome,
          descricao: props.descricao,
          ordem: props.ordem,
        },
      })
      .then((tema) => {
        return {
          props: {
            nome: tema.nome,
            descricao: tema.descricao,
            ordem: tema.ordem,
          },
          id: tema.id,
        };
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async findById(id: number): Promise<{ props: TemaProps; id: number }> {
    const result = await this.db.temas
      .findUnique({ where: { id } })
      .then((tema) => {
        if (tema) {
          return {
            props: {
              nome: tema.nome,
              descricao: tema.descricao,
              ordem: tema.ordem,
            },
            id: tema.id,
          };
        }

        return null;
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async findByName(name: string): Promise<{ props: TemaProps; id: number }> {
    const result = await this.db.temas
      .findFirst({
        where: { nome: name },
      })
      .then((tema) => {
        if (tema) {
          return {
            props: {
              nome: tema.nome,
              descricao: tema.descricao,
              ordem: tema.ordem,
            },
            id: tema.id,
          };
        }

        return null;
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async update(tema: Tema): Promise<TemaProps> {
    const [props, id] = tema.getProps();

    const result = await this.db.temas
      .update({
        where: { id },
        data: {
          nome: props.nome,
          descricao: props.descricao,
          ordem: props.ordem,
        },
      })
      .then((tema) => {
        return {
          props: {
            nome: tema.nome,
            descricao: tema.descricao,
            ordem: tema.ordem,
          },
          id: tema.id,
        };
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result.props;
  }
  async delete(id: number): Promise<boolean> {
    const result = await this.db.temas
      .delete({ where: { id } })
      .then((tema) => {
        return true;
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async getAll(): Promise<TemaProps[]> {
    const result = await this.db.temas
      .findMany()
      .then((temas) => {
        return temas.map((tema) => {
          return {
            nome: tema.nome,
            descricao: tema.descricao,
            ordem: tema.ordem,
          };
        });
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
}
