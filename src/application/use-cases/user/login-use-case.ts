import { ApplicationError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";
import { ITokenGenerator } from "@application/protocols/services";
import { User } from "@domain/user";

export namespace Login {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    token: string;
  };
}

export class LoginUseCase {
  constructor(private readonly userRepository: IUserRepository, private readonly tokenGenerator: ITokenGenerator) {}

  async execute(params: Login.Params): Promise<Login.Result> {
    const exists = await this.userRepository.findByEmail(params.email);

    if (!exists) {
      throw new ApplicationError("User not found");
    }

    const user = User.create(exists.props, exists.id);

    if (!user.passwordMatches(params.password)) {
      throw new Error("Invalid password");
    }

    const token = await this.tokenGenerator.generate(exists.id);

    return {
      token,
    };
  }
}
