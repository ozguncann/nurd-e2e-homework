import { CoffeOrder } from './coffe-order.po'
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

describe('coffe-order', () => {

  let coffeOrder;

  beforeEach(() => {
    coffeOrder = new CoffeOrder();
    coffeOrder.navigateTo();
  });


  it('should display page heading as Choose your best coffee ☕', () => {
    
    expect(coffeOrder.getTitleText()).toEqual('Choose your best coffee ☕');
  });

  it('should display Price: 10₺ after adding americano to cart', () => {
    
    expect(coffeOrder.getAmericanoPrice()).toEqual('Price: 10 ₺');
  });

  it('should display Price: 15₺ after adding white to cart', () => {

    expect(coffeOrder.getWhitePrice()).toEqual('Price: 15 ₺');
  });

  it('should disable button if user didn\'t select a coffee yet', () => {
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  });


  it('should display Price: 40 ₺ for coffe 2 white and 1 americano after adding to cart', () => {
    coffeOrder.getAmericanoPrice();
    coffeOrder.getWhitePrice();
    coffeOrder.getWhitePrice();
    expect(coffeOrder.getPrice()).toEqual('Price: 40 ₺');
  });

  it('should display Price: 12 ₺ after adding 1 latte to cart', () => {
    expect(coffeOrder.getLattePrice()).toEqual('Price: 12 ₺');
  });


  it('should display Price: 25 ₺ after adding  2 white and 1 americano and removing one white', () => {
    coffeOrder.getWhitePrice();
    coffeOrder.getWhitePrice();
    coffeOrder.getAmericanoPrice();
    coffeOrder.pressRemoveButton();
    expect(coffeOrder.getPrice()).toEqual('Price: 25 ₺');
  });

  it('should display Price: 0 ₺ after adding 2 chaitea and 1 americano and removing all items in cart', () => {
    coffeOrder.getChaiteaPrice();
    coffeOrder.getChaiteaPrice();
    coffeOrder.getAmericanoPrice();
    coffeOrder.pressThirdRemoveButton();
    coffeOrder.pressSecondRemoveButton();
    coffeOrder.pressRemoveButton();
 
    expect(coffeOrder.getPrice()).toEqual('Price: 0 ₺');
  })


  it('should display disable button after adding 2 white and 1 americano and removing all coffees', () => {
    coffeOrder.getWhitePrice();
    coffeOrder.getWhitePrice();
    coffeOrder.getAmericanoPrice();
    coffeOrder.pressThirdRemoveButton();
    coffeOrder.pressSecondRemoveButton();
    coffeOrder.pressRemoveButton();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  })

  it(`should display Price: 41 ₺ after adding 1 white, 1 chaitea, 1 americano
   and should disable buy button after clicking buy button and accepting alert`, () => {
    coffeOrder.getWhitePrice();
    coffeOrder.getChaiteaPrice();
    coffeOrder.getAmericanoPrice();
    expect(coffeOrder.getPrice()).toEqual('Price: 41 ₺');
    coffeOrder. clickBuyButton();
    coffeOrder.clickAlertButton();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  })

  it('should display Price: 38 ₺ after adding 1 latte, 1 chaitea, 1 americano', () => {
    coffeOrder.getLattePrice()
    coffeOrder.getChaiteaPrice();
    coffeOrder.getAmericanoPrice();
    expect(coffeOrder.getPrice()).toEqual('Price: 38 ₺');
  })






})
