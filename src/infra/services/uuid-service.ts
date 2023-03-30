import { IUUIDService } from "@application/protocols/services";

export class UUIDService implements IUUIDService {
  generate(): number {
    return Math.floor(Math.random() * 100000);
  }
}
