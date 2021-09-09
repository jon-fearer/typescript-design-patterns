export class StringProcessor {
  private _stringProcessorStrategy: StringProcessorStrategy;

  constructor(stringProcessorStrategy: StringProcessorStrategy) {
    this._stringProcessorStrategy = stringProcessorStrategy;
  }

  public processString(input: string): string {
    return this._stringProcessorStrategy.processString(input);
  }
}

abstract class StringProcessorStrategy {
  public abstract processString(input: string): string;
}

export class UppercaseStringProcessorStrategy extends StringProcessorStrategy {
  public processString(input: string): string {
    return input.toUpperCase();
  }
}

export class ReverseStringProcessorStrategy extends StringProcessorStrategy {
  public processString(input: string): string {
    return input.split('').reverse().join('');
  }
}
