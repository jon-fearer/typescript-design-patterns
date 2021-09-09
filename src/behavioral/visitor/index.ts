interface IVisitor {
  visitDog(dog: Dog): string;
  visitHuman(human: Human): string;
}

export class NameVisitor implements IVisitor {
  public visitDog(dog: Dog): string {
    return dog.name;
  }

  public visitHuman(human: Human): string {
    return human.name;
  }
}

interface IAnimal {
  readonly name: string;
  accept(visitor: IVisitor): any;
}

export class Dog implements IAnimal {
  private readonly _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public accept(visitor: IVisitor): string {
    return visitor.visitDog(this);
  }
}

export class Human implements IAnimal {
  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get name(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  public accept(visitor: IVisitor): string {
    return visitor.visitHuman(this);
  }
}
