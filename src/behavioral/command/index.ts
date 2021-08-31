interface IReceiver {
  doSomething(): void;
}

export class Dog implements IReceiver {
  public doSomething() {
    console.log('woof');
  }
}

export class Cat implements IReceiver {
  public doSomething() {
    console.log('meow');
  }
}

interface ICommand {
  execute(): void;
}

export class SimpleCommand implements ICommand {
  private _receiver: IReceiver;

  constructor(receiver: IReceiver) {
    this._receiver = receiver;
  }

  execute() {
    this._receiver.doSomething();
  }
}
