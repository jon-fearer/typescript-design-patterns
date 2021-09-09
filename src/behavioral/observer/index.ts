abstract class Subject {
  protected _observer: Observer;

  public attach(observer: Observer): void {
    this._observer = observer;
  }
}

export class DomesticNewsAgency extends Subject {
  private _articles: string[] = [];

  public postArticle(title: string): void {
    const article = `${title}. Posted On: ${new Date().toLocaleDateString()}`;
    this._articles.push(article);
    this._observer.update(article);
  }
}

export class InternationalNewsAgency extends Subject {
  private _articles: string[] = [];

  public postArticle(title: string): void {
    const article = `${title}. Posted On: ${new Date().toISOString()}`;
    this._articles.push(article);
    this._observer.update(article);
  }
}

abstract class Observer {
  public abstract update(value: string): void;
}

export class NewsAggregator extends Observer {
  private _articles: string[] = [];

  public get articles(): string[] {
    return this._articles;
  }

  public update(article: string): void {
    this._articles.push(article);
  }
}
