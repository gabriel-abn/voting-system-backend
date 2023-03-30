import { ApplicationError } from "@application/common";
import { IUserRepository } from "@application/protocols/repostiories";
import { IPasswordService, IUUIDService } from "@application/protocols/services";
import { User } from "@domain/user";

export namespace RegisterUser {
  export interface Params {
    nome: string;
    email: string;
    senha: string;
  }
  export interface Result {
    id: number;
    nome: string;
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

    if (exists.id) {
      throw new ApplicationError("User already exists");
    }

    const hashedPassword = await this.passwordService.hash(params.senha);
    const id = this.uuidService.generate();

    const user = User.create(
      {
        name: params.nome,
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
      nome: newUser.name,
      email: newUser.email,
    };
  }
}
