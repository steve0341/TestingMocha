var assert = require('assert');
var authController = require('../../controllers/authController');

before(function () {
  authController.roles = ['user', 'admin']
})

describe('AuthController', function () {
  describe('isAuthorized', function () {
     it('role returns false if not authorized', function () {
       assert.equal(false, authController.isAuthorized('steve'));
     })
  })
  describe('isAuthorizedSync', function () {
    it('returns false if not authorized', function (done) {
      this.timeout(2500);
      authController.isAuthorizedSync('steve',
      function (isAuth) {
        assert.equal(false, isAuth);
        done();
      });
    })
  })
})
