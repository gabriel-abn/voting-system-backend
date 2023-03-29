import { IUserRepository } from "@application/protocols/repostiories";
import { UserProps } from "@domain/user";

export namespace GetAllUsers {
  export type Result = UserProps[];
}

export class GetAllUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<GetAllUsers.Result> {
    return this.userRepository.getAll();
  }
}
