import { User, UserProps } from "@domain/user";

export interface IUserRepository {
  create(user: User): Promise<UserProps>;
  findByEmail(email: string): Promise<{ props: UserProps; id: number }>;
  findById(id: number): Promise<{ props: UserProps; id: number }>;
  getAll(): Promise<UserProps[]>;
  update(user: User): Promise<UserProps>;
  delete(id: number): Promise<boolean>;
}
