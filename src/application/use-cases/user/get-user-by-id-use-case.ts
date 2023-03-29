import { ApplicationError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";
import { UserProps } from "@domain/user";

export namespace GetUserById {
  export type Params = { id: number };
  export type Result = UserProps;
}

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({ id }: GetUserById.Params): Promise<GetUserById.Result> {
    const { props } = await this.userRepository.findById(id);

    if (!props) throw new ApplicationError("User not found");

    return props;
  }
}
