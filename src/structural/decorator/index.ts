interface ILogger {
  log(message: string): void;
}

export class Logger implements ILogger {
  public log(message: string): void {
    console.log(message);
  }
}

export class ExcitingLogMessageDecorator implements ILogger {
  private _logger: ILogger;

  constructor(logger: ILogger) {
    this._logger = logger;
  }

  public log(message: string): void {
    this._logger.log(`${message.toUpperCase()}!`);
  }
}
