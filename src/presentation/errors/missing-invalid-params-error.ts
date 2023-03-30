import { PresentationError } from "@presentation/common";

export class MissingInvalidParamsError extends PresentationError {
  constructor(params?: string[]) {
    super("Missing or invalid params: " + params?.join(", ") || "Missing or invalid params.");
  }
}
