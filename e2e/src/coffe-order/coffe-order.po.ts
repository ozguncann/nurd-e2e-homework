import { browser, by, element } from 'protractor';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
//import { addToBasket } from '@src\app\coffe-order\coffe-order.component.html';

export class CoffeOrder {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.id('coffe-title')).getText() as Promise<string>;
  }
 

  getPrice() {
   
   
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/p[1]')).getText() as Promise<string>;
    
  }
  
  remove(){

    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div[2]/div/div/div/button')).click();
  }

  getAmericanoPrice() {
    element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[1]/div/div/button')).click();
   
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/p[1]')).getText() as Promise<string>;
  }

  getWhitePrice() {
    element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div[1]/div[2]/div/div/button')).click();
   
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/p[1]')).getText() as Promise<string>;
  }

  getChaiteaPrice() {
    element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[3]/div/div/button')).click();
   
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/p[1]')).getText() as Promise<string>;
  }

  getLattePrice() {
    element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[4]/div/div/button')).click();
   
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/p[1]')).getText() as Promise<string>;
  }

  pressRemoveButton(){
    return(element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div[2]/div/div/div/button')).click());
    
  }

  pressSecondRemoveButton(){
    return(element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div[2]/div[2]/div/div/button')).click());
  }

  pressThirdRemoveButton(){
    return(element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div[2]/div[3]/div/div/button')).click());

  }

  getBuyButtonStatus(){
    return element(by.id('buy-button')).isEnabled();
  }

  clickBuyButton()
  {
    return(element(by.xpath(' //*[@id="buy-button"]')).click());
  }

  clickAlertButton()
  {
    return browser.switchTo().alert().accept();
  }
  /**
   * 
   * @param string Given string will be returned first character uppercased.
   */
  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
  * 
  * @param string Given string will be returned first character lowercased.
  */
  jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
}
