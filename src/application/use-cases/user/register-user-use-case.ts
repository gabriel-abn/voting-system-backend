import { ApplicationError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";
import { IPasswordService, IUUIDService } from "@application/protocols/services";
import { User } from "@domain/user";

export namespace RegisterUser {
  export interface Params {
    name: string;
    email: string;
    password: string;
  }
  export interface Result {
    id: number;
    name: string;
    email: string;
  }
}

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordService: IPasswordService,
    private readonly uuidService: IUUIDService
  ) {}

  async execute(params: RegisterUser.Params): Promise<RegisterUser.Result> {
    const exists = await this.userRepository.findByEmail(params.email);
    if (exists) {
      throw new ApplicationError("User already exists");
    }

    const hashedPassword = await this.passwordService.hash(params.password);
    const id = this.uuidService.generate();

    const user = User.create(
      {
        name: params.name,
        email: params.email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
        rememberToken: "",
      },
      id
    );

    const newUser = await this.userRepository.create(user);

    return {
      id,
      name: newUser.name,
      email: newUser.email,
    };
  }
}
