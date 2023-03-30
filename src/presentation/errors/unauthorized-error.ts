import { PresentationError } from "@presentation/common";

export class UnauthorizedError extends PresentationError {
  constructor() {
    super("Unauthorized");
    this.name = "UnauthorizedError";
  }
}
