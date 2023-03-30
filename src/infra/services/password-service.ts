import { IPasswordService } from "@application/protocols/services";
import bcrypt from "bcrypt";

export class PasswordService implements IPasswordService {
  constructor(private readonly salt: number) {}
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.salt);
  }
}
