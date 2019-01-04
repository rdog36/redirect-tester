var redirect = require('../redirect.test.js')

describe('ezblocker.com', function() {

  describe('ezblocker.com', function() {
    it('should redirect to http://www.teleflex.com/en/usa/productAreas/anesthesia/productGroups/airway-management/products/endobronchialBlockers/products/ez-blocker/index.html', () => redirect.check('ezblocker.com', null, 'http://www.teleflex.com/en/usa/productAreas/anesthesia/productGroups/airway-management/products/endobronchialBlockers/products/ez-blocker/index.html', 301));
  });

});