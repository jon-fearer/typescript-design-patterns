export class Logger {
  private _logData: string[] = [];
  private static _logger: Logger;

  private constructor() {}

  public static getLogger() {
    if (Logger._logger === undefined) {
      Logger._logger = new Logger();
    }
    return Logger._logger;
  }

  public get logData(): string[] {
    return this._logData;
  }

  public info(message: string): void {
    this._logData.push(message);
  }
}
