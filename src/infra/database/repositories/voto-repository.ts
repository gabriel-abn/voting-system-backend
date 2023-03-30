import { RepositoryError } from "@application/common";
import { IVotoRepository } from "@application/protocols/repostiories";
import { Voto, VotoProps } from "@domain/votos";
import { PrismaClient } from "@prisma/client";
import { prismaService } from "../prisma/prisma-service";

export class VotoRepository implements IVotoRepository {
  constructor(private db: PrismaClient = prismaService) {}
  async create(voto: Voto): Promise<VotoProps> {
    const [props, id] = voto.getProps();

    const result = await this.db.votos
      .create({
        data: {
          id,
          tema_id: props.temaId,
          user_id: props.userId,
          opcao: props.opcao,
          createdAt: props.data,
        },
      })
      .then((voto) => {
        return {
          props: {
            temaId: voto.tema_id,
            userId: voto.user_id,
            opcao: voto.opcao,
            data: voto.createdAt,
          },
          id: voto.id,
        };
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result.props;
  }
  async findByTemaAndUsuario(
    idTema: number,
    idUsuario: number
  ): Promise<{ props: VotoProps; id: number }> {
    const result = await this.db.votos
      .findFirst({
        where: {
          tema_id: idTema,
          user_id: idUsuario,
        },
      })
      .then((voto) => {
        return {
          props: {
            temaId: voto.tema_id,
            userId: voto.user_id,
            opcao: voto.opcao,
            data: voto.createdAt,
          },
          id: voto.id,
        };
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async findById(id: number): Promise<VotoProps> {
    const result = await this.db.votos
      .findUnique({ where: { id } })
      .then((voto) => {
        return {
          temaId: voto.tema_id,
          userId: voto.user_id,
          opcao: voto.opcao,
          data: voto.createdAt,
        };
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async delete(id: number): Promise<boolean> {
    const result = await this.db.votos
      .delete({ where: { id } })
      .then((voto) => {
        return true;
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async getAll(): Promise<VotoProps[]> {
    const result = await this.db.votos
      .findMany()
      .then((votos) => {
        return votos.map((voto) => {
          return {
            temaId: voto.tema_id,
            userId: voto.user_id,
            opcao: voto.opcao,
            data: voto.createdAt,
          };
        });
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
  async update(id: number, voto: VotoProps): Promise<VotoProps> {
    const result = await this.db.votos
      .update({
        where: { id },
        data: {
          tema_id: voto.temaId,
          user_id: voto.userId,
          opcao: voto.opcao,
        },
      })
      .then((voto) => {
        return {
          temaId: voto.tema_id,
          userId: voto.user_id,
          opcao: voto.opcao,
          data: voto.createdAt,
        };
      })
      .catch((error) => {
        throw new RepositoryError(error);
      });

    return result;
  }
}
