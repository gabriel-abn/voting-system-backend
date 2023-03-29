export interface ITokenGenerator {
  generate(userId: number): Promise<string>;
}
