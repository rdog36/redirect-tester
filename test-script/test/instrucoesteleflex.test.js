var redirect = require('../redirect.test.js')

describe('instrucoesteleflex.com.br', function() {

  describe('instrucoesteleflex.com.br', function() {
    it('should redirect to http://www.teleflex.com/pt/la/ifu/index.html', () => redirect.check('instrucoesteleflex.com.br', null, 'http://www.teleflex.com/pt/la/ifu/index.html', 301));
  });

});