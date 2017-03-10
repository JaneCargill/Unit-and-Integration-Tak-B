var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it ('should be able to multply numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(-5);
    assert.equal(-15, calculator.runningTotal);
  })

  it ('should be able to divide numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it ('should be able to add numbers', function() {
    calculator.previousTotal = 1;
    calculator.add(4.5);
    assert.equal(5.5, calculator.runningTotal);
  })

  it ('should be able to subtract numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it ('should be able to concatenate multiple number clicks', function() {
    calculator.numberClick(1)
    calculator.numberClick(5)
    assert.equal(15, calculator.runningTotal);
  })

  it ('should be able to chain multiple operations together', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=');
    assert.equal(24, calculator.runningTotal);
  })

  it ('should be able to clear the running total without affecting the calculation', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.equal(14, calculator.runningTotal);
  })

});
