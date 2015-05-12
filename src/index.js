'use strict';

if(!angular) {
  var version = '1.3.15';
  console.error('farmbuild requires angular JS ' + version +
    ', please include e.g. https://ajax.googleapis.com/ajax/libs/angularjs/'+version+'/angular.min.js ');
  throw new Error('FarmBuild requires angular '+version+', please load it before the farmbuild.core module.');
}

angular.module('farmbuild.core', []);

//window.farmbuild = {
//  core: {}, ga:{}
//};

// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
angular.injector(['ng', 'farmbuild.core']);