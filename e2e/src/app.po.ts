import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath("/html/body/app-root/app-pokemon/section/div/div[1]/header/span")).getText() as Promise<string>;
  }
}
