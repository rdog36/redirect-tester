var redirect = require('../redirect.test.js')

describe('example.vhost.conf', function() {

  describe('example.com', function() {
    it('should redirect to www.demo.com',
    	() => redirect.check(
    		'example.com',
    		null,
    		'http://www.demo.com/'));
  });

  describe('www.example.com', function() {
    it('should redirect to www.demo.com',
    	() => redirect.check(
    		'www.example.com',
    		null,
    		'http://www.demo.com/'));
  });

  describe('www.example.com/demo', function() {
    it('should redirect to www.demo.com/demo',
      () => redirect.check(
        'www.example.com',
        '/demo' ,
        'http://www.demo.com/demo'));
  });

});