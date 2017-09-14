import { MEANStackAppPage } from './app.po';

describe('meanstack-app App', () => {
  let page: MEANStackAppPage;

  beforeEach(() => {
    page = new MEANStackAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
