import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Teste da pagina inicial', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve exibir uma mensagem na pagina inicial', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pokémon TCG Developers');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
