var assert = require('assert');
var authController = require('../../controllers/authController');

describe('AuthController', function () {
  describe('isAuthorized', function () {
    beforeEach(function () {
      authController.roles = ['user', 'admin']
    })
     it('role returns false if not authorized', function () {
       assert.equal(false, authController.isAuthorized('steve'));
     })
     it('role returns true if not authorized', function () {
       assert.equal(true, authController.isAuthorized('admin'));
     })
  })
  describe('isAuthorizedSync', function () {
    beforeEach(function () {
      authController.roles = ['user', 'admin']
    })
    it('returns false if not authorized', function (done) {
      this.timeout(2500);
      authController.isAuthorizedSync('steve',
      function (isAuth) {
        assert.equal(false, isAuth);
        done();
      });
    })
    it('returns true if not authorized', function (done) {
      this.timeout(2500);
      authController.isAuthorizedSync('admin',
      function (isAuth) {
        assert.equal(true, isAuth);
        done();
      });
    })
  })
})
