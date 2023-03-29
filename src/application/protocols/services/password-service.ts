export interface IPasswordService {
  hash(password: string): Promise<string>;
}
