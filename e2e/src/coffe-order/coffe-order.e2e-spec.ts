import {CoffeOrder} from './coffe-order.po'

describe('coffe-order', () => {

  let coffeOrder;

  beforeEach(() => {
    coffeOrder = new CoffeOrder();
  });


  it('should display coffer order message', () => {
    coffeOrder.navigateTo();
    expect(coffeOrder.getPageTitleText()).toEqual('Choose your best coffee ☕');
  });

  it('should display 10₺ for coffe americano', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('americano');
    expect(coffeOrder.getPriceText()).toEqual('Price: 10 ₺');
  });

  it('should display 15₺ for coffe white', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('white');
    expect(coffeOrder.getPriceText()).toEqual('Price: 15 ₺');
  });

  it('should disable button if user not select a coffe yet', ()=> {
    coffeOrder.navigateTo();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false)
  })


})