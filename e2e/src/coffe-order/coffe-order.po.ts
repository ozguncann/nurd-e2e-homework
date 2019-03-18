import { browser, by, element } from 'protractor';

export class CoffeOrder {
  navigateTo() {
    return browser.get('/');
  }

  clickButton(buttonId) {
    element(by.id(buttonId)).click();
  }

  getPriceText(){
    return element(by.css('.price')).getText();
  }

  getBuyButtonStatus(){
    return element(by.id('buy-button')).isEnabled()
  }

  getPageTitleText() {
    return element(by.id('coffe-title')).getText();
  }
}