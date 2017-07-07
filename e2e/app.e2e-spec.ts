import { JfreakAngularProjectPage } from './app.po';

describe('jfreak-angular-project App', () => {
  let page: JfreakAngularProjectPage;

  beforeEach(() => {
    page = new JfreakAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
