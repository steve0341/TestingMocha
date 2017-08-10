function AuthController() {
  var roles = [];

  function setRoles(roles) {
    this.roles = roles
  }

  function isAuthorized(neededRole) {
    return this.roles.indexOf(neededRole) >= 0 ;
  }

  function isAuthorizedSync(neededRole, cb) {
    that = this
    setTimeout(function () { cb(that.roles.indexOf(neededRole) >= 0)}, 2100);
  }

  function exists(obj) {
    return this.indexOf(obj) >= 0;
  }

  return {
    isAuthorized,
    isAuthorizedSync
  }
}

module.exports = AuthController();
