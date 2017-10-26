import { ComponentAssignmentPage } from './app.po';

describe('component-assignment App', () => {
  let page: ComponentAssignmentPage;

  beforeEach(() => {
    page = new ComponentAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
