import { NewsAggregator, DomesticNewsAgency, InternationalNewsAgency } from '.';

describe('test observer pattern', () => {
  test('subjects should publish articles to the aggregator', () => {
    const newsAggregator = new NewsAggregator();
    const domesticNewsAgency = new DomesticNewsAgency();
    domesticNewsAgency.attach(newsAggregator);
    const internationalNewsAgency = new InternationalNewsAgency();
    internationalNewsAgency.attach(newsAggregator);
    expect(newsAggregator.articles).toHaveLength(0);
    domesticNewsAgency.postArticle('some article');
    internationalNewsAgency.postArticle('another article');
    expect(newsAggregator.articles).toHaveLength(2);
  });
});
