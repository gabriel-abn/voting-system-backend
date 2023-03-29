import { Entity } from "./common/entity";

export type UserProps = {
  name: string;
  email: string;
  password: string;
  rememberToken: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id: number) {
    super(props, id);
  }

  static create(props: UserProps, id: number): User {
    return new User(props, id);
  }

  public passwordMatches(password: string): boolean {
    return this.props.password === password;
  }
}
