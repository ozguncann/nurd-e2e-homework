import { browser, by, element } from 'protractor';

export class CoffeOrder {
  




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