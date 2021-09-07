interface IntegerMathExpression {
  evaluate(): number;
}

class IntegerExpression implements IntegerMathExpression {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  evaluate(): number {
    return this._value;
  }
}

class PlusExpression implements IntegerMathExpression {
  private readonly _firstValue: IntegerMathExpression;
  private readonly _secondValue: IntegerMathExpression;

  constructor(firstValue: IntegerMathExpression, secondValue: IntegerMathExpression) {
    this._firstValue = firstValue;
    this._secondValue = secondValue;
  }

  evaluate(): number {
    return this._firstValue.evaluate() + this._secondValue.evaluate();
  };
}

class MinusExpression implements IntegerMathExpression {
  private readonly _firstValue: IntegerMathExpression;
  private readonly _secondValue: IntegerMathExpression;

  constructor(firstValue: IntegerMathExpression, secondValue: IntegerMathExpression) {
    this._firstValue = firstValue;
    this._secondValue = secondValue;
  }

  evaluate(): number {
    return this._firstValue.evaluate() - this._secondValue.evaluate();
  };
}

export class Interpreter {
  private _tokenQueue: IntegerMathExpression[];

  private parseToken(tokens: string[], index: number): IntegerMathExpression {
    const token = tokens[index];
    switch (token) {
      case '+':
        let firstPlusToken: IntegerMathExpression;
        if (index === 1) {
          firstPlusToken = new IntegerExpression(+(tokens[0]));
        } else {
          firstPlusToken = this._tokenQueue.pop();
        }
        const secondPlusToken = new IntegerExpression(+(tokens[index + 1]));
        return new PlusExpression(firstPlusToken, secondPlusToken);
      case '-':
        let firstMinusToken: IntegerMathExpression;
        if (index === 1) {
          firstMinusToken = new IntegerExpression(+(tokens[0]));
        } else {
          firstMinusToken = this._tokenQueue.pop();
        }
        const secondMinusToken = new IntegerExpression(+(tokens[index + 1]));
        return new MinusExpression(firstMinusToken, secondMinusToken);
      default:
        return null;
    }
  }

  interpretExpression(expression: string): number {
    this._tokenQueue = [];
    const tokens = expression.split(' ');
    for (let i = 0; i < tokens.length; i++) {
      const parsed = this.parseToken(tokens, i);
      if (parsed) {
        this._tokenQueue.push(parsed);
      }
    }
    return this._tokenQueue.pop().evaluate();
  }
}
