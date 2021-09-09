export class DataProcessor {
  private _etlTemplate: EtlTemplate;

  constructor(etlTemplate: EtlTemplate) {
    this._etlTemplate = etlTemplate;
  }

  public processData(): void {
    this._etlTemplate.processData();
  }
}

abstract class EtlTemplate {
  public processData(): void {
    const extracted = this.extractData();
    const transformed = this.transformData(extracted);
    this.loadData(transformed);
  }

  protected abstract extractData(): string;

  protected transformData(input: string): string {
    return input;
  }

  protected abstract loadData(input: string): void;
}

export class UppercaseEtlTemplate extends EtlTemplate {
  private _input = 'abc';
  private _output: string;

  public get output(): string {
    return this._output;
  }

  protected extractData(): string {
    return this._input;
  }

  protected transformData(input: string): string {
    return input.toUpperCase();
  }

  protected loadData(input: string) {
    this._output = input;
  }
}

export class ReverseStringEtlTemplate extends EtlTemplate {
  private _input = 'abc';
  private _output: string;

  public get output(): string {
    return this._output;
  }

  protected extractData(): string {
    return this._input;
  }

  protected transformData(input: string): string {
    return input.split('').reverse().join('');
  }

  protected loadData(input: string) {
    this._output = input;
  }
}
