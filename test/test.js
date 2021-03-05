const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Unit Test", function() {

  it("Medium Coverage precio 20 debe ser 19", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(19);
    expect(products[0].sellIn).equals(9);
  });

  it("Full Coverage precio 0 despues de 1 dia el precio debe ser 1", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(1);
  });

  it("Super Sale precio 27 despues de un dia el precio debe bajar el doble y ser 25", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 6, 27) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(25);
  });

  it("Cualquier otro producto precio 35 despues de 1 dia el valor debe ser 34", function() {
    const coTest = new CarInsurance([ new Product("Producto Nuevo", 10, 35) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(34);
    expect(products[0].sellIn).equal(9);
  });

  it("Super Sales precio 45 despues de 6 dias el precio deberia ser 33", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 5, 45) ]);
    const products = {};
    for(let i = 1; i <= 6; i += 1){
      coTest.updatePrice(); 
    }
    expect(coTest.products[0].price).equal(33);
    expect(coTest.products[0].sellIn).equal(-1);
  });

  it("Super Sales precio 45 despues de 15 dias el precio deberia ser 15", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 5, 45) ]);
    const products = {};
    for(let i = 1; i <= 15; i += 1){
      coTest.updatePrice(); 
    }
    expect(coTest.products[0].price, "Precio").equal(15);
    expect(coTest.products[0].sellIn, "SellIn").equal(-10);
  });

  it("Super Sales precio 45 despues de 22 dias el precio deberia ser 1", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 5, 45) ]);
    const products = {};
    for(let i = 1; i <= 22; i += 1){
      coTest.updatePrice(); 
    }
    expect(coTest.products[0].price, "Precio").equal(1);
    expect(coTest.products[0].sellIn, "SellIn").equal(-17);
  });

  it("Super Sales precio 20 despues de 15 dias el precio deberia ser 0", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 5, 20) ]);
    const products = {};
    for(let i = 1; i <= 15; i += 1){
      coTest.updatePrice(); 
    }
    expect(coTest.products[0].price, "Precio").equal(0);
    expect(coTest.products[0].sellIn, "SellIn").equal(-10);
  });

  it("Super Sales precio 11 despues de 5 dias el precio deberia ser 1", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 5, 11) ]);
    const products = {};
    for(let i = 1; i <= 5; i += 1){
      coTest.updatePrice(); 
    }
    expect(coTest.products[0].price, "Precio").equal(1);
  });
});
