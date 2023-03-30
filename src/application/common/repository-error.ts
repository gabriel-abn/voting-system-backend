export class RepositoryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RepositoryError";
  }

  public toString(): string {
    return `${this.name}: ${this.message}`;
  }
}
