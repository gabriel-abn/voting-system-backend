import { ApplicationError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";
import { User, UserProps } from "@domain/user";

export namespace EditUser {
  export type Params = {
    id: number;
    nome: string;
    email: string;
    senha: string;
  };
  export type Result = UserProps;
}

export class EditUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(params: EditUser.Params): Promise<EditUser.Result> {
    const exists = await this.userRepository.findById(params.id);

    if (!exists) throw new ApplicationError("User not found");

    const user = User.create(
      {
        email: params.email,
        name: params.nome,
        password: params.senha,
        updatedAt: new Date(),
        createdAt: exists.props.createdAt,
        rememberToken: exists.props.rememberToken,
      },
      exists.id
    );

    return await this.userRepository.update(user);
  }
}
