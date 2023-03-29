import { ApplicationError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";

export namespace DeleteUser {
  export type Params = {
    id: number;
  };
  export type Result = boolean;
}

export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({ id }: DeleteUser.Params): Promise<DeleteUser.Result> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new ApplicationError("User not found");
    }

    return await this.userRepository.delete(id);
  }
}
