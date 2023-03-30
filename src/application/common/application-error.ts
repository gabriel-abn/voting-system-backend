export class ApplicationError extends Error {
  constructor(message: string) {
    super(message);
  }

  public toString(): string {
    return this.message;
  }
}
