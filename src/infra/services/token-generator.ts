import { ITokenGenerator } from "@application/protocols/services";
import bcrypt from "bcrypt";

export class TokenGenerator implements ITokenGenerator {
  async generate(userId: number): Promise<string> {
    return await bcrypt.hash(userId.toString(), 10);
  }
}
