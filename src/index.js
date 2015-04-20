'use strict';

if(!angular) {
  console.error('farmbuild requires angular JS 1.3.x, please include e.g. ');
}


// Inject modules
angular.module('farmbuild.core').run(function ($log) {
  $log.info('Welcome to FarmBuild core project....');
});

window.farmbuild = {
  core: {}
};

// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
//angular.injector(['ng', 'farmbuild.core']);

//(function(window, angular) {'use strict';
//// Inject modules
//  angular.module('farmbuild.core').run(function () {
//  });
//
//  window.farmbuild = {
//    core: {}
//  };
//
//// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
//  angular.injector(['ng', 'farmbuild.core']);
//})(window, angular)