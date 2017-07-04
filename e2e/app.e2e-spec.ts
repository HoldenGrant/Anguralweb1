import { Anguralweb1Page } from './app.po';

describe('anguralweb1 App', () => {
  let page: Anguralweb1Page;

  beforeEach(() => {
    page = new Anguralweb1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
