export class DateLoggerContext {
  private _dateLoggerState: DateLoggerState;

  constructor() {
    this._dateLoggerState = new ISODateLoggerState();
  }

  public get dateLoggerState(): DateLoggerState {
    return this._dateLoggerState;
  }

  public logDate(): void {
    this._dateLoggerState.logDate(this);
  }

  public setState(dateLoggerState: DateLoggerState): void {
    this._dateLoggerState = dateLoggerState;
  }
}

interface DateLoggerState {
  logDate(dateLoggerContext: DateLoggerContext): void;
}

class ISODateLoggerState implements DateLoggerState {
  public logDate(dateLoggerContext: DateLoggerContext): void {
    console.log(new Date().toISOString());
    dateLoggerContext.setState(new LocaleDateLoggerState());
  }
}

class LocaleDateLoggerState implements DateLoggerState {
  public logDate(dateLoggerContext: DateLoggerContext): void {
    console.log(new Date().toLocaleDateString());
    dateLoggerContext.setState(new ISODateLoggerState());
  }
}
