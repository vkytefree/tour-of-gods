import { TourOfGodsPage } from './app.po';

describe('tour-of-gods App', function() {
  let page: TourOfGodsPage;

  beforeEach(() => {
    page = new TourOfGodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
