import { EducationGamesPage } from './app.po';

describe('education-games App', () => {
  let page: EducationGamesPage;

  beforeEach(() => {
    page = new EducationGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
