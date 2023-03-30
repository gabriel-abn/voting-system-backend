export abstract class PresentationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PresentationError";
  }

  public toString(): string {
    return `${this.name}: ${this.message}`;
  }
}
