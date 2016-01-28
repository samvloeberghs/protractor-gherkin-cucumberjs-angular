var TestCalculatorPage = require('../pages/testCalculator_page.js');

function World() {
  this.testCalculatorPage = new TestCalculatorPage();
}

module.exports = function() {
  this.World = World;
};
