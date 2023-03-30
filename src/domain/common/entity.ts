export abstract class Entity<T> {
  private readonly id: number;
  protected readonly props: T;

  constructor(props: T, id: number) {
    this.props = props;
    this.id = id;
  }

  public getProps(): [T, number] {
    return [this.props, this.id];
  }
}
