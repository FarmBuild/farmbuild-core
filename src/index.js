(function(window, angular) {'use strict';
// Inject modules
  angular.module('farmbuild.core').run(function () {
  });

  window.farmbuild = {
    core: {}
  };

// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
  angular.injector(['ng', 'farmbuild.core']);
})(window, angular)