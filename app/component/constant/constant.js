(function() {
  'use strict';

  var prefix = 'http://localhost:4000/';

  angular
    .module('myApp.shared')
    .constant('Constant', {
      URL: {
        LOGIN: prefix + 'vehicle-admin/auth/login',
        CHECK_LOGIN: prefix + 'vehicle-admin/auth/loggedin',
        USERS: prefix + 'vehicle-admin/users',
        PROJECTS: prefix + 'vehicle-admin/projects'
      }
    });

})();
