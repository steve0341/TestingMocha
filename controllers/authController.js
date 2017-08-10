function AuthController() {
  var roles = [];
  function isAuthorized(neededRole) {
    return this.roles.indexOf(neededRole) >= 0 ;
  }

  function isAuthorizedSync(neededRole, cb) {
    setTimeout(function () { cb(roles.indexOf(neededRole) >= 0)}, 2100);
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
