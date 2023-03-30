import { ApplicationError } from "@application/common";
import { IUserRepository, IVotoRepository } from "@application/protocols/repostiories";
import { IUUIDService } from "@application/protocols/services";
import { Voto } from "@domain/votos";

export namespace CreateVoto {
  export type Params = {
    idTema: number;
    emailUsuario: string;
    opcao: number;
  };
  export type Result = boolean;
}

export class CreateVotoUseCase {
  constructor(
    private readonly repository: IVotoRepository,
    private readonly userRepository: IUserRepository,
    private readonly idGenerator: IUUIDService
  ) {}

  async execute(params: CreateVoto.Params): Promise<CreateVoto.Result> {
    const user = await this.userRepository.findByEmail(params.emailUsuario);

    const exists = await this.repository.findByTemaAndUsuario(params.idTema, user.id);

    if (exists) {
      throw new ApplicationError("Usuário já votou neste tema");
    }

    const idVoto = this.idGenerator.generate();

    const voto = Voto.create(
      { userId: user.id, opcao: params.opcao, data: new Date(), temaId: params.idTema },
      idVoto
    );

    return await this.repository.create(voto);
  }
}
