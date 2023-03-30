import { RepositoryError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";
import { User, UserProps } from "@domain/user";
import { PrismaClient } from "@prisma/client";
import { prismaService } from "../prisma/prisma-service";

export class UserRepository implements IUserRepository {
  constructor(private db: PrismaClient = prismaService) {}

  async create(user: User): Promise<UserProps> {
    const [props, id] = user.getProps();

    const result = await this.db.users
      .create({
        data: {
          id,
          email: props.email,
          password: props.password,
          name: props.name,
          type: 1,
          remember_token: props.rememberToken ? props.rememberToken : "",
        },
      })
      .then((user) => {
        return {
          id: user.id,
          email: user.email,
          password: user.password,
          name: user.name,
          type: user.type,
          rememberToken: user.remember_token,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      })
      .catch((err) => {
        throw new RepositoryError(err);
      });

    return { ...result };
  }
  async findByEmail(email: string): Promise<{ props: UserProps; id: number }> {
    const result = await this.db.users
      .findUnique({
        where: {
          email,
        },
      })
      .then((user) => {
        if (user) {
          return {
            props: {
              id: user.id,
              email: user.email,
              password: user.password,
              name: user.name,
              type: user.type,
              rememberToken: user.remember_token,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            },
            id: user.id,
          };
        }

        return null;
      })
      .catch((err) => {
        throw new RepositoryError(err);
      });

    return { ...result };
  }
  async findById(id: number): Promise<{ props: UserProps; id: number }> {
    const result = await this.db.users
      .findUnique({
        where: {
          id,
        },
      })
      .then((user) => {
        if (user) {
          return {
            props: {
              id: user.id,
              email: user.email,
              password: user.password,
              name: user.name,
              type: user.type,
              rememberToken: user.remember_token,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            },
            id: user.id,
          };
        }

        return null;
      })
      .catch((err) => {
        throw new RepositoryError(err);
      });

    return { ...result };
  }
  async getAll(): Promise<UserProps[]> {
    const result = await this.db.users
      .findMany({})
      .then((users) => {
        return users.map((user) => {
          return {
            id: user.id,
            email: user.email,
            password: user.password,
            name: user.name,
            type: user.type,
            rememberToken: user.remember_token,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          };
        });
      })
      .catch((err) => {
        throw new RepositoryError(err);
      });

    return [...result];
  }
  async update(user: User): Promise<UserProps> {
    const [props, id] = user.getProps();

    const result = await this.db.users
      .update({
        where: {
          id,
        },
        data: {
          email: props.email,
          password: props.password,
          name: props.name,
          type: 1,
          remember_token: props.rememberToken ? props.rememberToken : "",
        },
      })
      .then((user) => {
        return {
          id: user.id,
          email: user.email,
          password: user.password,
          name: user.name,
          type: user.type,
          rememberToken: user.remember_token,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      })
      .catch((err) => {
        throw new RepositoryError(err);
      });

    return { ...result };
  }
  async delete(id: number): Promise<boolean> {
    const result = await this.db.users
      .delete({
        where: {
          id,
        },
      })
      .then((user) => true)
      .catch((err) => {
        throw new RepositoryError(err);
      });

    return result;
  }
}
